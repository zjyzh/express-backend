//引入接口所需的对应模型
const { yearMapSchema } = require("../model/mapModel.js");
const mongoose = require('mongoose')
const axios = require('axios')
//定义接口中间件函数
/*
/接口中间件函数接收三个参数：
/req:请求参数
/res:响应参数
/next:中间件函数
*/
async function getYearData(req, res, next) {
    // Model.find({author:'dora'})
    let temp = mongoose.model('yearMapData', yearMapSchema);
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

async function addYearData(req, res, next) {
    const readline = require('readline');
    const path = require('path');
    const fs = require('fs')
    let filepath = path.join(__dirname, "Year_count1.txt")
    let temp = mongoose.model('yearMapData', yearMapSchema);
    const file_interface = readline.createInterface({
        input: fs.createReadStream(filepath)
    })
    let line_num = 1
    // 同步方式，读取每一行的内容
    for await (const input of file_interface) {
        if (line_num !== 1) {
            let datas = input.split('\t')
            // console.log('docs: ', datas);
            // temp.insertMany([{
            //     location: datas[0],
            //     date: datas[2],
            //     num: datas[datas.length - 1],
            // }], function (err, docs) {
            //     console.log('docs: ', docs);
            // });
        }
        line_num++;
    }

}


async function deleteYearData(req, res, next) {
    let temp = mongoose.model('yearMapData', yearMapSchema);

    // temp.deleteMany({}, function (err) {
    //     res.send({
    //         status: 0,
    //         msg: "删除成功",
    //         details: err,
    //     });
    // })


}


//导出接口函数
module.exports = { getYearData, addYearData, deleteYearData };

