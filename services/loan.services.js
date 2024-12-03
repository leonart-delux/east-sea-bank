import db from '../utils/db.js';
export default{
    // Hàm lấy danh sách các khoản vay đã xong
    async getCompletedLoans() {
        return await db('khoan_vay')
            .join('tai_khoan', 'khoan_vay.So_Tai_Khoan', '=', 'tai_khoan.So_Tai_Khoan') // JOIN với bảng tài khoản
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH') // JOIN với bảng khách hàng
            .whereNotNull('Ngay_Ket_Thuc') // Ngày kết thúc phải khác null (đã có ngày kết thúc)
            .select(
                'khoan_vay.*',
                'khach_hang.Ho_Ten', // Lấy thêm thông tin khách hàng
                'khach_hang.SDT',
                'khach_hang.Email'
            );
    },

    // Hàm lấy danh sách các khoản vay đến hạn
    async getDueLoans() {
        const currentDate = new Date().toISOString().split('T')[0]; // Ngày hiện tại
        return await db('khoan_vay')
            .join('tai_khoan', 'khoan_vay.So_Tai_Khoan', '=', 'tai_khoan.So_Tai_Khoan') // JOIN với bảng tài khoản
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH') // JOIN với bảng khách hàng
            .whereRaw('DATE_ADD(Ngay_Bat_Dau, INTERVAL Ky_Han DAY) = ?', [currentDate]) // Ngày hiện tại = ngày bắt đầu + kỳ hạn
            .whereNull('Ngay_Ket_Thuc') // Ngày kết thúc là null (chưa hoàn thành)
            .select(
                'khoan_vay.*',
                'khach_hang.Ho_Ten', // Lấy thêm thông tin khách hàng
                'khach_hang.SDT',
                'khach_hang.Email'
            );
    },

    // Hàm lấy danh sách các khoản vay quá hạn
    async getOverdueLoans() {
        const currentDate = new Date().toISOString().split('T')[0]; // Ngày hiện tại
        return await db('khoan_vay')
            .join('tai_khoan', 'khoan_vay.So_Tai_Khoan', '=', 'tai_khoan.So_Tai_Khoan') // JOIN với bảng tài khoản
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH') // JOIN với bảng khách hàng
            .whereRaw('DATE_ADD(Ngay_Bat_Dau, INTERVAL Ky_Han DAY) < ?', [currentDate]) // Ngày hiện tại > ngày bắt đầu + kỳ hạn
            .whereNull('Ngay_Ket_Thuc') // Ngày kết thúc là null (chưa hoàn thành)
            .select(
                'khoan_vay.*',
                'khach_hang.Ho_Ten', // Lấy thêm thông tin khách hàng
                'khach_hang.SDT',
                'khach_hang.Email'
            );
    }
}