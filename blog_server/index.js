const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');

//api
const api_user = require('./api/user.js')

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({extended: false})
const PATH = __dirname + '/';


/**
 * 跨域
 * jtchen 2018/3/26
 */
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


/**
 * 用户功能
 * jtchen 2018/3/27
 */
app.post('/login', urlencodedParser, api_user.login)
app.post('/register', urlencodedParser, api_user.register)



/**
 * 启动server服务器
 * jtchen 2018/3/26
 */
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
