/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-30
 * Time: 上午10:24
 * To change this template use File | Settings | File Templates.
 */


var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
    res.render('tool',{title:config.webTitle});
    return;
}

module.exports = home;