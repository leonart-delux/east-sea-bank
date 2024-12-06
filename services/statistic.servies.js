import db from '../utils/db.js';
export default{
    async getAllAggregates() {
        // 1. Tổng tiền cho vay
        const totalLoan = await db('khoan_vay')
          .sum({ totalLoan: 'Khoan_Vay' })
          .first();
    
        // 2. Tổng tiền gửi tiết kiệm
        const totalSaving = await db('vi_tiet_kiem')
          .sum({ totalSaving: 'Tien_Goc' })
          .first();
    
        // 3. Tổng tiền lãi từ cho vay (những khoản chưa kết thúc)
        const totalLoanInterest = await db('khoan_vay')
          .whereNull('Ngay_Ket_Thuc')
          .sum({ totalLoanInterest: db.raw('Khoan_Vay * Lai_Suat/100') })
          .first();
    
        // 4. Tổng tiền 0 kỳ hạn phải trả
        const nonTermSavingInterest = await db('vi_tiet_kiem as vt')
          .join('goi_tiet_kiem as gt', 'vt.Ma_Goi_Tiet_Kiem', 'gt.Ma_Goi')
          .where('vt.Dong_So', 0)
          .andWhere('gt.Thoi_Gian_Ky_Han', 0)
          .sum({ nonTermInterest: db.raw('((vt.Tien_Goc + vt.Lai) * gt.Lai_Suat/100 )') })
          .first();
    
        // 5. Tổng tiền phải trả cho kỳ hạn 
        const totalTermPayment = await db('vi_tiet_kiem as vt')
            .join('goi_tiet_kiem as gt', 'vt.Ma_Goi_Tiet_Kiem', 'gt.Ma_Goi')
            .where('gt.Thoi_Gian_Ky_Han', '>', 0)
            .sum({ totalTermPayment: db.raw('((vt.Tien_Goc + vt.Lai) * gt.Lai_Suat/100 )') })
            .first();


        return {
          totalLoan: totalLoan?.totalLoan || 0,
          totalSaving: totalSaving?.totalSaving || 0,
          totalLoanInterest: totalLoanInterest?.totalLoanInterest || 0,
          nonTermSavingInterest: nonTermSavingInterest?.nonTermInterest || 0,
          totalTermPayment: totalTermPayment?.totalTermPayment || 0
        };
      }
}