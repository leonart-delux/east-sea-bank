import express from "express";
import userService from "../service/userService.js";

const router = express.Router();

router.get('/is-available', async function (req, res) {
    const cccd = req.query.cccd;
    const phoneNumber = req.query.phoneNumber;
    const user = await userService.isThisCustomerInfoExisted(cccd, phoneNumber);
    //Nếu user này đã tồn tại
    //Bao gồm việc nếu tồn tại cccd hoặc phoneNumber đã có trong db thì hủy tạo mới tài khoản
    if (user) {
        return res.json(false);
    }
    return res.json(true);
});

export default router;