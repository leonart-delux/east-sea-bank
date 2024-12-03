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

export default router