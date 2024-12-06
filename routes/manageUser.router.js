import express from 'express'
import userServices from '../services/user.services.js';

const router= express.Router()

router.get('/',async (req, res) => {
    const list=await userServices.GetAllCustomer();
    console.log(list)
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
        const totalSoDu = (await userServices.getTotalSoDu(Ma_KH) || { totalSoDu: 0 }).totalSoDu;
        const totalTienGuiTietKiem = (await userServices.getTotalTienGuiTietKiem(Ma_KH) || { totalTienGui: 0 }).totalTienGui;
        const totalTienVay = (await userServices.getTotalTienVay(Ma_KH) || { totalTienVay: 0 }).totalTienVay;
        const total= totalSoDu+totalTienGuiTietKiem-totalTienVay;
        const listAccount = await userServices.getListAccounts(Ma_KH);
        const listSavings = await userServices.getListSavings(Ma_KH);
        const listLoans = await userServices.getListLoans(Ma_KH);
        // console.log(totalSoDu)
        // console.log(totalTienGuiTietKiem)
        // console.log(totalTienVay)
        // console.log(total)
        console.log(data)
        // console.log(listAccount)
        // console.log(listSavings)
        // console.log(listLoans)
        if (!data) {
            return res.status(404).send('Khách hàng không tồn tại');
        }

        res.render('vwAdmin/customerInfor', {
            data: data,
            totalSoDu:totalSoDu,
            totalTienVay:totalTienVay,
            totalTienGuiTietKiem:totalTienGuiTietKiem,
            listAccount:listAccount,
            listSavings:listSavings,
            listLoans:listLoans,
            total:total,
            layout: 'admin',
        });
    } catch (err) {
        console.error('Error fetching customer details:', err);
        res.status(500).send('Internal Server Error');
    }
});

export default router