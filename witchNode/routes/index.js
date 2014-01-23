
/*
 * 整站路由
 * 此方法接管所有非静态请求
 */

var config=require('../config/config.js'),
    tools=require('../lib/tools.js');

module.exports=function(app){
    app.all('*',function(req,res){
      try{
          //console.log(req.headers.referer+"]")
           var upath=req.path,
               urlpath=upath.split('/'),
               len=0;

          if(upath.indexOf('.')>-1||urlpath.length>5){
              res.send('这是一个错误地址');
              return;
          }
           urlpath.shift();
          len=urlpath.length;
           if(urlpath[len-1]===''){urlpath.pop();}
           if(upath==='/'){urlpath=new Array('index','index');}
           if(urlpath.length===1){ urlpath.push('index');}

          //console.log(urlpath.join('/'));
          require('../controller/'+urlpath[0])[urlpath[1]](req, res);
        }
        catch(err){
            res.send(err.toString());
        }
    });
}