/**
 * --------------------------------------------------------
 * witch js 工具类，包含前台字符串、cookie、图片缩放，特殊字符过滤等操作
 * @Version 0.5
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-12 下午3:16
 * --------------------------------------------------------
 */
var tools = new function () {
	_self = this;
	_self.randomChar = function (l) {//获取l位随机数
		var x = "0123456789qwertyioplkjhgfsazxcvbnm";
		var tmp = "";
		for (var i = 0; i < l; i++) {
			tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
		}
		return tmp;
	}

	_self.getCharLen = function (str) {//获取字符串长度，区分中英文
		return str.replace(/[^\x00-\xff]/g, "rr").length;
	}

	_self.imgCenter = function (I, l) {//图片上下居中，I：img对象，l相框高度
		var i = new Image();
		i.src = I.src;
		var h = i.height;
		if (h > 0) {
			var mt = (l - h) / 2;
			$(I).css("margin-top", mt);
		}
	}

	_self.subStr = function (s, l, st) {//截取字符串，区分中英文
		var T = false;
		if (_self.getCharLen(s) > l) {
			st = st ? st : '';
			l -= _self.getCharLen(st);
			var S = escape(s);
			var M = S.length;
			var r = '';
			var C = 0;
			for (var i = 0; i < M; i++) {
				if (C < l) {
					var t = S.charAt(i);
					if (t == '%') {
						t = S.charAt(i + 1);
						if (t == 'u') {
							r += S.substring(i, i + 6);
							C += 2;
							i += 5;
						}
						else {
							r += S.substring(i, i + 3);
							C++;
							i += 2;
						}
					}
					else {
						r += t;
						C++;
					}
				}
				else {
					T = true;
					break;
				}
			}
		}
		return T ? unescape(r) + st : s;
	}

	_self.xss = function (siteurl, ishtml) {//前端过滤
		siteurl = siteurl.replace(/<(script|link|style|iframe)(.|\n)*\/\1>\s*/ig, "");//过滤危险标签
		if (ishtml == true) {
			siteurl = siteurl.replace(/<\/?(?!br|\/)[^>]*>/g, ''); //去除HTML tag//(/<\/?(?!br|/?p|img)[^>]*>/g,'');
		}
		siteurl = siteurl.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
		return siteurl;
	}

	_self.getPara = function (name) {//获取url的参数
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return '';
	}

	_self.subTime = function (time1, time2) {//计算时间差time2-time1，返回时间差的毫秒数
		var t1 = new Date(time1), t2;
		if (time2 == undefined) {
			t2 = new Date();//当前时间
		}
		else {
			t2 = new Date(time2);
		}
		return (t2.getTime() - t1.getTime()) / 1000;//时间差的秒数
	}

	//时间格式化
	_self.formatTime = function (fmt) {// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
		var t = new Date();
		var o = {
			"M+": t.getMonth() + 1, //月份
			"d+": t.getDate(), //日
			"h+": t.getHours(), //小时
			"m+": t.getMinutes(), //分
			"s+": t.getSeconds(), //秒
			"q+": Math.floor((t.getMonth() + 3) / 3), //季度
			"S": t.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
}


/*页面cookie操作*/
var pageCookie = new function () {
	var ckie = this;
	ckie.getCookie = function (c, name) {//获取cookie,c:cookie总名称,name:cookie名称//PearForumUser=User=admin&Pass=B49E1F42A57A05E216366FA122C6E8C9B1E3BF42
		var v = "0";
		var t = document.cookie;
		var us = t.split(';');
		for (var i = 0; i < us.length; i++) {
			if ($.trim(us[i].split('=')[0]) == c) {
				var ut = us[i].replace(c + "=", "").split('&');
				for (var j = 0; j < ut.length; j++) {
					if ($.trim(ut[j].split('=')[0]) == name) {
						v = decodeURI(ut[j].split('=')[1]);
						break;
					}
				}
			}
		}
		return v;
	}
	ckie.setCookie = function (c, s, vs, d, p) {
		var v = c + '=' + s + '=' + vs;
		v += d ? '; max-age=' + (d * 24 * 60 * 60) : '';
		v += p ? '; path=' + p : '; path=/';
		document.cookie = v;
	}
}