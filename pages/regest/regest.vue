<template>
	<view class="page">
		<image class="bg" src="/static/shareBG.png"></image>
		<view class="regestFrame">
			<view class="title">手机注册</view>
			<view class="code">邀请码<text>5D4F8T</text></view>
			<view class="inputList">
				<view class="inputPoint">
					<input placeholder="请输入手机号"/>
				</view>
				<view class="inputPoint">
					<input placeholder="请输入6-16位密码"/>
					<image class="icon" src="/static/regestIcon0.png"></image>
				</view>
				<view class="inputPoint">
					<input placeholder="请输入验证码"/>
					<view class="getCode">获取验证码</view>
				</view>
			</view>
			<view class="dsc">
				<image class="icon" src="/static/regestIcon2.png"></image>
				<view class="text">我已阅读并同意<text>《用户协议》</text>与<text>《隐私政策》</text></view>
			</view>
			<view class="regest" @click="regest">注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			regest(){
				uni.navigateTo({
					url:'/pages/download/download'
				})
			}
		}
	}
</script>

<style lang="scss">
	.page{
		position: relative;
		height: 100%;
		background-color: #ffae30;
		.bg{
			width:750rpx;
			height:1333rpx;
		}
		.regestFrame{
			position: absolute;
			top:633rpx;
			left:67rpx;
			width:611rpx;
			background-color: #fff;
			padding: 29rpx 48rpx;
			border-radius:28rpx;
			.title{
				font-size:33rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(34,34,34,1);
				text-align: center;
			}
			.code{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(153,153,153,1);
				text-align: center;
				margin-top: 19rpx;
				.text{
					color: #FFAE6D;
				}
			}
			.inputList{
				width: 100%;
				margin-top: 50rpx;
				.inputPoint{
					width:100%;
					height: 83rpx;
					display: flex;
					align-items: center;
					border-bottom: 1px solid rgba(162,162,162,1);
					input{
						height: 83rpx;
						flex-grow: 1;
					}
					.icon{
						width:35rpx;
						height: 35rpx;
						flex-shrink: 0;
						margin-right: 12rpx;
					}
					.getCode{
						font-size:21rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(34,34,34,1);
						margin-right: 12rpx;
					}
				}
			}
			.dsc{
				margin: auto;
				margin-top: 44rpx;
				display: flex;
				.icon{
					width:35rpx;
					height:35rpx;
					margin-right: 7rpx;
				}
				.text{
					font-size:21rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:#D9D9D9;
					text{
						color:#666666;
					}
				}
			}
			.regest{
				width:242rpx;
				height:63rpx;
				border:1px solid rgba(162,162,162,1);
				border-radius:31rpx;
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(34,34,34,1);
				margin: auto;
				margin-top: 84rpx;
				line-height: 63rpx;
				text-align: center;
			}
		}
	}
</style>
