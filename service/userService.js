import db from "../utils/db.js";
import {formatDate} from "../utils/db.js";
export default {
    addUserInfo(reqBody) {
        const user = {
            ho_ten: reqBody.fullName,
            sdt: reqBody.phoneNumber,
            email: reqBody.email,
            cccd: reqBody.cccd,
            ngay_mo_tai_khoan: formatDate(Date.now()),
            ngay_sinh: reqBody.dob,
            diem_tin_dung: 50,
            ngay_cap_cccd: reqBody.issuedDate,
            noi_cap_cccd: reqBody.issuedAddress,
            gioi_tinh: reqBody.sex,
            quoc_tich: reqBody.nationality,
            que_quan: reqBody.homeTown,
            dia_chi_thuong_tru: reqBody.contemptAddress,
            dia_chi_lien_he: reqBody.contactAddress,
            trang_thai: "Pending"
        }
        db('khach_hang').insert(user)
            .then((result) => {
                console.log('Insert thành công:', result);
                // Bạn có thể xử lý logic thêm nếu cần, ví dụ như gửi phản hồi về client
            })
            .catch((error) => {
                console.error('Lỗi khi insert:', error); // Xử lý lỗi, ví dụ như gửi phản hồi lỗi về client });
            });
    }
}