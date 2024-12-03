import db from '../utils/db.js';
export default{
    async getCompletedSaving(){
        return await db('vi_tiet_kiem as v')
            .join('khach_hang as kh', 'v.So_Tai_Khoan', '=', 'kh.Ma_KH')
            .join('goi_tiet_kiem as gt', 'v.Ma_Goi_Tiet_Kiem', '=', 'gt.Ma_Goi')
            .join('tuy_chon_sau_khi_het_han as tc', 'v.Ma_Tuy_Chon', '=', 'tc.Ma_Tuy_Chon')
            .whereNotNull('v.Dong_So') // Ví đã hết hạn
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
    async getActiveSaving() {
        return await db('vi_tiet_kiem as v')
            .join('khach_hang as kh', 'v.So_Tai_Khoan', '=', 'kh.Ma_KH')
            .join('goi_tiet_kiem as gt', 'v.Ma_Goi_Tiet_Kiem', '=', 'gt.Ma_Goi')
            .join('tuy_chon_sau_khi_het_han as tc', 'v.Ma_Tuy_Chon', '=', 'tc.Ma_Tuy_Chon')
            .whereNull('v.Dong_So') // Ví đang hoạt động
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
    }
}