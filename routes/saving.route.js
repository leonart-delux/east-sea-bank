import express from 'express';
import savingOptionService from '../service/savingOptionService.js';
import savingPlanService from '../service/savingPlanService.js';

const router = express.Router();

// Saving routing - step 1
router.get('/register', async function (req, res) {
    const savingOptions = await savingOptionService.getAll();
    const savingPlans = await savingPlanService.getAll();

    res.render('vwSaving/register', {
        savingOptions: savingOptions,
        savingPlans: savingPlans
    });
});

router.post('/register', function (req, res) {
    res.redirect('/logged/saving/auth-account');
});

// Saving routing - step 2
router.get('/auth-account', function (req, res) {
    res.render('vwSaving/auth-account');
});

router.post('/auth-account', function (req, res) {
    res.redirect('/logged/saving/review');
});

// Saving routing - step 3
router.get('/review', function (req, res) {
    res.render('vwSaving/review');
});

router.post('/review', function (req, res) {
    res.redirect('/logged/saving/success');
});

// Saving routing - step 4
router.get('/success', function (req, res) {
    res.render('vwSaving/success');
});

export default router;