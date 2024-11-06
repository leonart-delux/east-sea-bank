import express from 'express';
import { engine } from 'express-handlebars';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload'

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 1);
});

const app = express();

app.use('/images', express.static('images'));

app.use(connectLiveReload());

app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('./public'));

// Home page routing
app.get('/', function (req, res) {
    res.render('home_login_register',{
        layout:false
    });
});

// Log in routing
app.get('/login', function (req, res) {
    res.render('login');
})

// Sign in routing - step 1
app.get('/sign-in/step-1', function (req, res) {
    res.render('signin1');
})

// Sign in routing - step 2
app.get('/sign-in/step-2', function (req, res) {
    res.render('signin2');
})

// Sign in routing - step 3
app.get('/sign-in/step-3', function (req, res) {
    res.render('signin3');
})

// Logged routing
app.get('/logged/home', function (req, res) {
    res.render('logged');
})

// Transfer routing
app.get('/logged/tranfser', function (req, res) {
    res.render('transfer');
})

// Transfer routing - step 1
app.get('/logged/tranfser-step-1', function (req, res) {
    res.render('transfer1');
})

// Transfer routing - step 2
app.get('/logged/tranfser-step-2', function (req, res) {
    res.render('transfer2');
})

// Transfer routing - step 3
app.get('/logged/tranfser-step-3', function (req, res) {
    res.render('transfer3');
})

// Saving routing - step 1
app.get('/logged/saving-step-1', function (req, res) {
    res.render('saving1');
})

// Saving routing - step 2
app.get('/logged/saving-step-2', function (req, res) {
    res.render('saving2');
})

// Saving routing - step 3
app.get('/logged/saving-step-3', function (req, res) {
    res.render('saving3');
})

// Saving routing - step 4
app.get('/logged/saving-step-4', function (req, res) {
    res.render('saving4');
})

// Passbook routing 
app.get('/logged/passbook', function (req, res) {
    res.render('passbook');
})

// Passbook routing - step 2
app.get('/logged/passbook/inspect', function (req, res) {
    res.render('inspectPassbook');
})

// Loan routing 
app.get('/logged/loan', function (req, res) {
    res.render('loan');
})

// Loan routing - step 1
app.get('/logged/loan/make-a-loan-step-1', function (req, res) {
    res.render('loan1');
})

// Loan routing - step 2
app.get('/logged/loan/make-a-loan-step-2', function (req, res) {
    res.render('loan2');
})

// Loan routing - step 3
app.get('/logged/loan/make-a-loan-step-3', function (req, res) {
    res.render('loan3');
})

// Loan routing - step 4
app.get('/logged/loan/make-a-loan-step-4', function (req, res) {
    res.render('loan4');
})

// Pay debt routing 
app.get('/logged/debts', function (req, res) {
    res.render('debts');
})

// Pay debt routing - repay - step 1
app.get('/logged/debts/repay-step-1', function (req, res) {
    res.render('repay1');
})

// Pay debt routing - repay - step 2
app.get('/logged/debts/repay-step-2', function (req, res) {
    res.render('repay2');
})

// Listen on port
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});