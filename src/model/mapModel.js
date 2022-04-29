const { mongoose } = require("../db/mongo.js");
//创建Schema实例对象，参数为字段名：字段值类型组成的对象


let mapSchema = new mongoose.Schema({
    location: String,
    num: Number,
    date: String,
    lng: Number,
    lat: Number
});

let yearMapSchema = new mongoose.Schema({
    location: String,
    num: Number,
    date: String,
});


//导出模型
module.exports.mapSchema = mapSchema;
module.exports.yearMapSchema = yearMapSchema;
