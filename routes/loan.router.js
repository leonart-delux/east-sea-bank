import express from 'express'
import loanServices from '../services/loan.services.js';

const router= express.Router()

router.get('/admin/Loans',async (req, res) => {
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

export default router