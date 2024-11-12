import express from 'express';
import {engine} from 'express-handlebars';

import livereload from 'livereload';
import connectLiveReload from 'connect-livereload'
import bodyParser from "body-parser";
import session from "express-session"
import numeral from 'numeral';
import signinRouter from './routes/signin.route.js';
import transferRouter from './routes/transfer.route.js';
import savingRouter from './routes/saving.route.js';
import passbookRouter from './routes/passbook.route.js';
import loanRouter from './routes/loan.route.js';
import debtRouter from './routes/debt.route.js';


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 1);
});
const app = express();

//Khi đăng nhập từ bước 1 sang bước 2 thì có lưu 2 thông tin là sdt và họ tên
//Sử dụng session để lưu dữ liệu
app.use(session({
    secret: "NhatKyVienPhuong",
    resave: false,
    saveUninitialized: true
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

    }
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.static('./images'))
app.use('/images', express.static('images'));


// Home page routing
app.get('/', function (req, res) {
    res.render('home_login_register', {
        layout: false
    });
});

// Log in routing
app.get('/login', function (req, res) {
    res.render('login'
        , {
            layout: false
        });
});

// Sign-in routing
app.use('/sign-in', signinRouter);

// Logged routing
app.get('/logged/home', function (req, res) {
    res.render('home');
});

// Transfer routing
app.use('/logged/transfer', transferRouter);

// Saving routing
app.use('/logged/saving', savingRouter);

// Passbook routing 
app.use('/logged/passbook', passbookRouter);

// Loan routing 
app.use('/logged/loan', loanRouter);

// Pay debt routing 
app.use('/logged/debts/', loanRouter);

// Listen on port
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});