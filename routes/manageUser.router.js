import express from 'express'
import userServices from '../services/user.services.js';

const router= express.Router()

router.get('/',async (req, res) => {
    const list=await userServices.GetAllCustomer();
    res.render('vwAdmin/manageUsers',{
      list: list,
      layout: 'admin'
    });
});

router.get('/search', async (req, res) => {
    const { text } = req.query; // Lấy từ khóa tìm kiếm từ query string
    try {
        // Gọi hàm `findByText` từ userServices để lấy dữ liệu
        const result = await userServices.findByText(text);

        // Render kết quả ra giao diện
        res.render('vwAdmin/manageUsers', {
            list: result, // Gửi danh sách kết quả
            layout: 'admin',
        });
    } catch (err) {
        console.error('Error searching customers:', err);
        res.status(500).send('Internal Server Error');
    }
});

//User?Ma_KH=
// router.get('/User',async (req, res) => {
//     const Ma_KH=parseInt(req.query.Ma_KH || 0);
//     const data= await userServices.findByMa_KH(Ma_KH)
//     res.render('customerInfor', {
//         data: data,
//         layout: 'admin'
//     });
//   });

router.get('/User', async (req, res) => {
    const Ma_KH = parseInt(req.query.Ma_KH || 0); // Lấy Ma_KH từ query string
    try {
        if (!Ma_KH) {
            return res.status(400).send('Mã khách hàng không hợp lệ');
        }

        const data = await userServices.findByMa_KH(Ma_KH); // Truyền Ma_KH vào hàm
        if (!data) {
            return res.status(404).send('Khách hàng không tồn tại');
        }

        res.render('vwAdmin/customerInfor', {
            data: data,
            layout: 'admin',
        });
    } catch (err) {
        console.error('Error fetching customer details:', err);
        res.status(500).send('Internal Server Error');
    }
});

export default router