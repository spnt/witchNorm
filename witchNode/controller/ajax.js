/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-3 下午12:11
 * --------------------------------------------------------
 */
var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
    var i=req.body.tab;
    res.send('这是TAB4-'+i+"的内容");
    return;
}

//验证用户名
home.checkuser=function(req,res) {
    res.send('{"state":"true"}');
}

///ajax接收参数并返回
home.chform=function(req,res) {
    res.send('{"state":"true"}');
}

module.exports = home;