import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwLoan/loan');
});

// Loan routing - step 1
router.get('/make-a-loan/step-1', function (req, res) {
    res.render('vwLoan/loan1');
});

// Loan routing - step 2
router.get('/make-a-loan/step-2', function (req, res) {
    res.render('vwLoan/loan2');
});

// Loan routing - step 3
router.get('/make-a-loan/step-3', function (req, res) {
    res.render('vwLoan/loan3');
});

// Loan routing - step 4
router.get('/make-a-loan/step-4', function (req, res) {
    res.render('vwLoan/loan4');
});

export default router;