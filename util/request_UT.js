import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import {encrypt64,MD5} from './security_UT.js'
import {logTag,errorTag} from '@/util/log_UT.js'
let config= require("@/common/config.js");
let accessKey= "";
let accessToken = "";
let frontendAppId= "";
let getCache = {}
let postCache = {}

export const getFetch =  async (url,params = {},CDN,callback) => {
	var cacheKey = encrypt64(url + JSON.stringify(params))
	// if(getCache[cacheKey] && ((new Date().getTime()) - getCache[cacheKey].time) < config.updateTime){
	// 	logTag('已有缓存',cacheKey)
	// 	callback(getCache[cacheKey].data)
	// 	return;
	// }
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
	  errorTag(cacheKey+':请求错误',e)
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
};

export const postFetch =  async (url,params = {},CDN,callback) => {
	var cacheKey = encrypt64(url + JSON.stringify(params))
	var time = new Date().getTime()
	var token = MD5('controller'+time)
	// if(postCache[cacheKey] && ((new Date().getTime()) - postCache[cacheKey].time) < config.updateTime){
	// 	logTag('发起请求',cacheKey)
	// 	callback(postCache[cacheKey].data)
	// 	return;
	// }
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
	// #ifndef 
	if(config.apiMock){
		d=config.apiMockPath
	}else if(CDN){
		d=config.CDN
	}else{
		d=config.API
	}
	// #endif
	d+=config.apiPath
	console.log(params)
  try{
	 logTag('发起请求',cacheKey)
	 params.time = time;
	 params.tooken = token;
	 const res = await uni.request({
	 		url: d+url, //仅为示例，并非真实接口地址。
	 		data: params,
	 			method:"POST",
	 		header: {
	 			'Content-Type':'application/x-www-form-urlencoded',
	 			// 'accessKey':accessKey,
	 				// 'frontendAppId':frontendAppId,
	 				// 'usertoken': accessToken
	 		},
	 			// success:callback
	 	});
	 postCache[cacheKey]={data:res[1],time:new Date().getTime()}
	if(callback){callback(res[1])}
    return res;
  }catch(e){
	console.log(cacheKey+':请求错误',e)
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
};
export const setAccessKey=(data)=>{
	accessKey=data;
}
export const setAppId=(data)=>{
	frontendAppId=data;
}
export const setAccessToken=(data)=>{
	if(data == '')accessToken=''
	else accessToken= 'Bearer '+data;
}