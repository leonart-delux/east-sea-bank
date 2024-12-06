import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwDebtBook/debtbook');
});

// Pay debt routing - repay - step 1
router.get('/repay/step-1', function (req, res) {
    res.render('vwDebt/repay1');
});

// Pay debt routing - repay - step 2
router.get('/repay/step-2', function (req, res) {
    res.render('vwDebt/repay2');
});

export default router;