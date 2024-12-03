import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwLoan/loan-types_of_loan');
});

// Loan routing - step 1
router.get('/make-a-loan/policy', function (req, res) {
    res.render('vwLoan/loan-policy');
});


// Loan routing - step 2
router.get('/make-a-loan/loan-unsecured-type', function (req, res) {
    res.render('vwLoan/unsecured-loan');
});

router.post('/make-a-loan/loan-unsecured-type', function (req, res) {
    res.redirect('loan-information');
});

router.get('/make-a-loan/loan-information', function (req, res) {
    res.render('vwLoan/unsecured-loan-information');
});

router.get('/make-a-loan/loan-finished', function (req, res) {
    res.render('vwLoan/loan-finished');
});

// Loan routing - step 3
router.get('/make-a-loan/pay-loan', function (req, res) {
    res.render('vwLoan/pay-loan');
});

router.get('/make-a-loan/pay-loan-finished', function (req, res) {
    res.render('vwLoan/pay-loan-finished');
});

router.post('/make-a-loan/pay-loan', function (req, res) {
    res.redirect('pay-loan-finished');
});

// ---

router.get('/make-a-loan/secured-loan', function (req, res) {
    res.render('vwLoan/secured-loan');
});

router.post('/make-a-loan/secured-loan', function (req, res) {
    res.redirect('secured-loan-information-confirm');
});

router.get('/make-a-loan/secured-loan-information-confirm', function (req, res) {
    res.render('vwLoan/secured-loan-information');
});

// Loan routing - step 4
router.get('/make-a-loan/step-4', function (req, res) {
    res.render('vwLoan/loan4');
});

export default router;