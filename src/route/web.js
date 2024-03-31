const express = require("express");
const { homeController } = require("../controller/homeController");
const router = express.Router();
router.get('/',homeController)

router.get('/a',(req,res)=>{
    res.send('aa')
})

module.exports = router;