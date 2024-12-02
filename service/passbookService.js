export default {
    getAll() {
        return [
            { Ma_Vi: '1', Ngay_Gui: '10/10/2023', Tien_Goc: 5000000, Tien_Lai: 500000, rate: '10%' },
            { Ma_Vi: '2', Ngay_Gui: '11/11/2023', Tien_Goc: 7000000, Tien_Lai: 700000, rate: '10%' },
        ];
    },
    getById(id) {
        return { Ma_Vi: '1', Ngay_Gui: '10/10/2023', Tien_Goc: 5000000, Tien_Lai: 500000, rate: '10%' }
    }
};