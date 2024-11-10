import express from 'express';

const router = express.Router();

app.get('/', function (req, res) {
    res.render('vwPassbook/passbook');
});

app.get('/inspect', function (req, res) {
    res.render('vwPassbook/inspect');
});

export default router;