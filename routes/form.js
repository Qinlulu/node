var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
    res.render("index",{"title":"登录"})
});
module.exports=router;