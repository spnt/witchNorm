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
    res.render('jsgf',{title:'JS规范 - '+config.webTitle});
    return;
}

home.js=function(req,res){
    res.render('jsjs',{title:'JS前端规范 - '+config.webTitle});
}
home.node=function(req,res){
    res.render('jsnode',{title:'Node规范 - '+config.webTitle});
}





module.exports = home;