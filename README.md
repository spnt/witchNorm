witchNorm
====
Witch开发规范的相关说明

关于CSS和JS的源代码都在static目录下，witchNode为网站运行目录可不必查看，当然如想运行，用node运行witchNode即可


#####static目录结构



````````js

---- public //除了html页面（即模版页面）的所有静态文件目录

---------- css //样式目录<br/>

-----------js //脚本目录

-----------images //图片目录

-----------plug //前端使用的插件目录

----views //html页面（即模版页面）的所在的目录

-----------include //通用部分，如果header和footer

-----------fis-config.js //fis的配置文件

-----------fis-index.bat //启动编译的bat

``````

里面包含所有的css和js脚本源文件

网站运行时候运行的文件都被压缩过，不方便查看源代码，请在static里查看