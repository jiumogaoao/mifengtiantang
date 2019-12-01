import config from '@/common/config'
var browser = {
            versions: function() {
                var u = navigator.userAgent, app = navigator.appVersion;
                return {     //移动终端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                };
            } (),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }

module.exports = {
	components:{},
	data() {
				return {
					ww:0,
					wh:0,
					showSide:false
				}
				},
	mounted(){
		// #ifdef H5
		if (!browser.versions.mobile){
			this.$store.dispatch('rootST/destop')
		}
		// #endif
		let that = this;
		uni.getSystemInfo({
		    success: function (res) {
				that.ww = res.windowWidth
				that.wh = res.windowHeight
		    }
		});
		uni.onWindowResize((res)=>{
			that.ww = res.size.windowWidth
			that.wh = res.size.windowHeight
		})
	},
	methods: {
		back(){
			uni.navigateBack();
		},
		go(url){
			uni.navigateTo({
			    url: url
			});
		},
		sideShow(){
			this.showSide = !this.showSide
		},
	},
	computed:{
		destop(){
			return config.destop
		},
		w(){
			if(this.ww > 1100){
				return this.ww;
			}else{
				return 1100;
			}
		},
		s(){
			if(this.ww > 1100){
				return 1;
			}else{
				return this.ww/1100
			}
		},
		h(){
			console.log()
			return this.wh/this.s;
		}
	}
}