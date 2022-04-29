//引入接口所需的对应模型
const { tourSchema } = require("../model/tourModel");
const xlsx = require('node-xlsx');
const mongoose = require('mongoose')
const axios = require('axios')
//定义接口中间件函数
/*
/接口中间件函数接收三个参数：
/req:请求参数
/res:响应参数
/next:中间件函数
*/
async function getDataByLocation(req, res, next) {
    // Model.find({author:'dora'})
    let temp = mongoose.model('tourModel', tourSchema);
    temp.find({}, function (err, result) {
        if (err) return handleError(err);
        // Prints "Space Ghost is a talk show host".
        let t = []
        for (let i of result) {
            
            t.push(i.toObject())
        }
        res.send({
            status: 1,
            msg: t
        });
    });
}

async function addData(req, res, next) {
    const path = require('path');
    let filepath = path.join(__dirname, "TOUR_SCENICSPOT.xlsx")

    // 解析得到文档中的所有 sheet
    const sheets = xlsx.parse(filepath);
    let temp = mongoose.model('tourModel', tourSchema);
    // 遍历 sheet
    sheets.forEach(function (sheet) {
        
        // 读取每行内容
        for (let rowId in sheet['data']) {
            
            let row = sheet['data'][rowId];
            // 
            // temp.insertMany([{
            //     location: row[2],
            //     date: row[0],
            //     income: row[5]
            // }], function (err, docs) {
            //     
            // });
        }
    });

}


async function deleteALLData(req, res, next) {
    let temp = mongoose.model('mapData', mapSchema);

    temp.deleteMany({}, function (err) {
        res.send({
            status: 0,
            msg: "删除成功",
            details: err,
        });
    })


}


//导出接口函数
module.exports = { getDataByLocation, addData, deleteALLData };

