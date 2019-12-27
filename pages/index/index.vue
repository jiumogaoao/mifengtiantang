<template>
	<view :class="phone?'phone':'destop'">
		<view style="position: fixed;top:0;left:0;right:0;bottom:0;background-color: #fff;z-index:999999;" v-if="isWX">暂不支持微信访问，请点击右上角按钮，从外部浏览器打开</view>
		<block  v-if="!phone">
		<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<view class="head">
				<view class="headFrame">
					<image src="/static/logo@2x.png"></image>
					<view class="navFrame">
						<view :class="{nav:1,hl:scrollTopNow>=0 && scrollTopNow<806}" @click="scrollTo(0)">首页<view class="line" v-if="scrollTopNow>=0 && scrollTopNow<806"></view></view>
						<view :class="{nav:1,hl:scrollTopNow>=806 && scrollTopNow<1245}" @click="scrollTo(806)">关于蜜蜂天堂<view class="line" v-if="scrollTopNow>=806 && scrollTopNow<1245"></view></view>
						<view :class="{nav:1,hl:scrollTopNow>=1245 && scrollTopNow<1872}" @click="scrollTo(1245)">注册<view class="line" v-if="scrollTopNow>=1245 && scrollTopNow<1872"></view></view>
						<view :class="{nav:1,hl:scrollTopNow>=1872 && scrollTopNow<2527}" @click="scrollTo(1872)">功能<view class="line" v-if="scrollTopNow>=1872 && scrollTopNow<2527"></view></view>
						<view :class="{nav:1,hl:scrollTopNow>=2527 && scrollTopNow<3168}" @click="scrollTo(2527)">蜜糖<view class="line" v-if="scrollTopNow>=2527 && scrollTopNow<3168"></view></view>
						<view :class="{nav:1,hl:scrollTopNow>=3168 && scrollTopNow<3808}" @click="scrollTo(3168)">赚钱<view class="line" v-if="scrollTopNow>=3168 && scrollTopNow<3808"></view></view>
						<view :class="{nav:1,hl:scrollTopNow>=3808}" @click="scrollTo(3808)">联系我们<view class="line" v-if="scrollTopNow>=3808"></view></view>
					</view>
				</view>
			</view>
			<div class="body" scroll-y="true" :scroll-top="scrollTop" id="scroll1">
					<view :class="{frameL:1,frame1:1,canShow:indexShow}">
										<view class="frameS">
											<view class="left">
												<view class="titleL">蜜蜂天堂</view>
												<view class="titleL">自用省钱，分享赚钱</view>
												<view class="titleL">0成本，轻创业，无负担</view>
												<view class="qrFrame">
													<view class="qrPoint">
														<view class="qrTitle">安卓版</view>
														<image src="/static/AOSQRcode.png"></image>
													</view>
													<view class="qrPoint">
														<view class="qrTitle">苹果版</view>
														<image src="/static/IOSQRcode.png"></image>
													</view>
												</view>
												<view class="titleL">快效激活你的粉丝经济</view>
												<view class="titleL">一个能帮消费者省钱赚钱的APP</view>
												<!-- <view class="titleL">邀请码：224422</view>
												<view class="text">感受极致的购物体验,注册下载后记得加</view> -->
												<view class="buttonFrame">
													<view class="button" style="background-color: #EC5298;" @click="scrollTo(3266)">高速通道下载</view>
													<view class="button" style="background-color: #FBB03B;" @click="scrollTo(3266)">下载APP</view>
												</view>
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame2:1,canShow:canShow(100+800+100)}">
										<view class="frameM frameM1">
											<image class="picS" src="/static/huojianICON@2x.png"></image>
											<view class="titleM">帮省加油费</view>
											<view class="text">点击寻找距离最近、最省钱的加油站！</view>
										</view>
										<view class="frameM frameM2">
											<image class="picS" src="/static/huiyuanICON@2x.png"></image>
											<view class="titleM">帮赚奶粉钱</view>
											<view class="text">分享APP给身边亲友，获得蜜糖奖励！</view>
										</view>
										<view class="frameM frameM3">
											<image class="picS" src="/static/jifengICON@2x.png"></image>
											<view class="titleM">帮淘优惠券</view>
											<view class="text">海量淘宝平台隐藏优惠券，同样是花钱，这里更享经济实惠！</view>
										</view>
									</view>
									<view :class="{frameL:1,frame3:1,canShow:canShow(100+800+440+100)} ">
										<view class="frameS">
											<view class="left">
												<view class="titleL">蜜蜂天堂注册流程</view>
												<view class="text">扫描二维码注册，下载！</view>
												<view class="qrFrame">
													<view class="qrPoint">
														<view class="qrTitle">安卓版</view>
														<image src="/static/AOSQRcode.png"></image>
													</view>
													<view class="qrPoint">
														<view class="qrTitle">苹果版</view>
														<image src="/static/IOSQRcode.png"></image>
													</view>
												</view>
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame4:1,canShow:canShow(100+800+440+640+100)}">
										<view class="frameS">
											<image class="picL" src="/static/home@2x.png"></image>
											<view class="left">
												<view class="titleL">蜜蜂天堂APP功能概述</view>
												<view class="text">据淘宝数据统计，平均每人淘宝购物一年消费3万左右，通过蜜蜂天堂领取优惠省钱，每年一个家庭网购支出将节省40%至61%。</view>
												<view class="text">蜜蜂天堂，能帮粉丝、用户、消费者省钱的APP！</view>
												<view class="text">这里筛选了海量电商平台让利超狠的商品，惊爆眼球的大额优惠券和促销价环环相“扣”，一样是花钱，这里更享经济优惠！</view>
												<view class="text">每次成功消费额外赚到蜜糖积分，每一蜜糖都能兑换平台优选的自营产品，均可最高抵扣100%，优选产品免费拿！</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #10CFBD;" @click="scrollTo(3266)">高速通道下载</view>
													<!-- <view class="button" style="background-color: #EC5298;">更多</view> -->
												</view>
											</view>
										</view>
									</view>
									<view :class="{frameL:1,frame3:1,frame8:1,canShow:canShow(100+800+440+640+640+100)}">
										<view class="frameS">
											<view class="left">
												<view class="titleL">什么是蜜糖？</view>
												<view class="list">
													<view class="li">
														蜜糖的来源
													</view>
													<view class="li">
														蜜糖来源于平台合作的商家的佣金，在刨除技术研发、运营服务等硬性成本后，平台将大部分佣金折算为蜜糖积分。
													</view>
													<view class="li">
														蜜糖的归属
													</view>
													<view class="li">
														蜜糖用于奖励在平台消费的用户以及平台发展做出杰出贡献的引荐人。
													</view>
													<view class="li">
														蜜糖的用途
													</view>
													<view class="li">
														蜜糖可用于购买自营商城、本地生活的产品和服务（2.0版本正式上线）。
													</view>
												</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #EC5298;" @click="scrollTo(3266)">高速通道下载</view>
													<!-- <view class="button" style="background-color: #212121;">更多</view> -->
												</view>
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame3:1,frame5:1,canShow:canShow(100+800+440+640+640+640+100)}">
										<view class="frameS">
											<image class="picL" src="/static/home@2x.png"></image>
											<view class="left">
												<view class="titleL">如何分享赚钱创业？</view>
												<view class="text">点击邀请生成专属二维码，成为引荐人！ 分享给好友注册下载！ 好友通过平台每一笔消费都能给您带来蜜糖收益！</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #786DE3;" @click="scrollTo(3266)">高速通道下载</view>
													<!-- <view class="button" style="background-color: #212121;">更多</view> -->
												</view>
											</view>
										</view>
									</view>
									<view :class="{frameL:1,frame6:1,canShow:(100+800+440+640+640+640+640+100)}">
										<view class="titleL">快来下载使用吧！</view>
										<view class="text">高速下载通道下载请点击</view>
										<view class="buttonFrame">
											<view class="button" style="background-color: #EC5298;" @click="downloadAOS">
												<text>安卓 GOOGLE PLAY</text>
											</view>
											<view class="button" style="background-color: #FBB03B;" @click="download"><text>苹果 APP STORE</text></view>
										</view>
									</view>
									<view :class="{frameL:1,frame7:1,canShow:canShow(100+800+440+640+640+640+640+360+100)} ">
										<view class="titleL">联系我们</view>
										<view class="text">任何使用问题，团队建设问题，运营商如何加入问题，可以咨询我们客服微信：蜜蜂天堂APP商城</view>
										<view class="frameS">
					<!-- 						<view class="left">
												<view class="list">
													<image class="icon" src="/static/shoujiICON@2x.png"></image>
													<view class="listFrame">
														<view class="title">手机号码</view>
														<view class="subTitle">18218218222</view>
													</view>
												</view>
												<view class="list">
													<image class="icon" src="/static/weixinICON@2x.png"></image>
													<view class="listFrame">
														<view class="title">微信客服</view>
														<view class="subTitle">18218218222</view>
													</view>
												</view>
											</view> -->
											<view class="right">
												<image src="/static/qrCode3@2x.png"></image>
												<view class="subTitle">微信扫码关注公众号获取最新资讯</view>
											</view>
										</view>
									</view>
									<!-- <view class="foot">
										<view class="text">冀ICP备17029919号-1 冀公网安备 13010402001538号</view>
										<view class="text" style="margin-top: 30px;">© Copyright 2017 @ hsrjapp | all rights reserved.</view>
									</view> -->
			</div>
		</view>
		</block>
		<block v-else>
			<view class="head">
				<image src="/static/logo@2x.png"></image>
				<view class="navFrame" v-if="showHead">
					<view class="nav" @click="scrollToPhone(0)">首页<view class="line" v-if="scrollTopNow>=0 && scrollTopNow<899"></view></view>
					<view class="nav" @click="scrollToPhone(1880)">关于蜜蜂天堂<view class="line" v-if="scrollTopNow>=899 && scrollTopNow<1344"></view></view>
					<view class="nav" @click="scrollToPhone(3204)">注册<view class="line" v-if="scrollTopNow>=1344 && scrollTopNow<3266"></view></view>
					<view class="nav" @click="scrollToPhone(4566)">功能<view class="line" v-if="scrollTopNow>=3266 && scrollTopNow<3622"></view></view>
					<view class="nav" @click="scrollToPhone(6380)">蜜糖<view class="line" v-if="scrollTopNow>=3266 && scrollTopNow<3622"></view></view>
					<view class="nav" @click="scrollToPhone(7922)">赚钱<view class="line" v-if="scrollTopNow>=3266 && scrollTopNow<3622"></view></view>
					<view class="nav" @click="scrollToPhone(9206)">联系我们<view class="line" v-if="scrollTopNow>=3622"></view></view>
				</view>
				<view class="ficon" @click="toggleHead">{{showHead?'&#xe600;':'&#xe656;'}}</view>
			</view>
			<scroll-view class="scroll" :scroll-y="true" @scroll="scrollPhone" :scroll-top="scrollTop">
				<view class="scrollFrame">
					<view :class="{frameL:1,frame1:1,canShow:indexShow}">
										<view class="frameS">
											<view class="left">
												<view class="titleL">蜜蜂天堂</view>
												<view class="titleL">自用省钱，分享赚钱</view>
												<view class="titleL">0成本，轻创业，无负担</view>
												<view class="qrFrame">
													<view class="qrPoint">
														<view class="qrTitle">安卓版</view>
														<image src="/static/AOSQRcode.png"></image>
													</view>
													<view class="qrPoint">
														<view class="qrTitle">苹果版</view>
														<image src="/static/IOSQRcode.png"></image>
													</view>
												</view>
												<view class="titleL">快效激活你的粉丝经济</view>
												<view class="titleL">一个能帮消费者省钱赚钱的APP</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #EC5298;" @click="scrollToPhone(8720)">高速通道下载</view>
													<view class="button" style="background-color: #FBB03B;" @click="scrollToPhone(8720)">下载APP</view>
												</view>
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame2:1,canShow:canShowPhone(2046)}">
										<view class="frameM frameM1">
											<image class="picS" src="/static/huojianICON@2x.png"></image>
											<view class="titleM">帮省加油费</view>
											<view class="text">点击寻找距离最近、最省钱的加油站！</view>
										</view>
										<view class="frameM frameM2">
											<image class="picS" src="/static/huiyuanICON@2x.png"></image>
											<view class="titleM">帮赚奶粉钱</view>
											<view class="text">分享APP给身边亲友，获得蜜糖奖励！</view>
										</view>
										<view class="frameM frameM3">
											<image class="picS" src="/static/jifengICON@2x.png"></image>
											<view class="titleM">帮淘优惠券</view>
											<view class="text">海量淘宝平台隐藏优惠券，同样是花钱，这里更享经济实惠！</view>
										</view>
									</view>
									<view :class="{frameL:1,frame3:1,canShow:canShowPhone(3820)} ">
										<view class="frameS">
											<view class="left">
												<view class="titleL">蜜蜂天堂注册流程</view>
												<view class="text">扫描二维码注册，下载</view>
												<view class="qrFrame">
													<view class="qrPoint">
														<view class="qrTitle">安卓版</view>
														<image src="/static/AOSQRcode.png"></image>
													</view>
													<view class="qrPoint">
														<view class="qrTitle">苹果版</view>
														<image src="/static/IOSQRcode.png"></image>
													</view>
												</view>
												<!-- <view class="buttonFrame"> -->
													<!-- <view class="button" style="background-color: #786DE3;" @click="scrollToPhone(8720)">高速通道下载</view> -->
													<!-- <view class="button" style="background-color: #212121;">更多</view> -->
									<!-- 			</view> -->
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame4:1,canShow:canShowPhone(5424)}">
										<view class="frameS">
											<image class="picL" src="/static/home@2x.png"></image>
											<view class="left">
												<view class="titleL">蜜蜂天堂APP功能概述</view>
												<view class="text">据淘宝数据统计，平均每人淘宝购物一年消费3万左右，通过蜜蜂天堂领取优惠省钱，每年一个家庭网购支出将节省40%至61%。</view>
												<view class="text">蜜蜂天堂，能帮粉丝、用户、消费者省钱的APP！</view>
												<view class="text">这里筛选了海量电商平台让利超狠的商品，惊爆眼球的大额优惠券和促销价环环相“扣”，一样是花钱，这里更享经济优惠！</view>
												<view class="text">每次成功消费额外赚到蜜糖积分，每一蜜糖都能兑换平台优选的自营产品，均可最高抵扣100%，优选产品免费拿！</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #10CFBD;" @click="scrollToPhone(8720)">高速通道下载</view>
													<!-- <view class="button" style="background-color: #EC5298;">更多</view> -->
												</view>
											</view>
										</view>
									</view>
									<view :class="{frameL:1,frame3:1,frame8:1,canShow:canShowPhone(7206)}">
										<view class="frameS">
											<view class="left">
												<view class="titleL">什么是蜜糖？</view>
												<view class="list">
													<view class="li">
														蜜糖的来源
													</view>
													<view class="li">
														蜜糖来源于平台合作的商家的佣金，在刨除技术研发、运营服务等硬性成本后，平台将大部分佣金折算为蜜糖积分。
													</view>
													<view class="li">
														蜜糖的归属
													</view>
													<view class="li">
														蜜糖用于奖励在平台消费的用户以及平台发展做出杰出贡献的引荐人。
													</view>
													<view class="li">
														蜜糖的用途
													</view>
													<view class="li">
														蜜糖可用于购买自营商城、本地生活的产品和服务（2.0版本正式上线）。
													</view>
												</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #EC5298;" @click="scrollTo(3266)">高速通道下载</view>
													<!-- <view class="button" style="background-color: #212121;">更多</view> -->
												</view>
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame3:1,frame5:1,canShow:canShowPhone(7206)}">
										<view class="frameS">
											<view class="left">
												<view class="titleL">如何分享赚钱创业？</view>
												<view class="text">点击邀请生成专属二维码，成为引荐人！ 分享给好友注册下载！ 好友通过平台每一笔消费都能给您带来蜜糖收益！</view>
												<view class="buttonFrame">
													<view class="button" style="background-color: #786DE3;" @click="scrollToPhone(8720)">高速通道下载</view>
													<!-- <view class="button" style="background-color: #212121;">更多</view> -->
												</view>
											</view>
											<image class="picL" src="/static/home@2x.png"></image>
										</view>
									</view>
									<view :class="{frameL:1,frame6:1,canShow:canShowPhone(8818)}">
										<view class="titleL">快来下载使用吧！</view>
										<view class="text">高速下载通道下载请点击</view>
										<view class="buttonFrame">
											<view class="button" style="background-color: #EC5298;" @click="downloadAOS">
												<view class="text">Android下载</view>
											</view>
											<view class="button" style="background-color: #FBB03B;" @click="download"><view class="text">iPhone下载</view></view>
										</view>
									</view>
									<view :class="{frameL:1,frame7:1,canShow:canShowPhone(8818)} ">
										<view class="titleL">联系我们</view>
										<view class="text">任何使用问题，团队建设问题，运营商如何加入问题，可以咨询我们客服微信：蜜蜂天堂APP商城</view>
										<view class="frameS">
					<!-- 						<view class="left">
												<view class="list">
													<image class="icon" src="/static/shoujiICON@2x.png"></image>
													<view class="listFrame">
														<view class="title">手机号码</view>
														<view class="subTitle">18218218222</view>
													</view>
												</view>
												<view class="list">
													<image class="icon" src="/static/weixinICON@2x.png"></image>
													<view class="listFrame">
														<view class="title">微信客服</view>
														<view class="subTitle">18218218222</view>
													</view>
												</view>
											</view> -->
											<view class="right">
												<image src="/static/qrCode3@2x.png"></image>
												<view class="subTitle">微信扫码关注公众号获取最新资讯</view>
											</view>
										</view>
									</view>
									<!-- <view class="foot">
										<view class="text">冀ICP备17029919号-1 冀公网安备 13010402001538号</view>
										<view class="text" style="margin-top: 30px;">© Copyright 2017 @ hsrjapp | all rights reserved.</view>
									</view> -->
				</view>
			</scroll-view>
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		components:{},
		onLoad(){
			 
		},
		onShow: function() {
			
		},
		data() {
			return {
				scrollTop:0,
				scrollTopNow:0,
				indexShow:false,
				showArray:{},
				showHead:false,
				isWechart:false
			};
		},
		methods:{
			toggleHead(){
				this.showHead = !this.showHead
			},
			downloadAOS(){
				if(this.isWechart){
					uni.showToast({
						title:"请点击右上角按钮，在浏览器中打开",
						icon:'none'
					})
					return
				}
				window.location.href='https://www.paradisebee.com/mifengtiantang.apk';
			},
			download(){
				if(this.isWechart){
					uni.showToast({
						title:"请点击右上角按钮，在浏览器中打开",
						icon:'none'
					})
					return
				}
				window.location.href='https://apps.apple.com/cn/app/%E8%9C%9C%E8%9C%82%E5%A4%A9%E5%A0%82/id1492021582';
			},
			scrollPhone(e){
				this.scrollTopNow = e.target.scrollTop/this.rpx
				console.log("scrollPhone",this.scrollTopNow)
			},
			scroll(e){
				this.scrollTopNow = e.detail.scrollTop
			},
			scrollTo(num){
				this.scrollTop = num;
			},
			scrollToPhone(num){
				let _this = this;
				this.scrollTop = this.scrollTopNow*this.rpx;
				this.$nextTick(function(){
					_this.scrollTop = num*_this.rpx;
				})
				this.showHead=false;
			},
			canShow(num){
				let _this=this;
					if(!$("#scroll1").height()){
						return false
					}
					if(this.showArray[num]){
						return true;
					}
					this.$nextTick(function(){
						let realHeigth=_this.scrollTopNow+$("#scroll1").height()
						if(num < realHeigth){
							_this.showArray[num]=true
							return true;
						}else{
							return false;
						}
					})
			},
			canShowPhone(num){
				let _this = this;
				console.log("canShowPhone",num)
				if(_this.showArray[num]){
					return true;
				}
					let res = uni.getSystemInfoSync();
					let h = res.windowHeight/_this.rpx-150;
					let realHeigth=_this.scrollTopNow+h;
					if(num < realHeigth){
						_this.showArray[num]=true
						return true;
					}else{
						return false;
					}
			}
		},
		computed:{
			isWX(){
				return this.$store.state.rootST.isWX
			},
			phone:function(){
				let res = uni.getSystemInfoSync();
				console.log(res)
				if(res.windowWidth<res.windowHeight){
					return true;
				}else{
					return false;
				}
			},
			rpx:function(){
				let res=uni.getSystemInfoSync()
				return res.windowWidth/750;
			}
		},
		onShow(){
			let _this=this;
			this.$nextTick(function(){
				if(!_this.phone){
					document.getElementById("scroll1").onscroll=function(e){
						_this.scrollTopNow = e.target.scrollTop
						console.log(_this.scrollTopNow)
					}
				}
				
			})
			setTimeout(function(){
				_this.indexShow = true
			},300)
		},
		watch:{
			scrollTop(val){
				if(!this.phone){
					document.getElementById("scroll1").scrollTop = val
				}
				return val
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destop{
		.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
			.head{
				width: 100%;
				height: 100px;
				background-color: #212121;
				.headFrame{
					width:$main-width;
					height: 100px;
					margin: auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
					image{
						width:167px;
						height:58px;
					}
					.navFrame{
						display: flex;
						height: 53px;
						.nav{
							font-size:16px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:#fff;
							margin-top: 16px;
							margin-right: 49px;
							position: relative;
							.line{
								width:80%;
								height: 6px;
								background-color: rgba(120,109,227,1);
								border-radius: 6px;
								margin: auto;
								margin-top: 11px;
							}
							&.hl{
								color: #FAC523;
								.line{
									background-color: #FAC523;
								}
							}
						}
					}
				}
			}
			.body{
				flex-grow: 1;
				flex-shrink: 1;
				width: 100%;
				overflow-y: auto;
				overflow-x: hidden;
				.frameL{
					width: 100%;
					.qrFrame{
						margin-top: 27px;
						margin-bottom: 27rpx;
						display: flex;
						.qrPoint{
							margin-right: 25px;
							.qrTitle{
								font-size:16px;
								font-family:Microsoft YaHei;
								font-weight:bold;
								color:rgba(255,255,255,1);
							}
							image{
								width: 180px;
								height:180px;
								margin-top: 10rpx;
							}
						}
					}
					.titleL{
						font-size:30px;
						font-family:Microsoft YaHei;
						font-weight:bold;
						color:rgba(255,255,255,1);
						line-height:42px;
						opacity: 0;
					}
					.frameS{
						width: $main-width;
						margin: auto;
						display: flex;
						justify-content: space-between;
						.picL{
							width: 450px;
							height: 450px;
							opacity: 0;
						}
					}
					.buttonFrame{
						display: flex;
						.button{
							padding: 22px 42px;
							color: #fff;
							font-size:16px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(255,255,255,1);
							border-radius:10px;
							opacity: 0;
						}
					}
					.text{
						font-size:14px;
						font-family:Microsoft YaHei;
						font-weight:400;
						line-height:24px;
						opacity: 0;
					}
				}
				.frame1{
					background-color: #E36D6D;
					height: 804px;
					.left{
						margin-top: 104px;
						.titleL{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(100px,0);
						}
						.qrCode{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(-100px,0);
							width: 177px;
							height: 173px;
							margin-top: 15px;
							margin-bottom: 19px;
							opacity: 0;
						}
						.text{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							margin-top: 21px;
							color: #fff;
							opacity: 0;
						}
						.buttonFrame{
							margin-top: 25px;
							.button{
								transition-duration: 0.6s;
								transition-timing-function: linear;
								transform:rotate(90deg);
								margin-right: 10px;
								opacity: 0;
							}
						}
					}
					.picL{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:translate(0,-100px);
						margin-top: 175px;
						opacity: 0;
					}
				}
				.frame2{
					display: flex;
					justify-content: space-between;
					height: 440px;
					.frameM{
						flex-shrink: 1;
						width: 33.335%;
						padding: 72px 27px;
						.picS{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:rotate(180deg);
							height: 90px;
							width:90px;
							margin: auto;
							opacity: 0;
						}
						.titleM{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:scale(1.5,1.5);
							font-size:24px;
							font-family:Microsoft YaHei;
							font-weight:bold;
							color:rgba(255,255,255,1);
							text-align: center;
							margin-top: 32px;
							opacity: 0;
						}
						.text{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(0,-100px);
							color: #F4F5F9;
							margin-top: 20px;
							opacity: 0;
							text-align: center;
						}
					}
					.frameM1{
						background-color: #212121;
					}
					.frameM2{
						background-color: #10CFBD;
					}
					.frameM3{
						background-color: #F4F5F9;
						.titleM{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							color: rgba(49,49,49,1);
							opacity: 0;
						}
						.text{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							color: rgba(102,102,102,1);
							opacity: 0;
						}
					}
				}
				.frame3{
					height:640px;
					background-color: #fff;
					.left{
						margin-top: 130px;
						width:473px;
						.titleL{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(-100px,0);
							color: #313131 !important;
							opacity: 0;
						}
						.text{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(100px,0);
							color:#666666;
							margin-top: 30px;
							// margin-bottom: 9px;
							opacity: 0;
						}
						.qrTitle{
							font-size:16px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(102,102,102,1) !important;
						}
						.point{
							display: flex;
							margin-bottom: 15px;
							align-items: center;
							.picXS{
								transition-duration: 0.6s;
								transition-timing-function: linear;
								transform:translate(-100px,0);
								width: 30px;
								height: 30px;
								margin-right: 23px;
								opacity: 0;
							}
							.text{
								transition-duration: 0.6s;
								transition-timing-function: linear;
								transform:translate(-100px,0);
								margin: 0;
								opacity: 0;
							}
						}
						.buttonFrame{
							margin-top: 67px;
							.button{
								transition-duration: 0.6s;
								transition-timing-function: linear;
								transform:rotate(180deg);
								margin-right: 10px;
								opacity: 0;
							}
						}
					}
					.picL{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:translate(0,100px);
						margin-top: 110px;
						opacity: 0;
					}
				}
				.frame4{
					height: 640px;
					background-color: #EC5298;
					.picL{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:rotate(480deg);
						margin-top: 108px;
						opacity: 0;
					}
					.left{
						margin-top: 107px;
						width:519px;
						.titleL{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:scale(1.5,1.5);
						}
						.text{
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(100px,0);
							color: #fff;
							margin-top: 29px;
							opacity: 0;
						}
						.buttonFrame{
							margin-top: 64px;
							.button{
								transition-duration: 0.6s;
								transition-timing-function: linear;
								margin-right: 10px;
								opacity: 0;
								transform:translate(0,100px);
							}
						}
						}
				}
				.frame3.frame5{
					background-color: #10CFBD;
					.titleL{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						color: #fff !important;
						opacity: 0;
					}
					.text{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						color:#fff !important;
						opacity: 0;
					}
				}
				.frame6{
					height: 360px;
					background-color: #6D94E4;
					.titleL{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:translate(0,-100px);
						text-align: center;
						padding-top: 96px;
						color: #fff;
						opacity: 0;
					}
					.text{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:scale(1.5,1.5);
						text-align: center;
						margin-top: 20px;
						color: #fff;
						opacity: 0;
					}
					.buttonFrame{
						margin: auto;
						margin-top: 45px;
						width: 450px;
						justify-content: space-between;
						.button{
							width: 220px;
							height: 60px;
							transition-duration: 0.6s;
							transition-timing-function: linear;
							transform:translate(0,100px);
							display: flex;
							padding: 0;
							justify-content: center;
							align-items: center;
							margin: 0;
							opacity: 0;
							image{
								width: 27px;
								height:27px;
								margin-right: 8px;
							}
							text{
								font-size:14px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(255,255,255,1);
							}
						}
					}
				}
				.frame7{
					height: 800px;
					background-color: #fff;
					.titleL{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:translate(0,100px);
						text-align: center;
						padding-top: 88px;
						color: #313131;
						opacity: 0;
					}
					.text{
						transition-duration: 0.6s;
						transition-timing-function: linear;
						transform:scale(1.5,1.5);
						text-align: center;
						margin-top: 20px;
						color: #666666;
						opacity: 0;
					}
					.frameS{
						justify-content: center;
					}
					// .left{
					// 	margin-top: 92px;
					// 	margin-left: 60px;
					// 	.list{
					// 		display: flex;
					// 		margin-bottom: 40px;
					// 		.icon{
					// 			transition-duration: 0.6s;
					// 			transition-timing-function: linear;
					// 			transform:translate(-100px,0);
					// 			width:60px;
					// 			height:60px;
					// 			margin-right: 19px;
					// 			opacity: 0;
					// 		}
					// 		.title{
					// 			transition-duration: 0.6s;
					// 			transition-timing-function: linear;
					// 			transform:translate(-100px,0);
					// 			font-size:20px;
					// 			font-family:Microsoft YaHei;
					// 			font-weight:400;
					// 			color:rgba(49,49,49,1);
					// 			margin-bottom: 14px;
					// 			opacity: 0;
					// 		}
					// 		.subTitle{
					// 			transition-duration: 0.6s;
					// 			transition-timing-function: linear;
					// 			transform:translate(-100px,0);
					// 			font-size:14px;
					// 			font-family:Microsoft YaHei;
					// 			font-weight:400;
					// 			color:rgba(102,102,102,1);
					// 			opacity: 0;
					// 		}
					// 		.qrCode2{
					// 			transition-duration: 0.6s;
					// 			transition-timing-function: linear;
					// 			transform:translate(-100px,0);
					// 			width:201px;
					// 			height:224px;
					// 			opacity: 0;
					// 		}
					// 	}
					// }
					.right{
						margin-top: 47px;
						display: flex;
						flex-direction: column;
						align-items: center;
						image{
							width:360px;
							height:360px;
						}
						.subTitle{
							font-size:20px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(49,49,49,1);
							margin-top: 32px;
						}
					}
				}
				.frame8{
					// <view class="list">
					// 	<view class="li">
					// 		<view class="dot"></view>
					// 		<text>蜜糖的来源</text>
					// 	</view>
					background-color: #FAC523;
					&.frame3{
						.left{
							.titleL{
								color: #fff !important;
							}
						}
					}
					.list{
						margin-top: 30px;
						.li{
							width: 540px;
							display:list-item;
							list-style-type:disc;
							font-size:14px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(244,245,249,1);
							line-height:24px;
						}
					}
				}
				.frameL.canShow{
					.picL,.button,.label,.title,.icon,.text,.titleL,.picXS,.titleM,.picXS,.picS,.qrCode,.qrCode2,.subTitle{
						transform:translate(0,0) rotate(0deg) scale(1,1) !important;
						opacity: 1 !important;
					}
				}
				.foot{
					height: 400px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					background-color: #212121;
					.text{
						font-size:16px;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(255,255,255,1);
					}
				}
			}
		}
	}
	/* #endif */
	.phone{
		.head{
			width:750rpx;
			height: 150rpx;
			background-color: #212121;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			position: relative;
			z-index: 10;
			image{
				width:250rpx;
				height:87rpx;
			}
			.ficon{
				color: #fff;
				font-size: 50rpx;
			}
			.navFrame{
				position: absolute;
				top:150rpx;
				left: 0;
				width:750rpx;
				padding: 0 30rpx;
				background-color: #212121;
				padding-bottom: 60rpx;
				.nav{
					font-size:30rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					color:#fff;
					margin-top: 60rpx;
					position: relative;
					&.hl{
						color: #FAC523;
						.line{
							background-color: #FAC523;
						}
					}
				}
			}
		}
		.scroll{
			width:750rpx;
			position: fixed;
			top:150rpx;
			left: 0;
			right:0;
			bottom:0;
			overflow: hidden;
			.scrollFrame{
				width:750rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.frameL{
					width: 750rpx;
					padding: 60rpx 30rpx;
				}
				.qrFrame{
					margin-top: 30rpx;
					margin-bottom: 30rpx;
					display: flex;
					width:100%;
					justify-content: space-between;
					.qrPoint{
						.qrTitle{
							font-size:6rpx;
							font-family:Microsoft YaHei;
							font-weight:bold;
							color:rgba(255,255,255,1);
						}
						image{
							width: 300rpx;
							height:300rpx;
							margin-top: 20rpx;
						}
					}
				}
				.titleL{
					transition-duration: 0.6s;
					transition-timing-function: linear;
					font-size:60rpx;
					font-family:Microsoft YaHei;
					font-weight:bold;
					text-align: center;
					color:rgba(255,255,255,1);
					line-height: 1.5;
					opacity: 0;
					transform:translate(0,-100rpx) rotate(0deg) scale(1,1);
				}
				.titleM{
					transition-duration: 0.6s;
					transition-timing-function: linear;
					font-size:48rpx;
					font-family:Microsoft YaHei;
					font-weight:bold;
					color:rgba(255,255,255,1);
					text-align: center;
					transform:translate(0,0) rotate(30deg) scale(1,1);
					opacity: 0;
				}
				.text{
					transition-duration: 0.6s;
					transition-timing-function: linear;
					font-size:28rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					line-height:2;
					text-align: center;
					opacity: 0;
					transform:translate(0,100rpx) rotate(0deg) scale(1,1);
				}
				.picL{
					transition-duration: 0.6s;
					transition-timing-function: linear;
					width: 636rpx;
					height: 636rpx;
					margin: auto;
					opacity: 0;
					transform:translate(0,0) rotate(0deg) scale(1.5,1.5);
				}
				.picXS{
					transition-duration: 0.6s;
					transition-timing-function: linear;
					width: 60rpx;
					height: 60rpx;
					opacity: 0;
					transform:translate(0,0) rotate(0deg) scale(2,2);
				}
				.picS{
					transition-duration: 0.6s;
					transition-timing-function: linear;
					height: 180rpx;
					width:180rpx;
					margin: auto;
					opacity: 0;
					transform:translate(0,0) rotate(90deg) scale(1.5,1.5);
				}
				.frame1{
					background-color: #E36D6D;
					// .qrCode{
					// 	width: 354rpx;
					// 	height: 346rpx;
					// 	margin: auto;
					// 	margin-top: 30rpx;
					// 	margin-bottom: 38rpx;
					// }
					.left{
						.text{
							color: #fff;
						}
					}
					.buttonFrame{
						display: flex;
						justify-content: center;
						align-items: center;
						.button{
							padding: 44rpx 84rpx;
							    font-size: 32rpx;
							    font-family: Microsoft YaHei;
							    font-weight: 400;
							    border-radius: 20rpx;
								margin-top: 30rpx;
								margin-bottom: 30rpx;
								margin-right: 10rpx;
								color: #fff;
						}
					}
				}
				.frame2{
					padding: 0;
					.frameM{
						padding: 60rpx 30rpx;
						width: 750rpx;
						.titleM{
							color:rgba(255,255,255,1);
						}
						.text{
							margin-top: 20rpx;
							color: #F4F5F9;
						}
					}
					.frameM1{
						background-color: #212121;
					}
					.frameM2{
						background-color: #10CFBD;
					}
					.frameM3{
						background-color: #F4F5F9;
						.titleM{
							color:#333;
						}
						.text{
							color:#333;
						}
					}
				}
				.frame3{
					background-color: #fff;
					.point{
						margin-top: 30rpx;
						display: flex;
						.picXS{
							margin-right: 30rpx;
						}
						.text{
							width:600rpx;
							text-align: left;
						}
					}
						.titleL{
							color: #313131 !important;
							margin-bottom: 50rpx;
						}
						.text{
							color:#666666;
						}
						.button{
							padding: 44rpx 84rpx;
							    font-size: 32rpx;
							    font-family: Microsoft YaHei;
							    font-weight: 400;
							    border-radius: 20rpx;
								margin: auto;
								margin-top: 50rpx;
								margin-bottom: 50rpx;
								text-align: center;
								color: #fff;
								width: 370rpx;
						}
				}
				.frame4{
					background-color: #EC5298;
					.titleL{
						margin-top: 50rpx;
						margin-bottom: 50rpx;
					}
					.text{
						text-align: left;
						color: #fff;
						margin-bottom: 30rpx;
					}
					.button{
						padding: 44rpx 84rpx;
						    font-size: 32rpx;
						    font-family: Microsoft YaHei;
						    font-weight: 400;
						    border-radius: 20rpx;
							margin: auto;
							margin-top: 50rpx;
							margin-bottom: 50rpx;
							text-align: center;
							color: #fff;
							width: 370rpx;
					}
				}
				.frame3.frame5{
					background-color: #10CFBD;
					.titleL{
						color: #fff !important;
					}
					.text{
						color:#fff !important;
					}
				}
				.frame6{
					background-color: #6D94E4;
					.titleL{
						color: #fff;
						margin-bottom: 50rpx;
					}
					.text{
						color: #fff;
					}
					.buttonFrame{
						margin-top: 50rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.button{
							padding: 20rpx 20rpx;
							    border-radius: 20rpx;
								width: 300rpx;
							image{
								width: 80rpx;
								height:80rpx;
								margin: auto;
								margin-bottom: 20rpx;
							}
							.text{
								margin: auto;
								color:rgba(255,255,255,1);
							}
						}
					}
				}
				.frame7{
					background-color: #fff;
					.titleL{
						color: #313131;
						margin-bottom: 50rpx;
					}
					.text{
						color: #666666;
					}
					.right{
						image{
							width:360rpx;
							height:360rpx;
							margin: auto;
							margin-top: 50rpx;
							margin-bottom: 50rpx;
						}
						.subTitle{
							color:rgba(49,49,49,1);
							text-align: center;
						}
					}
				}
				.frame8{
					background-color: #FAC523;
					.list{
						margin-top: 30px;
						.li{
							width: 100%;
							display:list-item;
							list-style-type:disc;
							font-size:28rpx;
							font-family:Microsoft YaHei;
							font-weight:400;
							line-height:1.5;
						}
					}
				}
				.foot{
					padding: 60rpx 30rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					background-color: #212121;
					.text{
						font-size:16px;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(255,255,255,1);
					}
				}
				.frameL.canShow{
					.picL,.button,.label,.title,.icon,.text,.titleL,.picXS,.titleM,.picXS,.picS,.qrCode,.qrCode2,.subTitle{
						transform:translate(0,0) rotate(0deg) scale(1,1) !important;
						opacity: 1 !important;
					}
				}
			}
		}
	}
</style>
