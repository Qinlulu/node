var express=require("express");
var app=express();

var index=require("./form");
//var login=require("./login");
//var logins=require("./logins");

module.exports=function(app){
    app.get("/",index);
    //app.post("/login",login);
    //app.get("/logins",logins);
};