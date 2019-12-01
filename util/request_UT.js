import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store/index.js'
import qs from 'qs'
import moment from 'moment'
import {encrypt64,encrypt} from './security_UT.js'
let config= require("@/common/config.js");
let access_expired = ""
let access_token = ""
let refresh_expired = ""
let refresh_token = ""
let getCache={}
let postCache={}
export const getFetch =  async (url,params = {},CDN,callback) => {
	var cacheKey = encrypt64(url + JSON.stringify(params))
	if(getCache[cacheKey] && ((new Date().getTime()) - getCache[cacheKey].time) < config.updateTime){
		console.log('已有缓存',cacheKey)
		callback(getCache[cacheKey].data)
		return;
	}
	let d
	// #ifdef H5
	if(config.apiMock){
		d=config.apiMockPath
	}else if(!config.production){
		d='/api/'
	}else if(CDN){
		d=config.CDN
	}else{
		d=config.API
	}
	// #endif
	// #ifndef H5
	if(config.apiMock){
		d=config.apiMockPath
	}else if(CDN){
		d=config.CDN
	}else{
		d=config.API
	}
	// #endif
	d+=config.apiPath
	
  try{
	logTag('发起请求',cacheKey)
	const res = await uni.request({
			url: d+url, //仅为示例，并非真实接口地址。
			data: params,
			header: {
				'Content-Type':'application/x-www-form-urlencoded',
				// 'frontendAppId':frontendAppId,
				// 'usertoken':accessToken
			},
			// success:callback
		});
		getCache[cacheKey]={data:res[1],time:new Date().getTime()}
		if(callback){callback(res[1])}
	// const res = await axios.get(d+url,{params});
	return res;
  }catch(e){
	  console.log(cacheKey+':请求错误',e)
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
}

export const refleshToken =  async (url,params = {},needLogon,callback)=>{
	let keyList=Object.keys(params);
	keyList.sort()
	let str = "";
	keyList.map(function(v,i){
		str+=v+"="+encodeURI(params[v])+'&'
	})
	console.log("参数排序",str)
	let ts = new Date().getTime();
	let nonce = new Date().getTime();
	str+="appkey=nuskin-h5-app-key&timestamp="+ts+"&nonce="+nonce
	// console.log("添加appkey,timestamp,nonce",str)
	str = str.toLowerCase()
	// console.log("转小写",str)
	str+='nuskin-h5-app-secret';
	// console.log("加nuskin-h5-app-secret",str)
	str = encrypt(str)
	// console.log("加SHA1",str)
	let d
	// #ifdef H5
	if(config.apiMock){
		d=config.apiMockPath
	}else if(!config.production){
		d='/api/'
	}else{
		d=config.API
	}
	// #endif
	// #ifndef 
	if(config.apiMock){
		d=config.apiMockPath
	}else{
		d=config.API
	}
	// #endif
	d+=config.apiPath
	console.log(params)
	try{
		 const res = uni.request({
		 		url: d+url, //仅为示例，并非真实接口地址。
		 		data: params,
		 			method:"POST",
		 		header: {
		 			'Content-Type':'application/x-www-form-urlencoded',
					'appkey':'nuskin-h5-app-key',
					'timestamp':ts,
					'nonce':nonce,
					'sign':str
		 			// 'accessKey':accessKey,
		 				// 'frontendAppId':frontendAppId,
		 				// 'usertoken': accessToken
		 		}
		 	});
		if(callback){callback(res[1])}
	  return res[1];
	}catch(e){
		console.log(':请求错误',e)
	  return {
	    code:-1,
	    message:e.message,
	    status:false,
	  };
	}
};

export const postFetch =  async (url,params = {},needLogon,callback) => {
	if(needLogon,access_expired && (moment(access_expired.substr(0, access_expired.length - 8),'YYYYY-MM-DD hh:mm:ss').format('x')<moment().format('x'))){
		let newToken = await refleshToken('RefreshToken',{'access_token':access_token,'refresh_token':refresh_token},null)
		store.dispatch('rootST/setToken',{
			access_expired:newToken.access_expired,
			access_token:newToken.access_token,
			refresh_expired:newToken.refresh_expired?newToken.refresh_expired:null,
			refresh_token:newToken.refresh_token?newToken.refresh_token:null
		})
		access_expired = newToken.access_expired
		access_token = newToken.access_token
		if(newToken.refresh_expired){
			refresh_expired = newToken.refresh_expired
			refresh_token = newToken.refresh_token
		}
		console.log('token更新',newToken)
	}else if(needLogon && !access_expired){
		alert('请登录')
		return;
	}
	let keyList=Object.keys(params);
	keyList.sort()
	let str = "";
	keyList.map(function(v,i){
		str+=v+"="+encodeURI(params[v])+'&'
	})
	console.log("参数排序",str)
	let ts = new Date().getTime();
	let nonce = new Date().getTime();
	str+="appkey=nuskin-h5-app-key&timestamp="+ts+"&nonce="+nonce
	// console.log("添加appkey,timestamp,nonce",str)
	str = str.toLowerCase()
	// console.log("转小写",str)
	str+='nuskin-h5-app-secret';
	// console.log("加nuskin-h5-app-secret",str)
	str = encrypt(str)
	// console.log("加SHA1",str)
	var cacheKey = encrypt64(url + JSON.stringify(params))
	if(postCache[cacheKey] && ((new Date().getTime()) - postCache[cacheKey].time) < config.updateTime){
		console.log('发起请求',cacheKey)
		callback(postCache[cacheKey].data)
		return;
	}
	let d
	// #ifdef H5
	if(config.apiMock){
		d=config.apiMockPath
	}else if(!config.production){
		d='/api/'
	}else{
		d=config.API
	}
	// #endif
	// #ifndef 
	if(config.apiMock){
		d=config.apiMockPath
	}else{
		d=config.API
	}
	// #endif
	d+=config.apiPath
	console.log(params)
  try{
	 console.log('发起请求',cacheKey)
	 const res = await uni.request({
	 		url: d+url, //仅为示例，并非真实接口地址。
	 		data: params,
	 			method:"POST",
	 		header: {
	 			'Content-Type':'application/x-www-form-urlencoded',
				'appkey':'nuskin-h5-app-key',
				'timestamp':ts,
				'nonce':nonce,
				'sign':str
	 		}
	 	});
	 postCache[cacheKey]={data:res[1],time:new Date().getTime()}
	if(callback){callback(res[1])}
    return res[1];
  }catch(e){
	console.log(cacheKey+':请求错误',e)
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
};

export const setToken=(data)=>{
	access_expired = data.access_expired
	access_token = data.access_token
	refresh_expired = data.refresh_expired
	refresh_token = data.refresh_token
}