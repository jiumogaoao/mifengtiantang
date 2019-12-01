import store from '@/store/index.js'
import config from '@/common/config.js'
export const logTag = (name,log) => {//name:自定义名,log:需要输出的信息
	if(config.platform == 3){
		store.dispatch("log/push",{
		        id:store.state.user.id,
				type:'log',
				name:name,
				main:log,
				time:new Date().getTime()
		    })
	}else{
		console.log(name,log)
	}
	
};
export const eventTag = (name,event) => {//name:自定义名,event时间名,click,scroll等等
	if(config.platform == 3){
		store.dispatch("log/push",{
	        id:store.state.user.id,
			type:'event',
			name:name,
			main:event,
			time:new Date().getTime()
	    })
	}else{
		console.log(name,event)
	}
};
export const pageTag = (pageName) => {//pageName:页面名
	if(config.platform == 3){
		store.dispatch("log/push",{
	        id:store.state.user.id,
			type:'page',
			main:pageName,
			time:new Date().getTime()
	    })
	}else{
		console.log(pageName)
	}
};
export const errorTag = (name,error) => {//name:自定义名,error:错误信息
	if(config.production){
		store.dispatch("log/push",{
	        id:store.state.user.id,
			type:'error',
			name:name,
			main:error,
			time:new Date().getTime()
	    });
	}else{
		console.log(error)
	}
};