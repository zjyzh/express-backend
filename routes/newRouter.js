//引入express及router
const express = require("express")
const router = express.Router()

//引入controllers中定义的接口方法
const { getNewData, addNewData, deleteNewData,updateNewData,getNewDataByLocation } = require("../src/api/newModelApi")

//定义接口。router.请求类型(“二级路径”，接口方法名)
router.get("/getNewData", getNewData)
router.get("/addNewData", addNewData)
router.get("/deleteNew", deleteNewData)
router.get("/updateNewData", updateNewData)
router.get("/getNewDataByLocation", getNewDataByLocation)
module.exports = router; 
