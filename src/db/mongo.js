// 引入 mongoose 
const mongoose = require('mongoose')

mongoose.set('bufferCommands', false)  /* B */

// 连接数据库，自动新建 ExpressApi 库
mongoose.connect('mongodb://localhost:27017/ExpressApi', {
  useNewUrlParser: true, // 避免“不建议使用当前URL字符串解析器” // 解决MongoDB弃用警告
})

module.exports = mongoose
