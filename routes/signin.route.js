import express from 'express';
import userService from '../service/userService.js';
import {formatDate} from "../utils/db.js";
import uniqueString from "unique-string";
import bcrypt from 'bcryptjs'

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
        userCreated: false,
    });
});

router.post('/step-2', async function (req, res) {

    const random_generated_string = uniqueString();
    const hash_password = bcrypt.hashSync(random_generated_string, 8);
    const user = {
        ho_ten: req.body.fullName,
        sdt: req.body.phoneNumber,
        email: req.body.email,
        cccd: req.body.cccd,
        ngay_mo_tai_khoan: formatDate(Date.now()),
        ngay_sinh: req.body.dob,
        diem_tin_dung: 50,
        ngay_cap_cccd: req.body.issuedDate,
        noi_cap_cccd: req.body.issuedAddress,
        gioi_tinh: req.body.sex,
        quoc_tich: req.body.nationality,
        que_quan: req.body.homeTown,
        dia_chi_thuong_tru: req.body.contemptAddress,
        dia_chi_lien_he: req.body.contactAddress,
        trang_thai: "Pending",
        password: hash_password,
    }
    console.log(user);
    console.log(req.body.phoneNumber);
    const ret = await userService.addUserInfo(user);
    res.render('sign-in/step-2', {
        layout: false,
        userCreated: true,
        password: random_generated_string,
        phoneNumber: req.body.phoneNumber,
    });


});

// Sign in routing - step 3
router.get('/step-3', function (req, res) {
    res.render('sign-in/step-2', {
        layout: false,
        userInfo: req.session.userInfo,
    });
});

export default router;