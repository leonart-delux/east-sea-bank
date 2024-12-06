import db from '../utils/db.js';
export default{
    getCompletedSaving(){
        return db('vi_tiet_kiem as v')
            .leftJoin('tai_khoan as tk', 'v.So_Tai_Khoan', '=', 'tk.So_Tai_Khoan')
            .leftJoin('khach_hang as kh', 'tk.Ma_KH', '=', 'kh.Ma_KH')
            .leftJoin('goi_tiet_kiem as gt', 'v.Ma_Goi_Tiet_Kiem', '=', 'gt.Ma_Goi')
            .leftJoin('tuy_chon_sau_khi_het_han as tc', 'v.Ma_Tuy_Chon', '=', 'tc.Ma_Tuy_Chon')
            .where('v.Dong_So',1) // Ví đã hết hạn
            .select(
                'v.Ma_Vi',
                'v.So_Tai_Khoan',
                'v.Tien_Goc',
                'v.Tien_Lai',
                'v.Ngay_Gui',
                'v.Lai',
                'kh.Ho_Ten',
                'kh.Email',
                'kh.SDT',
                'gt.Ten_Loai_Hinh_Tiet_Kiem',
                'gt.Lai_Suat',
                'gt.Thoi_Gian_Ky_Han',
                'tc.Ten_Tuy_Chon'
            )
    },
    getActiveSaving() {
        return db('vi_tiet_kiem as v')
            .leftJoin('tai_khoan as tk', 'v.So_Tai_Khoan', '=', 'tk.So_Tai_Khoan')
            .leftJoin('khach_hang as kh', 'tk.Ma_KH', '=', 'kh.Ma_KH')
            .leftJoin('goi_tiet_kiem as gt', 'v.Ma_Goi_Tiet_Kiem', '=', 'gt.Ma_Goi')
            .leftJoin('tuy_chon_sau_khi_het_han as tc', 'v.Ma_Tuy_Chon', '=', 'tc.Ma_Tuy_Chon')
            .where('v.Dong_So',0) // Ví đang hoạt động
            .select(
                'v.Ma_Vi',
                'v.So_Tai_Khoan',
                'v.Tien_Goc',
                'v.Tien_Lai',
                'v.Ngay_Gui',
                'v.Lai',
                'kh.Ho_Ten',
                'kh.Email',
                'kh.SDT',
                'gt.Ten_Loai_Hinh_Tiet_Kiem',
                'gt.Lai_Suat',
                'gt.Thoi_Gian_Ky_Han',
                'tc.Ten_Tuy_Chon'
            );
    },
    getDetails(Ma_Vi) {
        return db('vi_tiet_kiem')  // Bảng chứa thông tin ví tiết kiệm
            .join('tai_khoan', 'vi_tiet_kiem.So_Tai_Khoan', '=', 'tai_khoan.So_Tai_Khoan')  // Liên kết với bảng tài khoản
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH')  // Liên kết với bảng khách hàng
            .join('goi_tiet_kiem', 'vi_tiet_kiem.Ma_Goi_Tiet_Kiem', '=', 'goi_tiet_kiem.Ma_Goi')
            .select(
                'khach_hang.Ho_Ten',
                'khach_hang.CCCD',
                'khach_hang.Email',
                'khach_hang.SDT',
                'khach_hang.Dia_Chi_Thuong_Tru',
                'khach_hang.Dia_Chi_Lien_He',
                'tai_khoan.So_Tai_Khoan',
                'vi_tiet_kiem.Tien_Goc',
                'vi_tiet_kiem.Tien_Lai',
                'vi_tiet_kiem.Ngay_Gui',
                'goi_tiet_kiem.Lai_Suat',
                'goi_tiet_kiem.Ten_Loai_Hinh_Tiet_Kiem'
            )
            .where('vi_tiet_kiem.Ma_Vi', Ma_Vi)  // Lọc theo mã ví
            .first();  // Trả về 1 bản ghi duy nhất
    }
    
}