import express from 'express';
import transferService from "../service/transferService.js";
const router = express.Router();

router.get('/',  async function (req, res) {
    const directoryList = transferService.getDirectoryList();
    res.render('vwTransfer/transferDefault',{
        directoryList: directoryList,
    });
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

router.post('/transfer-confirm', function (req, res) {
    res.redirect('/logged/transfer/transfer-finished');
});

// Transfer routing - step 3
router.get('/transfer-finished', function (req, res) {

    res.render('vwTransfer/transfer-finished');
});

export default router;