import db from "../utils/db.js";
import {formatDate} from "../utils/db.js";
export default {
    addUserInfo(entity) {

        return db('khach_hang').insert(entity);

    },
    isThisCustomerInfoExisted(cccd, phoneNumber) {
        return db('khach_hang').where('CCCD', cccd).orWhere('SDT', phoneNumber).first();
    },

}