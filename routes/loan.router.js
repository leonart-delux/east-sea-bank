import express from 'express'
import loanServices from '../services/loan.services.js';

const router= express.Router()

router.get('/Loans',async (req, res) => {
    const Completed= await loanServices.getCompletedLoans();
    const Due= await loanServices.getDueLoans();
    const OverDue= await loanServices.getOverdueLoans();
    console.log('Completed:', Completed);
    console.log('Due:', Due);
    console.log('OverDue:', OverDue);
    res.render('vwAdmin/loanManagement', {
        Completed:Completed,
        Due:Due,
        Overdue:OverDue,
        layout: 'admin'
    });
  });
  router.get('/Loans/details',async (req, res) => {
    const Ma_Vay = parseInt(req.query.Ma_Vay || 0);
    const data = await loanServices.getDetails(Ma_Vay)
    console.log(data)
    res.render('vwAdmin/loanInfor', {
        data:data,
        layout: 'admin'
    });
  });

export default router