import express from 'express';
import passbookService from '../service/passbookService.js';

const router = express.Router();

router.get('/', function (req, res) {
    const userPassbooks = passbookService.getAll();
    res.render('vwPassbook/passbook', {
        passbooks:  userPassbooks,
    });
});

router.get('/inspect', function (req, res) {
    res.render('vwPassbook/inspect');
});

export default router;