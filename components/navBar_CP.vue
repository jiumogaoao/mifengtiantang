<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<view class="navBar">
			<view class="left">
				<slot name="left"></slot>
			</view>
			<view class="center">
				<slot name="center"></slot>
			</view>
			<view class="right">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
	
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		props:[],
		mixins: [allComponent],
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{

	}
	/* #endif */
	.phoneCP{
		.navBar{
			width:750rpx;
			height:55px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			top:0;
			left:0;
			background-color: #fff;
			z-index: 3;
			.left{
				width:250rpx;
				display: flex;
				align-items: center;
				font-size: 28rpx;
				padding-left: 52rpx;
			}
			.center{
				flex-grow: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 33rpx;
			}
			.right{
				display: flex;
				align-items: center;
				width:250rpx;
				justify-content: flex-end;
				font-size: 28rpx;
				padding-right: 52rpx;
			}
		}
	}
</style>