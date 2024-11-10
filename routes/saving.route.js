import express from 'express';

const router = express.Router();

// Saving routing - step 1
router.get('/step-1', function (req, res) {
    res.render('vwSaving/saving1');
});

// Saving routing - step 2
router.get('/step-2', function (req, res) {
    res.render('vwSaving/saving2');
});

// Saving routing - step 3
router.get('/step-3', function (req, res) {
    res.render('vwSaving/saving3');
});

// Saving routing - step 4
router.get('/step-4', function (req, res) {
    res.render('vwSaving/saving4');
});

export default router;