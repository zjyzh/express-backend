//引入接口所需的对应模型
const { newDataSchema } = require("../model/newModel.js");
const mongoose = require('mongoose')
const axios = require('axios')
//定义接口中间件函数
/*
/接口中间件函数接收三个参数：
/req:请求参数
/res:响应参数
/next:中间件函数
*/
async function getNewData(req, res, next) {
    // Model.find({author:'dora'})
    let temp = mongoose.model('newDataSchema', newDataSchema);
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

async function getNewDataByLocation(req, res, next) {
    console.log('req, res, next: ', {location: req.query.location});
    // Model.find({author:'dora'}) location: req.query.北京location
    let temp = mongoose.model('newDataSchema', newDataSchema);
    let query = {}
    if (req.query.location) {
        query = { location: { $regex: req.query.location, $options: 'i' } }
    }
    temp.find(query, function (err, result) {
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

async function addNewData(req, res, next) {
    const readline = require('readline');
    const path = require('path');
    const fs = require('fs')
    let filepath = path.join(__dirname, "tour_english.csv")
    let temp = mongoose.model('newDataSchema', newDataSchema);
    const file_interface = readline.createInterface({
        input: fs.createReadStream(filepath)
    })
    let line_num = 1
    // 同步方式，读取每一行的内容
    for await (const input of file_interface) {
        if (line_num !== 1) {
            let datas = input.split(',')
            console.log('docs: ', line_num);
            // temp.insertMany([{
            //     area_code: datas[0],
            //     location: "",
            //     year: datas[1],
            //     DT: datas[2],
            //     DR: datas[4],
            //     GDP: datas[6],
            //     IP: datas[7],
            //     CPI: datas[9],
            //     RN: datas[12],
            //     CN: datas[13],
            //     PN: datas[14],
            //     PRN: datas[17],
            //     NRN: datas[18],
            //     PRN_NRN: parseFloat( datas[17]) - parseFloat( datas[18]),
            //     PCN: datas[19],
            //     NCN: datas[20],
            //     PCN_NCN: parseFloat( datas[19]) - parseFloat( datas[20]),
            //     PPN: datas[21],
            //     NPN: datas[22],
            //     PPN_NPN: parseFloat( datas[21]) - parseFloat( datas[22]),
            // }], function (err, docs) {
            //     console.log('docs: ', docs);
            // });
        }
        line_num++;
    }

}
async function updateNewData(req, res, next) {
    // await connection();
    const path = require('path');
    let filepath = path.join(__dirname, "tour_code.xlsx")

    // 解析得到文档中的所有 sheet
    const xlsx = require('node-xlsx');
    const sheets = xlsx.parse(filepath);
    let temp = await mongoose.model('newDataSchema', newDataSchema);
    // 遍历 sheet
    // temp.updateMany({},
    //     { '$rename': { 'year': 'date' } }, function (err, docs) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Updated Docs:", docs);
    //         }
    //     })
    sheets.forEach(function (sheet) {

        // 读取每行内容
        // for (let rowId in sheet['data']) {
        //     // 
        //     let row = sheet['data'][rowId];
        //     let buffer = []
        //     if (rowId >= 3) {
        //          console.log(row[1],row[2] );
        //         temp.updateMany({ "area_code": parseFloat(row[1]) },
        //             {  $set:{"location": row[2]}  },function (err, docs) { 
        //                 if (err){ 
        //                     console.log(err) 
        //                 } 
        //                 else{ 
        //                     console.log("Updated Docs:", docs); 
        //                 } 
        //             })
        //         // console.log('res: ', res);
        //     }

        // }
    });

}

async function deleteNewData(req, res, next) {
    let temp = mongoose.model('newDataSchema', newDataSchema);

    // temp.deleteMany({}, function (err) {
    //     res.send({
    //         status: 0,
    //         msg: "删除成功",
    //         details: err,
    //     });
    // })


}


//导出接口函数
module.exports = { getNewData, addNewData, deleteNewData, updateNewData,getNewDataByLocation };

