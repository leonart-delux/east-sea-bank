import express from 'express'
import SavingServices from '../services/saving.services.js';

const router= express.Router()

router.get('/Savings',async (req, res) => {
    const Completed= await SavingServices.getCompletedSaving()
    const Active= await SavingServices.getActiveSaving()
    console.log(Completed)
    console.log(Active)
    res.render('vwAdmin/savingManagement', {
        Completed:Completed,
        Active,Active,
        layout: 'admin'
    });
});
router.get('/Savings/details',async (req, res) => {
    const Ma_Vi = parseInt(req.query.Ma_Vi || 0);
    const data = await SavingServices.getDetails(Ma_Vi)
    res.render('vwAdmin/savingInfor', {
        data:data,
        layout: 'admin'
    });
});
export default router