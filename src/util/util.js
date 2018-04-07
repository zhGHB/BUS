/**
 * Created by luojie on 2017/10/20.
 */
const util = {
	invalid:{
		mobileReg:/^1[3|4|5|7|8][0-9]\d{8}$/,  //验证手机号正则表达式
		mailReg: /^([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/,  //验证邮箱正则表达式
		numReg:/^[0-9]*$/,
		cardReg:/^[a-zA-Z0-9]+$/,
		tvReg:/^(0(?:[.](?:[1-9]\d?|0[1-9]))|[1-9]\d{0,9}(?:[.]\d{0,3}|$)|0([.]0{0,3})?)$/, //7位数字加3位小数
	}
};
export default util;