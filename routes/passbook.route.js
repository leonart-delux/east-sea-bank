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
    const savingPlan = await passbookService.getFullPassbookDetailById(id);

    const savingType = savingPlan.ten_loai_hinh_tiet_kiem;
    const isLimitTime = savingType === 'Có kỳ hạn';

    res.render('vwPassbook/inspect', {
        passbook: passbookInfor,
        savingPlan: savingPlan,
        isLimitTime: isLimitTime
    });
});

export default router;