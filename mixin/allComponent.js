import config from '@/common/config'
module.exports = {
	methods: {
		go(url){
			uni.navigateTo({
			    url: url
			});
		}
	},
	computed:{
		destop(){
			return config.destop
		}
	}
}