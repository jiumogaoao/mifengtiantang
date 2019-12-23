<template>
	<view class="page">
		<view style="position: fixed;top:0;left:0;right:0;bottom:0;background-color: #fff;z-index:999999;" v-if="isWX">暂不支持微信访问，请点击右上角按钮，从外部浏览器打开</view>
		<image class="bg" src="/static/shareBG.png"></image>
		<view class="regestFrame">
			<view class="title">- 注册成功 -</view>
			<image class="button" src="/static/successDownload0.png" @click="downloadAOS"></image>
			<image class="button" src="/static/successDownload1.png" @click="downloadIOS"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isWechart:false
			};
		},
		onShow(){

		},
		methods:{
			downloadAOS(){
				window.location.href='https://www.paradisebee.com/mifengtiantang.apk';
			},
			downloadIOS(){
				window.location.href='https://apps.apple.com/cn/app/%E8%9C%9C%E8%9C%82%E5%A4%A9%E5%A0%82/id1492021582';
			}
		},
		computed:{
			isWX(){
				return this.$store.state.rootST.isWX
			},
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
				margin-bottom: 38rpx;
			}
			.button{
				width:332rpx;
				height:151rpx;
				margin: auto;
			}
		}
	}
</style>
