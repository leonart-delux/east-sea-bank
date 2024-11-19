import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwPassbook/passbook');
});

router.get('/inspect', function (req, res) {
    res.render('vwPassbook/inspect');
});

export default router;