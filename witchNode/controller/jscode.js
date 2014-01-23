/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-26
 * Time: 上午11:20
 * To change this template use File | Settings | File Templates.
 */
var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
    res.render('jscode',{title:'本地化存储 - '+config.webTitle});
    return;
}

home.player=function(req,res){
    res.render('player',{title:'弹窗 - '+config.webTitle});
}
home.tab=function(req,res){
    res.render('tab',{title:'TAB - '+config.webTitle});
}
home.show=function(req,res){
    res.render('show',{title:'动画 - '+config.webTitle});
}

home.validate=function(req,res){
    res.render('validate',{title:'表单验证 - '+config.webTitle});
}





module.exports = home;