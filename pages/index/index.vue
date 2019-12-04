<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop">
		<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<view class="head">
				<view class="headFrame">
					<image src="/static/logo@2x.png"></image>
					<view class="navFrame">
						<view class="nav" @click="scrollTo(0)">首页<view class="line" v-if="scrollTopNow>=0 && scrollTopNow<899"></view></view>
						<view class="nav" @click="scrollTo(899)">关于蜜蜂天堂<view class="line" v-if="scrollTopNow>=899 && scrollTopNow<1344"></view></view>
						<view class="nav" @click="scrollTo(1344)">简介<view class="line" v-if="scrollTopNow>=1344 && scrollTopNow<3266"></view></view>
						<view class="nav" @click="scrollTo(3266)">下载<view class="line" v-if="scrollTopNow>=3266 && scrollTopNow<3622"></view></view>
						<view class="nav" @click="scrollTo(3622)">联系我们<view class="line" v-if="scrollTopNow>=3622"></view></view>
					</view>
				</view>
			</view>
			<div class="body" scroll-y="true" :scroll-top="scrollTop" id="scroll1">
				<view :class="{frameL:1,frame1:1,canShow:indexShow}">
					<view class="frameS">
						<view class="left">
							<view class="titleL">蜜蜂天堂最新版</view>
							<view class="titleL">汇聚主流平台优惠券</view>
							<view class="titleL">让你不仅省钱，还赚钱</view>
							<image class="qrCode" src="/static/qrcode@2x2.png"></image>
							<view class="titleL">每天都是双十一</view>
							<view class="titleL">扫码下载安装</view>
							<view class="titleL">邀请码：224422</view>
							<view class="text">感受极致的购物体验,注册下载后记得加</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #EC5298;">高速通道下载</view>
								<view class="button" style="background-color: #FBB03B;" @click="scrollTo(3266)">下载APP</view>
							</view>
						</view>
						<image class="picL" src="/static/home@2x.png"></image>
					</view>
				</view>
				<view :class="{frameL:1,frame2:1,canShow:canShow(627)}">
					<view class="frameM frameM1">
						<image class="picS" src="/static/huojianICON@2x.png"></image>
						<view class="titleM">蜜蜂天堂APP的诞生</view>
						<view class="text">2019年3月项目策划团队筹建，2019年11月测试版APP上线，2017年8月正式版上线，我们将不断优化用户的购物体验，为大家创造额外的被动可持续收入，资产永续，不再是一个名词！而是拿得到的收益！</view>
					</view>
					<view class="frameM frameM2">
						<image class="picS" src="/static/huiyuanICON@2x.png"></image>
						<view class="titleM">蜜蜂天堂APP的优势</view>
						<view class="text">2019年3月项目策划团队筹建，2019年11月测试版APP上线，2017年8月正式版上线，我们将不断优化用户的购物体验，为大家创造额外的被动可持续收入，资产永续，不再是一个名词！而是拿得到的收益！</view>
					</view>
					<view class="frameM frameM3">
						<image class="picS" src="/static/jifengICON@2x.png"></image>
						<view class="titleM">蜜蜂天堂APP的未来</view>
						<view class="text">蜜蜂天堂以用户体验为重点，打造社交新零售生态系统，让实体店商家、消费者、线上店铺等，一起实现多方共赢，为大家创造价值，欢迎宝妈、微商，线上线下商家、淘客加入我们的大家庭！共创美好的明天！</view>
					</view>
				</view>
				<view :class="{frameL:1,frame3:1,canShow:canShow(900)} ">
					<view class="frameS">
						<view class="left">
							<view class="titleL">蜜蜂天堂注册流程</view>
							<view class="text">花生日记通过邀请注册，扫码确定关系终身不变，比亲妈还亲。</view>
							<view class="point">
								<image class="picXS" src="/static/wangyeICON@2x.png"></image>
								<view class="text">点击网页下载链接，下载注册花生日记，填写邀请码224422</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/bibianjiICON@2x.png"></image>
								<view class="text">登陆后.扫码添加微信客服，或者加alibabashuyao.回复手机后四位</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/jingbaoICON@2x.png"></image>
								<view class="text">小贴士：注册手机号也可以作为邀请码哦。</view>
							</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #786DE3;">高速通道下载</view>
								<!-- <view class="button" style="background-color: #212121;">更多</view> -->
							</view>
						</view>
						<image class="picL" src="/static/home@2x.png"></image>
					</view>
				</view>
				<view :class="{frameL:1,frame4:1,canShow:canShow(1600)}">
					<view class="frameS">
						<image class="picL" src="/static/home@2x.png"></image>
						<view class="left">
							<view class="titleL">蜜蜂天堂核心优势</view>
							<view class="text">APP底部商学院栏目打造自学乐园，底部社区有各种素材可以分享， 零门槛零风险：真正的0投资、0成本、0囤货、0发货； 全领域全覆盖：合作伙伴几乎涵盖所有领域知名电商； 超高购物返佣：秒杀同类平台，百万大额优惠券每日更新；</view>
							<view class="text">对接主流电商平台商品，花生日记可以搜索你想找的商品。觉得不过瘾？复制宝贝标题搜索试试</view>
							<view class="text">使用搜索也有小技巧，觉得搜冰箱搜不出来，只能在淘宝APP复制标题反向查找？搜索电冰箱试试，嘿嘿，我们将在不断地版本更新中进行优化的亲</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #10CFBD;">高速通道下载</view>
								<!-- <view class="button" style="background-color: #EC5298;">更多</view> -->
							</view>
						</view>
					</view>
				</view>
				<view :class="{frameL:1,frame3:1,frame5:1,canShow:canShow(2200)}">
					<view class="frameS">
						<view class="left">
							<view class="titleL">如何分享赚钱</view>
							<view class="text">在APP端，右下角我-分享好友中，我们有多重推广方式，以推广APP为主，用你的邀请码或者邀请链接下载注册的自动成为你团队小伙伴哦。当然，你也可以分享商品口令推荐你所喜欢的商品</view>
							<view class="point">
								<image class="picXS" src="/static/shoujiICON@2x2.png"></image>
								<view class="text">APP邀请推广</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/shangpinICON@2x.png"></image>
								<view class="text">商品分享推广</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/fenxiangICON@2x.png"></image>
								<view class="text">多种分享方式</view>
							</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #786DE3;">高速通道下载</view>
								<!-- <view class="button" style="background-color: #212121;">更多</view> -->
							</view>
						</view>
						<image class="picL" src="/static/home@2x.png"></image>
					</view>
				</view>
				<view :class="{frameL:1,frame6:1,canShow:canShow(2927)}">
					<view class="titleL">快来下载使用吧！</view>
					<view class="text">高速下载通道下载请点击</view>
					<view class="buttonFrame">
						<view class="button" style="background-color: #EC5298;">
							<image class="icon" src="/static/ANZHUO@2x.png"></image><text>安卓 GOOGLE PLAY</text>
						</view>
						<view class="button" style="background-color: #FBB03B;"><image class="icon" src="/static/IOS@2x.png"></image><text>苹果 APP STORE</text></view>
					</view>
				</view>
				<view :class="{frameL:1,frame7:1,canShow:canShow(3287)} ">
					<view class="titleL">联系我们</view>
					<view class="text">任何使用问题，团队建设问题，运营商如何加入问题，可以咨询我们客服微信：alibabashuyao QQ:254004468</view>
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
				<view class="foot">
					<view class="text">冀ICP备17029919号-1 冀公网安备 13010402001538号</view>
					<view class="text" style="margin-top: 30px;">© Copyright 2017 @ hsrjapp | all rights reserved.</view>
				</view>
			</div>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop">
			

		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		components:{},
		onShow: function() {

		},
		data() {
			return {
				scrollTop:0,
				scrollTopNow:0,
				indexShow:false,
				showArray:{}
			};
		},
		methods:{
			scroll(e){
				console.log(e.detail.scrollTop)
				this.scrollTopNow = e.detail.scrollTop
			},
			scrollTo(num){
				this.scrollTop = num;
			},
			canShow(num){
				if(this.showArray[num]){
					return true;
				}
				if(num < this.scrollTopNow){
					this.showArray[num]=true
					return true;
				}else{
					return false;
				}
			}
		},
		computed:{
			
		},
		onShow(){
			let _this=this;
			this.$nextTick(function(){
				document.getElementById("scroll1").onscroll=function(e){
					_this.scrollTopNow = e.target.scrollTop
				}
			})
			
			setTimeout(function(){
				_this.indexShow = true
			},300)
		},
		watch:{
			scrollTop(val){
				console.log(val)
				document.getElementById("scroll1").scrollTop = val
			}
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
							color:rgba(187,182,241,1);
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
							width: 339px;
							height: 424px;
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
					background-color: rgba(120,109,227,1);
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
						}
					}
					.frameM1{
						background-color: #212121;
					}
					.frameM2{
						background-color: #EC5298;
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
							margin-top: 29px;
							margin-bottom: 53px;
							opacity: 0;
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
					background-color: #FBB03B;
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
					background-color: #786DE4;
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

	}
</style>
