import express from 'express';
import savingOptionService from '../service/savingOptionService.js';
import savingPlanService from '../service/savingPlanService.js';

const router = express.Router();

// Saving routing - step 1
router.get('/register', function (req, res) {
    const savingOptions = savingOptionService.getAll();
    const savingPlans = savingPlanService.getAll();

    res.render('vwSaving/register', {
        savingOptions: savingOptions,
        savingPlans: savingPlans
    });
});

// Saving routing - step 2
router.get('/auth-account', function (req, res) {
    res.render('vwSaving/account');
});

// Saving routing - step 3
router.get('/review', function (req, res) {
    res.render('vwSaving/review');
});

// Saving routing - step 4
router.get('/success', function (req, res) {
    res.render('vwSaving/success');
});

export default router;