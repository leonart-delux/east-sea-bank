import express from 'express';
import {engine} from 'express-handlebars';

import livereload from 'livereload';
import connectLiveReload from 'connect-livereload'
import bodyParser from "body-parser";
import session from "express-session"
import numeral from 'numeral';
import hbs_section from 'express-handlebars-sections';

import signinRouter from './routes/signin.route.js';
import transferRouter from './routes/transfer.route.js';
import savingRouter from './routes/saving.route.js';
import passbookRouter from './routes/passbook.route.js';
import loanRouter from './routes/loan.route.js';
import accountRouter from "./routes/account.route.js";
import debtRouter from './routes/debt.route.js';
import loginRouter from "./routes/login.route.js";
import UsersRouter from './routes/manageUser.router.js';
import LoansRouter from './routes/loan.router.js';
import SavingRouter from './routes/saving.router.js'
import interestRouter from './routes/interest.router.js';

import staticServices from './services/statistic.servies.js'


import {generateRandomString} from "./utils/db.js";
import { isAuth } from './middlewares/midwares.js';


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 1);
});

// ------- Main app
const app = express();

//Khi đăng nhập từ bước 1 sang bước 2 thì có lưu 2 thông tin là sdt và họ tên
//Sử dụng session để lưu dữ liệu
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: "NhatKyVienPhuong",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));


//Module cho việc parse dữ liệu trong form thành json
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

//module dùng cho việc auto reload server khi thay đổi code
//npm run watch để run
app.use(connectLiveReload());

// Config express and use 
app.engine('hbs', engine({
    extname: 'hbs',
    helpers:{
        format_number(value) {
            return numeral(value).format('0,0');
        },
        random_generate_string() {
            return generateRandomString();
        },
        formatNumber(value) {
            return numeral(value).format('0,0') + ' VNĐ';
        },
        formatRate(value) {
            return numeral(value).format('0.00%');
        },
        calTotalPassbookMoney(passbook) {
            return passbook.Tien_Goc + passbook.Tien_Lai;
        },
        calPassbookGrowthRate(passbook) {
            return (passbook.Tien_Lai / passbook.Tien_Goc).toFixed(4);
        },
        calTotalPassbooksMoney(passbooks) {
            return passbooks.reduce((sum, passbook) => sum + passbook.Tien_Goc + passbook.Tien_Lai, 0);
        },
        calTotalPassbooksGrowth(passbooks) {
            const totalBaseMoney = passbooks.reduce((sum, passbook) => sum + passbook.Tien_Goc, 0);
            const totalProfit = passbooks.reduce((sum, passbook) => sum + passbook.Tien_Lai, 0);
            if (totalBaseMoney === 0) return 0;
            return (totalProfit / totalBaseMoney).toFixed(4);
        },
        section: hbs_section(),
    }
}));

app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/public', express.static('public'));
app.use('/images', express.static('images'));

// Admin router

app.use('/admin',UsersRouter);
app.use('/admin',LoansRouter);
app.use('/admin',SavingRouter);
app.use('/admin',interestRouter);


app.get('/admin/Statistics',async (req, res) => {
    const data = await staticServices.getAllAggregates()
    const totalInBank=200000000000-data.totalLoan+data.totalSaving
    const totalInterest=data.totalLoanInterest-data.nonTermSavingInterest-data.totalTermPayment
    console.log(data)
    res.render('vwAdmin/statistics', {
        data:data,
        totalInBank:totalInBank,
        totalInterest:totalInterest,
        layout: 'admin'
    });
});

// User router

// Home page routing
app.get('/', isAuth, function (req, res) {
    res.render('home_login_register', {
        layout: false
    });
});

// Sign-in routing
app.use('/sign-in', signinRouter);

// For account
app.use('/account', accountRouter);

// For login
app.use('/login', loginRouter);

// Logged routing
app.get('/logged/home', isAuth, function (req, res) {
    res.render('home', {
        user: req.session.authUser,
    });
});

// Transfer routing
app.use('/logged/transfer', isAuth, transferRouter);

// Saving routing
app.use('/logged/saving', isAuth, savingRouter);

// Passbook routing 
app.use('/logged/passbook', isAuth, passbookRouter);

// Loan routing 
app.use('/logged/loan', isAuth, loanRouter);

// Pay debt routing 
app.use('/logged/debts/', isAuth, loanRouter);

app.use('/logged/debtbook', isAuth, debtRouter);

// Listen on port
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});