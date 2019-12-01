<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<view class="footer_CP" v-if="destop">
			<view class="centerFrame">
				<view class="left">
					<view class="list" v-for="(v,i) in footer_link" :key="'foot'+i">
						<view class="title">{{v.nav}}</view>
						<view class="item" v-for="(n,o) in v.child" v-if="v.child" @click="go(n.link)">{{n.nav}}</view>
					</view>
				</view>
				<view class="right">
					<view class="title">关注我们</view>
					<view class="followFrame">
						<image class="followItem" :src="imgPath+'weibo.png'"></image>
						<image class="followItem" :src="imgPath+'weixin.png'"></image>
					</view>
					<view class="line"></view>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="footer_CP" v-if="!destop">
			<view class="top">
				<view class="title">关注我们</view>
				<view class="iconFrame">
					<image class="item" :src="imgPath+'xinlang.png'"></image>
					<image class="item" :src="imgPath+'weixin.png'"></image>
					<image class="item" :src="imgPath+'icon4.png'"></image>
				</view>
			</view>
			<view class="bottom">
				<view class="list">
					<view class="item" v-for="(v,i) in info_link" :key="'link'+i" @click="go(v.link)">{{v.nav}}</view>
				</view>
				<view class="list">
					<view class="item">粤ICP备20181025001</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		data() {
			return {
				
			};
		},
		computed:{
			footer_link(){
				return this.$store.state.indexST.footer_link
			},
			info_link(){
				return this.$store.state.indexST.info_link
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		width:100%;
		.footer_CP{
		    background: url($oss-destop+'footer_bg.png') no-repeat center center;
		    width: 100%;
		    height: 328px;
			margin-top: 100px;
	}
	.centerFrame{
		@include frame-width;
		margin:auto;
		display: flex;
		justify-content: space-between;
	}
	.left{
		display: flex;
		padding-top: 89px;
	}
	.right{
		padding-top: 89px;
	}
	.title{
		font-size: 20px;
		    line-height: 20px;
		    margin-bottom: 10px;
		    color: #fff;
			font-weight: 700;
	}
	.item{
		margin-top: 34px;
		    font-size: 14px;
		    line-height: 4px;
			color: #fff;
	}
	.followFrame{
		margin-top: 34px;
		display: flex;
	}
	.followItem{
		margin-right: 100px;
		    width: 45px;
		    height: 45px;
	}
	.list{
		margin-right:80px;
	}
	.line{
		width: 330px;
		    height: 3px;
		    background-color: #676767;
		    margin-top: 30px;
		    margin-left: 6px;
	}
	}
	/* #endif */
	.phoneCP{
		.footer_CP{
			margin-top: 40rpx;
			.top{
				width:750rpx;
				height:380rpx;
				background: #6a6d76;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.title{
					color: #fff;
					font-size: 28rpx;
				}
				.iconFrame{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 63rpx;
					width:386rpx;
					.item{
						width: 96rpx;
						height:96rpx;
					}
				}
			}
			.bottom{
				width:750rpx;
				.list{
					margin-top: 75rpx;
					display: flex;
					align-items: center;
					padding-left: 50rpx;
					.item{
						color: #ddd;
						font-size: 22rpx;
						margin-right: 100rpx;
					}
				}
			}
		}
	}
</style>
