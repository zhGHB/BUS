/**
 * Created by luojie on 2017/10/17.
 */
window.domain = "http://47.104.3.225:82";
// window.domain = "http://test.jztztv.cn";

import Pubsub from "../util/pubsub";
window.deepCopy = (obj)=>{
	let str = JSON.stringify(obj);
	return JSON.parse(str);
};
window.setCookie = (key, value, day)=>{
	let exp = new Date();
	exp.setTime(exp.getTime() + day*24*60*60*1000);
	document.cookie = key + "="+ encodeURIComponent (value) + ";expires=" + exp.toGMTString();
};

window.removeCookie = (key)=>{
	setCookie(key, '', -1);//这里只需要把Cookie保质期退回一天便可以删除
};
window.getCookie = (key)=>{
	let cookieArr = document.cookie.split('; ');
	for(let i = 0; i < cookieArr.length; i++) {
		let arr = cookieArr[i].split('=');
		if(arr[0] === key) {
			return decodeURIComponent(arr[1]);
		}
	}
	return "";
};
window.formatArr = (arr,n)=>{   //格式化数组，每多少个放一组
	let result = [];
	for(let i=0,len=arr.length;i<len;i+=n){
		result.push(arr.slice(i,i+n));
	}
	return result;
};
window.ajax = (url,param = {},type)=>{
	let tokenType = getCookie("tokenType");
	let accessToken = getCookie("accessToken");
	let lan = localStorage.lan;
	let Language = "English";
	if(lan === "zh"){
		Language = "Chinese";
	}else if(lan === "th"){
		Language = "Thai";
	}
	return $.ajax({
		url:domain+url,
		type:type || "get",
		dataType:"json",
		contentType:"application/json;charset=utf-8",
		Accept: "application/json",
		beforeSend(){
			// i = layer.load(2);
		},
		headers: {
			Authorization: tokenType + " " + accessToken,
			Language:Language
		},
		data:type=="post"?JSON.stringify(param):param,

	}).then((data)=>{
		// layer.close(i);
		return data;
	})
}
Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
window.getTimeStr = (timeTamp,fmt)=>{
	return new Date(timeTamp).Format(fmt || "yyyy-MM-dd hh:mm:ss")
}
window.number_format = function(number, decimals, dec_point,roundtag) {
	/*
	 * 参数说明：
	 * number：要格式化的数字
	 * decimals：保留几位小数
	 * dec_point：小数点符号
	 * thousands_sep：千分位符号
	 * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
	 * 处理浮点数问题
	 * */
	number = (number + '').replace(/[^0-9+-Ee.]/g, '');
	roundtag = roundtag || "ceil"; //"ceil","floor","round"
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {

			var k = Math.pow(10, prec);

			return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec*2))).toFixed(prec*2)) / k;
		};
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}
window.arrange = function(arr,num){  //数组排列组合
	var r=[];
	(function f(t,a,n)
	{
		if (n==0)
		{
			return r.push(t);
		}
		for (var i=0,l=a.length; i<=l-n; i++)
		{
			f(t.concat(a[i]), a.slice(i+1), n-1);
		}
	})([],arr,num);
	return r;
}