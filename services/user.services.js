import db from '../utils/db.js';
export default{
    // GetAllCustomer(){
    //     const result = db('khach_hang')
    //     .join('tai_khoan', 'khach_hang.Ma_KH', '=', 'tai_khoan.Ma_KH') // JOIN hai bảng
    //     return result;
    // },
    GetAllCustomer() {
        return db('khach_hang')
            .leftJoin('tai_khoan', 'khach_hang.Ma_KH', '=', 'tai_khoan.Ma_KH') // JOIN hai bảng
            .select(
                'khach_hang.Ma_KH',
                'khach_hang.Ho_Ten',
                'khach_hang.SDT',
                'khach_hang.Email',
                'khach_hang.Diem_Tin_Dung',
                // Thêm các trường khác bạn cần từ bảng khach_hang
            )
            .sum('tai_khoan.So_Du as Tong_So_Du') // Tính tổng số dư
            .groupBy('khach_hang.Ma_KH', 'khach_hang.Ho_Ten', 'khach_hang.SDT', 'khach_hang.Email', 'khach_hang.Diem_Tin_Dung') // Nhóm theo các trường không tổng hợp
            .orderBy('khach_hang.Ma_KH'); // Sắp xếp theo ID khách hàng (tuỳ chọn)
    },
    findByText(searchText) {
        const result = db('khach_hang')
        .leftJoin('tai_khoan', 'khach_hang.Ma_KH', '=', 'tai_khoan.Ma_KH') // JOIN hai bảng
        .select(
            'khach_hang.Ma_KH',
            'khach_hang.Ho_Ten',
            'khach_hang.SDT',
            'khach_hang.Email',
            'khach_hang.Diem_Tin_Dung',
            // Thêm các trường khác bạn cần từ bảng khach_hang
        )
        .sum('tai_khoan.So_Du as Tong_So_Du') // Tính tổng số dư
        .groupBy('khach_hang.Ma_KH', 'khach_hang.Ho_Ten', 'khach_hang.SDT', 'khach_hang.Email', 'khach_hang.Diem_Tin_Dung') // Nhóm theo các trường không tổng hợp
        .orderBy('khach_hang.Ma_KH') // Sắp xếp theo ID khách hàng (tuỳ chọn)
        .where(function () {
            this.where('khach_hang.Ho_Ten', 'like', `%${searchText}%`) // Tìm theo Họ Tên
                .orWhere('khach_hang.SDT', 'like', `%${searchText}%`) // Tìm theo Số điện thoại
                .orWhere('khach_hang.Email', 'like', `%${searchText}%`); // Tìm theo Email
        });
        return result;
    },
    findByMa_KH(Ma_KH){
        return db('khach_hang').where('Ma_KH', Ma_KH).first()
    },
    getTotalSoDu(Ma_KH) {
        return db('tai_khoan')
          .where('Ma_KH', Ma_KH)
          .sum('So_Du as totalSoDu')
          .first()
    },
    getTotalTienGuiTietKiem(Ma_KH) {
        return db('vi_tiet_kiem')
          .join('tai_khoan', 'vi_tiet_kiem.So_Tai_Khoan', 'tai_khoan.So_Tai_Khoan')
          .where('tai_khoan.Ma_KH', Ma_KH)
          .sum('vi_tiet_kiem.Tien_Goc as totalTienGui')
          .first();
    },
    getTotalTienVay(Ma_KH){
        return db('khoan_vay')
        .join('tai_khoan', 'khoan_vay.So_Tai_Khoan', 'tai_khoan.So_Tai_Khoan')
        .where('tai_khoan.Ma_KH', Ma_KH)
        .sum('khoan_vay.Khoan_Vay as totalTienVay')
        .first();
    },
    
    getListAccounts(Ma_KH){
        return db('tai_khoan')
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH')
            .where('tai_khoan.Ma_KH', Ma_KH)
            .select('tai_khoan.So_Tai_Khoan', 'tai_khoan.So_Du', 'tai_khoan.Tinh_Trang');
    },
    getListSavings(Ma_KH) {
        return db('vi_tiet_kiem')
            .join('tai_khoan', 'vi_tiet_kiem.So_Tai_Khoan', '=', 'tai_khoan.So_Tai_Khoan')
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH')
            .where('tai_khoan.Ma_KH', Ma_KH)
            .select('vi_tiet_kiem.So_Tai_Khoan', 'vi_tiet_kiem.Tien_Goc', 'vi_tiet_kiem.Ma_Vi'); // Loại bỏ Tinh_Trang nếu không có trong bảng
    },
    getListLoans(Ma_KH) {
        return db('khoan_vay')
            .join('tai_khoan', 'khoan_vay.So_Tai_Khoan', '=', 'tai_khoan.So_Tai_Khoan')
            .join('khach_hang', 'tai_khoan.Ma_KH', '=', 'khach_hang.Ma_KH')
            .where('tai_khoan.Ma_KH', Ma_KH)
            .select('khoan_vay.So_Tai_Khoan', 'khoan_vay.Khoan_Vay','khoan_vay.Ma_Vay'); // Loại bỏ Tinh_Trang nếu không có trong bảng
    }   
    
}