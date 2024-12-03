import express from "express";
import {generateRandomString} from "../utils/db.js";
import userService from "../service/userService.js";
import bcrypt from 'bcryptjs'

const router = express.Router();

router.get('/', function (req, res) {
    const randomStringCaptcha = generateRandomString();
    console.log(randomStringCaptcha);
    res.render('vwLogin/login', {
        layout: false,
        randomCaptcha: randomStringCaptcha,
    });
});
router.get('/generate-captcha', function (req, res) {
    const newCaptcha = generateRandomString();
    res.json(newCaptcha);
});

router.post('/', async function (req, res) {
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    const user = await userService.findCustomeByPhoneNumber(phoneNumber);
    if (!user) {
        console.log('user not found')
        return res.render('vwLogin/login', {
            layout: false,
            has_errors: true,
            randomCaptcha: generateRandomString(),
        });
    }
    const ret = bcrypt.compareSync(password, user.Password);
    if (!ret) {
        console.log('Password wrong');
        return res.render('vwLogin/login', {
            layout: false,
            has_errors: true,
            randomCaptcha: generateRandomString(),
        });
    }
    req.session.auth = true;
    req.session.authUser = user;
    res.redirect('/logged/home')

});

export default router;