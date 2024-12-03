import express from 'express';
import app from "express-session/session/memory.js";

const router = express.Router();

router.get('/', function (req, res) {
    res.render('vwPassbook/passbook');
});

router.get('/inspect', function (req, res) {
    res.render('vwPassbook/inspect');
});

export default router;