const { mongoose } = require("../db/mongo.js");
//创建Schema实例对象，参数为字段名：字段值类型组成的对象


let newDataSchema = new mongoose.Schema({
    area_code: Number,
    location: String,
    year: Number,
    GDP: Number,
    DT: Number,
    DR: Number,
    IP: Number,
    CPI: Number,
    RN: Number,
    CN: Number,
    PN: Number,
    PRN: Number,
    NRN: Number,
    PRN_NRN: Number,
    PCN: Number,
    NCN: Number,
    PCN_NCN: Number,
    PPN: Number,
    NPN: Number,
    PPN_NPN: Number,
});



//导出模型
module.exports.newDataSchema = newDataSchema;
