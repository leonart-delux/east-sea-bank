import express from 'express';
import passbookService from '../service/passbookService.js';

const router = express.Router();

router.get('/', function (req, res) {
    const userPassbooks = passbookService.getAll();
    res.render('vwPassbook/passbook', {
        passbooks:  userPassbooks,
    });
});

router.get('/inspect', async function (req, res) {
    const id = +req.body.id;
    const passbookInfor = await passbookService.getById(id);
    res.render('vwPassbook/inspect', {
        passbook: passbookInfor
    });
});

export default router;