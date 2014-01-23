
var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
   res.render('index',{title:config.webTitle});
    return;
}

module.exports = home; 