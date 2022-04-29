//引入express及router
const express = require("express")
const router = express.Router()

//引入controllers中定义的接口方法
const { getDataByLocation, addData, deleteALLData } = require("../src/api/api")
const { getYearData, addYearData, deleteYearData } = require("../src/api/yearMapApi")

//定义接口。router.请求类型(“二级路径”，接口方法名)
router.get("/getData", getDataByLocation)
router.get("/addData", addData)
router.get("/delete", deleteALLData)
router.get("/getYearData", getYearData)
router.get("/addYearData", addYearData)
router.get("/deleteYear", deleteYearData)
module.exports = router; 
