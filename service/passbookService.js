export default {
    getAll() {
        return [
            { Ma_Vi: '1', Ngay_Gui: '10/10/2023', Tien_Goc: 5000000, Tien_Lai: 512000, Lai: 0.1 },
            { Ma_Vi: '2', Ngay_Gui: '11/11/2023', Tien_Goc: 7000000, Tien_Lai: 784000, Lai: 0.112 },
        ];
    },
    getById(id) {
        return { Ma_Vi: '1', So_Tai_Khoan: '022222002220', Ngay_Gui: '10/10/2023', Tien_Goc: 5000000, Tien_Lai: 512000, Lai: 0.1 }
    },
    getFullPassbookDetailById(id) {
        return { Ma_Vi: '1', So_Tai_Khoan: '022222002220', Ngay_Gui: '10/10/2023', Tien_Goc: 5120000, Tien_Lai: 500000, Lai: 0.1,  Lai_Suat: 0.1, thoi_gian_ky_han: 12, ten_loai_hinh_tiet_kiem: 'Có kỳ hạn', Ten_Tuy_Chon: 'Tự động đáo hạn', Dong_So: false}

        // return db('vi_tiet_kiem as vt')
        //         .select(
        //             'vt.Ma_Vi',
        //             'vt.So_Tai_Khoan',
        //             'vt.Tien_Goc',
        //             'vt.Tien_Lai',
        //             'vt.Ngay_Gui',
        //             'vt.Lai',
        //             'gt.Lai_Suat',
        //             'gt.thoi_gian_ky_han',
        //             'gt.ten_loai_hinh_tiet_kiem',
        //             'tc.Ten_Tuy_Chon'
        //         )
        //         .leftJoin('goi_tiet_kiem as gt', 'vt.Ma_Goi_Tiet_Kiem', 'gt.ma_goi') 
        //         .leftJoin('tuy_chon_sau_khi_het_han as tc', 'vt.Ma_Tuy_Chon', 'tc.Ma_Tuy_Chon')
        //         .where('vt.Ma_Vi', id) 
        //         .first();
    }
};