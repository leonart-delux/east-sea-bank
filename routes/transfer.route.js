import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwTransfer/transferDefault');
});

router.post('/', function (req, res) {
    req.session.transferInfo = {
        bank: req.body.bank,
        accountNumber: req.body.accountNumber,
    };
    res.redirect('/logged/transfer/transfer-information');
});


// Transfer routing - step 1
router.get('/transfer-information', function (req, res) {
    res.render('vwTransfer/transfer-information');
});
router.post('/transfer-information', function (req, res) {
    req.session.moneyAndContent = {
        money: req.body.moneyAmount,
        transactionContent: req.body.transactionContent,
    };
    res.redirect('/logged/transfer/transfer-confirm');
});

// Transfer routing - step 2
router.get('/transfer-confirm', function (req, res) {
    res.render('vwTransfer/transfer-confirm', {
        // transactionInformation: {
        //     accountReceivedNumber: req.session.transferInfo.accountNumber,
        //     bank: req.session.transferInfo.bank,
        //     money: req.session.moneyAndContent.money,
        //     content: req.session.moneyAndContent.transactionContent,
        //     accountSentNumber: '134134341234',
        //         receiverName:"NULL"
        //
        //
        // }
    });
});

// Transfer routing - step 3
router.get('/step-3', function (req, res) {
    res.render('vwTransfer/transfer3');
});

export default router;