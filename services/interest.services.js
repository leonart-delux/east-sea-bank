import db from '../utils/db.js';
export default{
    // Không kỳ hạn
    async getNonTermInterest() {
        return await db('goi_tiet_kiem')
            .where('Ma_Goi', 3)
            .select('Lai_Suat')
            .first();
    },

    // Có kỳ hạn
    async getTermInterest() {
        return await db('goi_tiet_kiem')
            .whereNot('Ma_Goi', 3) //Ma_Goi = 3
            .orderBy('Thoi_Gian_Ky_Han', 'asc')
            .select('*');
    },

    // Tín dụng
    async getCreditLoanInterest() {
        return await db('goi_vay')
            .where('Ma_Goi_Vay', 1)
            .select('Lai_Suat_Vay')
            .first();
    },

    // Thế chấp
    async getMortgageInterest() {
        return await db('goi_vay')
            .where('Ma_Goi_Vay', 2)
            .select('Lai_Suat_Vay')
            .first();
    }
}