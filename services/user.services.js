import db from '../utils/db.js';
export default{
    GetAllCustomer(){
        const result = db('khach_hang')
        .join('tai_khoan', 'khach_hang.Ma_KH', '=', 'tai_khoan.Ma_KH') // JOIN hai bảng
        return result;
    },
    findByText(searchText) {
        const result = db('khach_hang')
            .join('tai_khoan', 'khach_hang.Ma_KH', '=', 'tai_khoan.Ma_KH') // JOIN hai bảng
            .where(function () {
                this.where('khach_hang.Ho_Ten', 'like', `%${searchText}%`) // Tìm theo Họ Tên
                    .orWhere('khach_hang.SDT', 'like', `%${searchText}%`) // Tìm theo Số điện thoại
                    .orWhere('khach_hang.Email', 'like', `%${searchText}%`); // Tìm theo Email
            });
        return result;
    },
    findByMa_KH(Ma_KH){
        return db('khach_hang').where('Ma_KH', Ma_KH).first()
    }
}