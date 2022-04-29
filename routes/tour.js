//引入express及router
const express = require("express")
const router = express.Router()

//引入controllers中定义的接口方法
const { getDataByLocation,addData,deleteALLData } = require("../src/api/tourApi")

//定义接口。router.请求类型(“二级路径”，接口方法名)
router.get("/getData", getDataByLocation)
router.get("/addData", addData)
router.get("/delete", deleteALLData)
module.exports = router; 
