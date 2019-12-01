<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop">
		<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<view class="head">
				<view class="headFrame">
					<image src="/static/logo@2x.png"></image>
					<view class="navFrame">
						<view class="nav">首页<view class="line"></view></view>
						<view class="nav">关于蜜蜂天堂</view>
						<view class="nav">简介</view>
						<view class="nav">下载</view>
						<view class="nav">联系我们</view>
					</view>
				</view>
			</view>
			<view class="body">
				<view class="frameL frame1">
					<view class="frameS">
						<view class="left">
							<view class="titleL">蜜蜂天堂最新版</view>
							<view class="titleL">汇聚主流平台优惠券</view>
							<view class="titleL">让你不仅省钱，还赚钱</view>
							<image class="qrCode" src="/static/二维码@2x2.png"></image>
							<view class="titleL">每天都是双十一</view>
							<view class="titleL">扫码下载安装</view>
							<view class="titleL">邀请码：224422</view>
							<view class="text">感受极致的购物体验,注册下载后记得加</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #EC5298;">高速通道下载</view>
								<view class="button" style="background-color: #FBB03B;">下载APP</view>
							</view>
						</view>
						<image class="picL" src="/static/home%20拷贝%202@2x.png"></image>
					</view>
				</view>
				<view class="frameL frame2">
					<view class="frameM frameM1">
						<image class="picS" src="/static/火箭ICON@2x.png"></image>
						<view class="titleM">蜜蜂天堂APP的诞生</view>
						<view class="text">2017年3月项目策划团队筹建，2017年5月测试版APP上线，2017年8月正式版上线，2018年2月1日。我们上线2.0全新版本。我们不断优化用户的购物体验，不忘初心，砥砺前行</view>
					</view>
					<view class="frameM frameM2">
						<image class="picS" src="/static/会员ICON@2x.png"></image>
						<view class="titleM">蜜蜂天堂APP的优势</view>
						<view class="text">2017年3月项目策划团队筹建，2017年5月测试版APP上线，2017年8月正式版上线，2018年2月1日。我们上线2.0全新版本。我们不断优化用户的购物体验，不忘初心，砥砺前行</view>
					</view>
					<view class="frameM frameM3">
						<image class="picS" src="/static/会员积分ICON@2x.png"></image>
						<view class="titleM">蜜蜂天堂APP的未来</view>
						<view class="text">2017年3月项目策划团队筹建，2017年5月测试版APP上线，2017年8月正式版上线，2018年2月1日。我们上线2.0全新版本。我们不断优化用户的购物体验，不忘初心，砥砺前行</view>
					</view>
				</view>
				<view class="frameL frame3">
					<view class="frameS">
						<view class="left">
							<view class="titleL">蜜蜂天堂注册流程</view>
							<view class="text">花生日记通过邀请注册，扫码确定关系终身不变，比亲妈还亲。</view>
							<view class="point">
								<image class="picXS" src="/static/网页ICON@2x.png"></image>
								<view class="text">点击网页下载链接，下载注册花生日记，填写邀请码224422</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/笔编辑ICON@2x.png"></image>
								<view class="text">登陆后.扫码添加微信客服，或者加alibabashuyao.回复手机后四位</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/警报提示ICON@2x.png"></image>
								<view class="text">小贴士：注册手机号也可以作为邀请码哦。</view>
							</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #786DE3;">高速通道下载</view>
								<view class="button" style="background-color: #212121;">更多</view>
							</view>
						</view>
						<image class="picL" src="/static/home%20拷贝%202@2x.png"></image>
					</view>
				</view>
				<view class="frameL frame4">
					<view class="frameS">
						<image class="picL" src="/static/home%20拷贝%202@2x.png"></image>
						<view class="left">
							<view class="titleL">蜜蜂天堂4.6更新</view>
							<view class="text">APP底部商学院栏目打造自学乐园，底部花粉社区有各种素材可以分 享，APP-我的-新手指引全部内容必看哦亲，切记添加APP专属客服，任何问题会有导师帮助您，专属客服位置点击APP首页右上角客服图标再点击右上角人工客服。或者APP-我的-我的工具-专属客服-人工客服</view>
							<view class="text">对接主流电商平台商品，花生日记可以搜索你想找的商品。觉得不过瘾？复制宝贝标题搜索试试</view>
							<view class="text">对接主流电商平台商品，花生日记可以搜索你想找的商品。觉得不过瘾？复制宝贝标题搜索试试</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #10CFBD;">高速通道下载</view>
								<view class="button" style="background-color: #EC5298;">更多</view>
							</view>
						</view>
					</view>
				</view>
				<view class="frameL frame3 frame5">
					<view class="frameS">
						<view class="left">
							<view class="titleL">如何分享赚钱</view>
							<view class="text">在APP端，右下角我-分享好友中，我们有多重推广方式，以推广APP为主，用你的邀请码或者邀请链接下载注册的自动成为你团队小伙伴哦。当然，你也可以分享商品口令推荐你所喜欢的商品</view>
							<view class="point">
								<image class="picXS" src="/static/手机ICON@2x2.png"></image>
								<view class="text">APP邀请推广</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/商品管理ICON@2x.png"></image>
								<view class="text">商品分享推广</view>
							</view>
							<view class="point">
								<image class="picXS" src="/static/分享ICON@2x.png"></image>
								<view class="text">多种分享方式</view>
							</view>
							<view class="buttonFrame">
								<view class="button" style="background-color: #786DE3;">高速通道下载</view>
								<view class="button" style="background-color: #212121;">更多</view>
							</view>
						</view>
						<image class="picL" src="/static/home%20拷贝%202@2x.png"></image>
					</view>
				</view>
				<view class="frameL frame6">
					<view class="titleL">快来下载使用吧！</view>
					<view class="text">高速下载通道下载请点击</view>
					<view class="buttonFrame">
						<view class="button" style="background-color: #EC5298;">安卓 GOOGLE PLAY</view>
						<view class="button" style="background-color: #FBB03B;">苹果 APP STORE</view>
					</view>
				</view>
				<view class="frameL frame7">
					<view class="titleL">联系我们</view>
					<view class="text">任何使用问题，团队建设问题，运营商如何加入问题，可以咨询我们客服微信：alibabashuyao QQ:254004468</view>
					<view class="frameS">
						<view class="left">
							<view class="list">
								<image class="icon" src="/static/手机ICON@2x.png"></image>
								<view class="listFrame">
									<view class="title">手机号码</view>
									<view class="subTitle">18218218222</view>
								</view>
							</view>
							<view class="list">
								<image class="icon" src="/static/微信ICON@2x.png"></image>
								<view class="listFrame">
									<view class="title">微信客服</view>
									<image class="qrCode2" src="/static/二维码@2x.png"></image>
								</view>
							</view>
						</view>
						<view class="right">
							<view class="inputFrame">
								<view class="label">你的名字<text class="red">*</text></view>
								<input/>
							</view>
							<view class="inputFrame">
								<view class="label">联系方式<text class="red">*</text></view>
								<input/>
							</view>
							<view class="inputFrame">
								<view class="label">您的意见<text class="red">*</text></view>
								<textarea/>
							</view>
							<view class="button">发送</view>
						</view>
					</view>
				</view>
				<view class="foot">
					<view class="text">冀ICP备17029919号-1 冀公网安备 13010402001538号</view>
					<view class="text" style="margin-top: 30px;">© Copyright 2017 @ hsrjapp | all rights reserved.</view>
				</view>
			</view>
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
				
			};
		},
		methods:{
			follow(id){
				
			}
		},
		computed:{

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
							margin-top: 29px;
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
				overflow: auto;
				.frameL{
					width: 100%;
					.titleL{
						font-size:30px;
						font-family:Microsoft YaHei;
						font-weight:bold;
						color:rgba(255,255,255,1);
						line-height:42px;
					}
					.frameS{
						width: $main-width;
						margin: auto;
						display: flex;
						justify-content: space-between;
						.picL{
							width: 339px;
							height: 424px;
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
						}
					}
					.text{
						font-size:14px;
						font-family:Microsoft YaHei;
						font-weight:400;
						line-height:24px;
					}
				}
				.frame1{
					background-color: rgba(120,109,227,1);
					height: 900px;
					.left{
						margin-top: 165px;
						.qrCode{
							width: 177px;
							height: 173px;
							margin-top: 15px;
							margin-bottom: 19px;
						}
						.text{
							margin-top: 21px;
							color: #fff;
						}
						.buttonFrame{
							margin-top: 25px;
							.button{
								margin-right: 10px;
							}
						}
					}
					.picL{
						margin-top: 215px;
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
							height: 90px;
							width:90px;
							margin: auto;
						}
						.titleM{
							font-size:24px;
							font-family:Microsoft YaHei;
							font-weight:bold;
							color:rgba(255,255,255,1);
							text-align: center;
							margin-top: 32px;
						}
						.text{
							color: #F4F5F9;
							margin-top: 20px;
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
							color: rgba(49,49,49,1);
						}
						.text{
							color: rgba(102,102,102,1);
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
							color: #313131 !important;
						}
						.text{
							color:#666666;
							margin-top: 29px;
							margin-bottom: 53px;
						}
						.point{
							display: flex;
							margin-bottom: 15px;
							align-items: center;
							.picXS{
								width: 30px;
								height: 30px;
								margin-right: 23px;
							}
							.text{
								margin: 0;
							}
						}
						.buttonFrame{
							margin-top: 67px;
							.button{
								margin-right: 10px;
							}
						}
					}
					.picL{
						margin-top: 110px;
					}
				}
				.frame4{
					height: 640px;
					background-color: #FBB03B;
					.picL{
						margin-top: 108px;
					}
					.left{
						margin-top: 107px;
						width:519px;
						.text{
							color: #fff;
							margin-top: 29px;
						}
						.buttonFrame{
							margin-top: 64px;
							.button{
								margin-right: 10px;
							}
						}
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
					height: 360px;
					background-color: #786DE4;
					.titleL{
						text-align: center;
						padding-top: 96px;
						color: #fff;
					}
					.text{
						text-align: center;
						margin-top: 20px;
						color: #fff;
					}
					.buttonFrame{
						margin: auto;
						margin-top: 45px;
						width: 450px;
						justify-content: space-between;
						.button{
							margin: 0;
						}
					}
				}
				.frame7{
					height: 800px;
					background-color: #fff;
					.titleL{
						text-align: center;
						padding-top: 88px;
						color: #313131;
					}
					.text{
						text-align: center;
						margin-top: 20px;
						color: #666666;
					}
					.left{
						margin-top: 92px;
						.list{
							display: flex;
							margin-bottom: 40px;
							.icon{
								width:60px;
								height:60px;
								margin-right: 19px;
							}
							.title{
								font-size:20px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(49,49,49,1);
								margin-bottom: 14px;
							}
							.subTitle{
								font-size:14px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(102,102,102,1);
							}
							.qrCode2{
								width:201px;
								height:224px;
							}
						}
					}
					.right{
						margin-top: 89px;
						width:560px;
						.label{
							position: absolute;
							top:19px;
							left: 19px;
							font-size:12px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(102,102,102,1);
							.red{
								color: #F91F1F;
							}
						}
						.inputFrame{
							width:100%;
							background:rgba(244,245,249,1);
							border-radius:10px;
							margin-bottom: 10px;
							position: relative;
							input{
								width: 100%;
								height: 70px;
								text-indent: 90px;
								padding: 10px;
							}
							textarea{
								width: 100%;
								height: 120px;
								text-indent: 90px;
								padding: 10px;
							}
						}
						.button{
							width:560px;
							height:70px;
							background:rgba(120,109,228,1);
							border-radius:10px;
							font-size:16px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(255,255,255,1);
							text-align: center;
							align-items: center;
							line-height: 70px;
						}
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
