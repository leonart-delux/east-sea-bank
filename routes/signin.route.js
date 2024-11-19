import express from 'express';
import userService from '../service/userService.js';

const router = express.Router();

router.use(express.urlencoded({
    extended: true
}));

// Sign in routing - step 1
router.get('/step-1', function (req, res) {
    res.render('sign-in/step-1', {
        layout: false,
    });
});

router.post('/step-1', function (req, res) {
    console.log(req.body);
    req.session.userInfo = {
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
    };
    res.redirect('/sign-in/step-2');

});

// Sign in routing - step 2
router.get('/step-2', function (req, res) {
    res.render('sign-in/step-2', {
        layout: false,
        userInfo: req.session.userInfo,
    });
});

router.post('/step-2', async function (req, res) {
    console.log(await userService.addUserInfo(req.body));

});

// Sign in routing - step 3
router.get('/step-3', function (req, res) {
    res.render('sign-in/step-2', {
        layout: false,
        userInfo: req.session.userInfo,
    });
});

export default router;