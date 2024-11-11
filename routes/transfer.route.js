import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwTransfer/transferDefault');
});

// Transfer routing - step 1
router.get('/step-1', function (req, res) {
    res.render('vwTransfer/step-1');
});

// Transfer routing - step 2
router.get('/step-2', function (req, res) {
    res.render('vwTransfer/transfer2');
});

// Transfer routing - step 3
router.get('/step-3', function (req, res) {
    res.render('vwTransfer/transfer3');
});

export default router;