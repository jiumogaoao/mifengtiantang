var CryptoJS = require("crypto-js");
var {getCookies,setCookies} = require("./cache_UT.js");
var config = require("../common/config.js");
let token=""


export const encrypt = (data,key) => {
	data=String(data)
	var encrypted=CryptoJS.SHA1(data)
  // var keyHex = CryptoJS.enc.Utf8.parse(key);
		// 			var encrypted = CryptoJS.DES.encrypt(data, keyHex, {
		// 				mode: CryptoJS.mode.ECB,
		// 				padding: CryptoJS.pad.Pkcs7
		// 			});
					return encrypted.toString();
};
export const decrypt = (data,key) => {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
				var decrypted = CryptoJS.DES.decrypt({
					ciphertext: CryptoJS.enc.Base64.parse(data)
				}, keyHex, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				});
				return decrypted.toString(CryptoJS.enc.Utf8);
};
export const encrypt64 = (data) => {
  var str = CryptoJS.enc.Utf8.parse(data);
  var base64 = CryptoJS.enc.Base64.stringify(str);
  return base64;
};
export const decrypt64 = (data) => {
  var words = CryptoJS.enc.Base64.parse(data);
  var parseStr = words.toString(CryptoJS.enc.Utf8);
  return parseStr;
};
const setInfo = ()=>{
	if(config.token){
		token=config.token
		setCookies('temp003',config.token)
		uni.setStorageSync('temp003', config.token+"{}"+(new Date().getTime()));
	}else{
		window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3e28374aad3d1dff&redirect_uri=https://fx3t.lhs11.com/fxc/RecvOauthOnce.jsp&response_type=code&scope=snsapi_userinfo&state=1906130902047740612825&component_appid=wx53089f3e63be0da7&connect_redirect=1#wechat_redirect"
	}
}
const getNewInfo = ()=>{
	try {
	let s=getCookies("temp003")
	if(s.length){
		uni.setStorageSync('temp003', s+"{}"+(new Date().getTime()));
		token = s;
	}else{
		setInfo ()
	}
	} catch (e){
		setInfo()
	}
}
export const getInfo = () => {
	try {
	let tokenLong=uni.getStorageSync('temp003')
	let tokenShort=tokenLong.split("{}")[0]
	let tokenCreateTime=Number(tokenLong.split("{}")[1])
	if(!tokenCreateTime){
		getNewInfo();
	}else{
		let newTime = new Date().getTime();
		if(newTime - tokenCreateTime>(1000*60*60*24*3)){
			getNewInfo();
		}else{
			token = tokenShort;
			setCookies('temp003',token)
		}
	}
	} catch (e){
		getNewInfo();
	}
	//token="REV6dlBsZ3cvU3R6dytmbGtpbTN6c1h5MGNwNzczc0Q5RTk1VTBkNUdqdVd2VTIyNzBVMVZBPT0"
	let k="fbdc2bdfc1485089abbed9b0674ab076";
	let k1=k.split("").reverse().join("");
	let token64 = decrypt64(token)
	console.log(token64)
	let token2 = decrypt(token64,k1)
	console.log(k1)
	console.log(token2)
	let token1 = decrypt(token2,k)
	console.log(k)
	console.log(token1)
	return JSON.parse(token1)
}
