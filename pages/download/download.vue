<template>
	<view class="page">
		<image class="bg" src="/static/shareBG.png"></image>
		<view class="regestFrame">
			<view class="title">- 注册成功 -</view>
			<image class="button" src="/static/successDownload0.png"></image>
			<image class="button" src="/static/successDownload1.png" @click="download"></image>
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
			download(){
				window.location.href='itms-services://?action=download-manifest&amp;url=https://www.paradisebee.com/static/mifengtiantang.plist';
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
