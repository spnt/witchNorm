/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-25
 * Time: 下午6:49
 * To change this template use File | Settings | File Templates.
 */
var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
    res.render('css',{title:'CSS规范 - '+config.webTitle});
    return;
}

home.sort=function(req,res){
    res.render('csssort',{title:'CSS分类方法 - '+config.webTitle});
}
home.nameorder=function(req,res){
    res.render('cssname',{title:'CSS命名规则 - '+config.webTitle});
}

home.format=function(req,res){
    res.render('cssformat',{title:'CSS代码格式 - '+config.webTitle});
}
home.optimize=function(req,res){
    res.render('cssoptimize',{title:'CSS优化方案 - '+config.webTitle});
}
home.practice=function(req,res){
    res.render('csspractice',{title:'CSS最佳实践 - '+config.webTitle});
}
home.err=function(req,res){
    res.render('csserror',{title:'CSS典型错误 - '+config.webTitle});
}

home.html=function(req,res){
    res.render('htmlstructure',{title:'HTML整体结构 - '+config.webTitle});
}

home.htmlformat=function(req,res){
    res.render('htmlformat',{title:'HTML代码格式 - '+config.webTitle});
}

home.layout=function(req,res){
    res.render('layout',{title:'布局 - '+config.webTitle});
}

home.layout1=function(req,res){
    res.render('layout1',{title:'两列右侧自适应布局 - '+config.webTitle});
}

home.layout2=function(req,res){
    res.render('layout2',{title:'两列左侧自适应布局 - '+config.webTitle});
}

home.layout3=function(req,res){
    res.render('layout3',{title:'三列中间自适应布局 - '+config.webTitle});
}

home.layout4=function(req,res){
    res.render('layout4',{title:'三列左侧自适应布局 - '+config.webTitle});
}

home.layout5=function(req,res){
    res.render('layout5',{title:'三列右侧自适应布局 - '+config.webTitle});
}

home.skill=function(req,res){
    res.render('skill',{title:'css技巧 - '+config.webTitle});
}
home.bug=function(req,res){
    res.render('bug',{title:'css bug - '+config.webTitle});
}

home.layout7=function(req,res){
    res.render('layout7',{title:'图片居中溢出隐藏 - '+config.webTitle});
}

home.layout8=function(req,res){
    res.render('layout8',{title:'底部对齐列表 - '+config.webTitle});
}

home.layout10=function(req,res){
    res.render('layout10',{title:'选框与文本对齐 - '+config.webTitle});
}

home.layout11=function(req,res){
    res.render('layout11',{title:'IE7图片连接无效 - '+config.webTitle});
}

home.layout12=function(req,res){
    res.render('layout12',{title:'IE7 inline-block失效 - '+config.webTitle});
}

module.exports = home;