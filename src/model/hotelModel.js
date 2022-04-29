const { mongoose } = require("../db/mongo.js");
//创建Schema实例对象，参数为字段名：字段值类型组成的对象


let hotelScheme = new mongoose.Schema({
    location: String,
    income: Number,
    date: String,
});


//生成名为Orders的mode
/*
/model接收两个参数：
/第一个参数为对应集合名称的单数形式（mongoose会自动将其变为复数并匹配）
/第二个参数为Schema的名称
*/
module.exports.hotelScheme = hotelScheme;