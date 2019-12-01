import {
	getFetch,
	postFetch
} from '@/util/request_UT.js'
import store from '../store/index.js'
// let jweixin = require('jweixin-module')
export const SDKInit = function(callback){
	let jweixin = new require('jweixin-module')
	getFetch('wechat/helper/getJsSign', {}, null, function(data3) {
		let apiList = [ // 可能需要用到的能力
			'getLocation',
			'openLocation',
			'onMenuShareTimeline',
			'onMenuShareAppMessage'
		];
		let info = {
			// debug: true, // 调试，发布的时候改为false
			appId: data3.data.result.appId,
			nonceStr: data3.data.result.nonceStr,
			timestamp: data3.data.result.timestamp,
			signature: data3.data.result.signature,
			jsApiList: apiList
		};
		store.dispatch('userST/setWxInfo',info)
		jweixin.config(info);
	})
	jweixin.error(err => {
		console.log('JSSDK error:'+JSON.stringify(err))
		// uni.showToast({
		// 	title: 'JSSDK error:'+JSON.stringify(err),
		// 	duration: 2000
		// });
	});
	jweixin.ready(res => {
		console.log('JSSDKReady',res)
		callback(jweixin)
	})
}
// export const SDK = jweixin