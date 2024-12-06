import db from '../utils/db.js';
export default{
    // Không kỳ hạn
    async getNonTermInterest() {
        return await db('goi_tiet_kiem')
            .where('Ma_Goi', 1)
            .select('Lai_Suat')
            .first();
    },

    // Có kỳ hạn
    async getTermInterest() {
        return await db('goi_tiet_kiem')
            .whereNot('Ma_Goi', 1)
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
    },

    // Cập nhật lãi suất không kỳ hạn
    async updateNonTermInterest(interestRate) {
        if (!interestRate || typeof interestRate !== 'number') {
            throw new Error('Lãi suất không hợp lệ');
        }
        try {
            const result = await db('goi_tiet_kiem')
                .where('Ma_Goi', 1)
                .update({ Lai_Suat: interestRate });
            if (result === 0) {
                throw new Error('Không tìm thấy bản ghi để cập nhật');
            }
            console.log('Cập nhật lãi suất không kỳ hạn thành công');
        } catch (error) {
            console.error('Lỗi khi cập nhật lãi suất không kỳ hạn:', error);
            throw error;
        }
    },

    // Cập nhật lãi suất có kỳ hạn
    async updateTermInterest(term, interestRate) {
        if (!term || typeof term !== 'number' || !interestRate || typeof interestRate !== 'number') {
            throw new Error('Dữ liệu đầu vào không hợp lệ');
        }
        try {
            const result = await db('goi_tiet_kiem')
                .where('Thoi_Gian_Ky_Han', term)
                .update({ Lai_Suat: interestRate });
            if (result === 0) {
                throw new Error('Không tìm thấy bản ghi với kỳ hạn này để cập nhật');
            }
            console.log('Cập nhật lãi suất có kỳ hạn thành công');
        } catch (error) {
            console.error('Lỗi khi cập nhật lãi suất có kỳ hạn:', error);
            throw error;
        }
    },

    // Cập nhật lãi suất tín dụng
    async updateCreditLoanInterest(interestRate) {
        if (!interestRate || typeof interestRate !== 'number') {
            throw new Error('Lãi suất tín dụng không hợp lệ');
        }
        try {
            const result = await db('goi_vay')
                .where('Ma_Goi_Vay', 1)
                .update({ Lai_Suat_Vay: interestRate });
            if (result === 0) {
                throw new Error('Không tìm thấy bản ghi lãi suất tín dụng để cập nhật');
            }
            console.log('Cập nhật lãi suất tín dụng thành công');
        } catch (error) {
            console.error('Lỗi khi cập nhật lãi suất tín dụng:', error);
            throw error;
        }
    },

    // Cập nhật lãi suất thế chấp
    async updateMortgageInterest(interestRate) {
        if (!interestRate || typeof interestRate !== 'number') {
            throw new Error('Lãi suất thế chấp không hợp lệ');
        }
        try {
            const result = await db('goi_vay')
                .where('Ma_Goi_Vay', 2)
                .update({ Lai_Suat_Vay: interestRate });
            if (result === 0) {
                throw new Error('Không tìm thấy bản ghi lãi suất thế chấp để cập nhật');
            }
            console.log('Cập nhật lãi suất thế chấp thành công');
        } catch (error) {
            console.error('Lỗi khi cập nhật lãi suất thế chấp:', error);
            throw error;
        }
    }

}