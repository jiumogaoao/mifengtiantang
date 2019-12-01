<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<view class="couponCP" v-if="destop">
			<view class="top">
				￥<span class="big">100</span> 满￥1000可用
			</view>
			<view class="bottom">
				<view class="title">满1000元立减100元</view>
				<view class="item">券编号：00000305</view>
				<view class="item">使用范围：全部产品可用</view>
				<view class="item">有效期：2019.10.21 - 2019.11.19</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="couponCP" v-if="!destop">
			<view class="left">
				<view class="price"><text style="font-size: 20rpx;">￥</text>100</view>
				<view class="dsc">满￥1000可用</view>
			</view>
			<image :src="imgPath+'couponborder.png'"></image>
			<view class="right">
				<view class="title">满1000元立减100元</view>
				<view class="text">券编号：00000305</view>
				<view class="text">适用范围：全部产品可用</view>
				<view class="text">有效期：2019.10.24-2019.11.19</view>
			</view>
			<radioCP class="radioCP" v-if="type==1"/>
			<view class="use" v-if="type==2">立即使用</view>
		</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	import radioCP from "@/components/radio_CP.vue"
	export default {
		mixins: [allComponent],
		props:["type"],
		components:{radioCP},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.couponCP{
			width: 342px;
			    height: 198px;
			    border-radius: 10px;
			    background-color: #fff;
			    margin: 10px;
		}
		.top{
			width: 340px;
			    height: 86px;
			    border-top-right-radius: 8px;
			    border-top-left-radius: 8px;
			    background-color: #33a1c0;
			    position: relative;
			    line-height: 86px;
			    font-size: 16px;
			    color: #fff;
			    font-weight: bold;
			    text-align: center;
		}
		.big{
			font-size: 40px;
		}
		.bottom{
			padding: 11px 22px;
		}
		.title{
			font-size: 14px;
			    color: #000000;
				font-weight: bold;
		}
		.item{
			font-size: 14px;
			    color: #808080;
			    line-height: 22px;
		}
	}
	/* #endif */
	.phoneCP{
		.couponCP{
			width: 670rpx;
			height:209rpx;
			margin: auto;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			border-radius: 10rpx;
			position: relative;
			.left{
				width:190rpx;
				flex-shrink: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				background-color: #33a1c0;
				.price{
					color: #fff;
					font-size: 42rpx;
				}
				.dsc{
					color: #fff;
					font-size: 22rpx;
					margin-top: 28rpx;
				}
			}
			image{
				height: 100%;
				width: 6rpx;
				flex-shrink: 0;
			}
			.right{
				flex-grow: 1;
				padding: 30rpx;
				.title{
					font-size: 27rpx;
					margin-bottom: 37rpx;
				}
				.text{
					font-size: 20rpx;
					color: $main-gray-deep;
					margin-bottom: 10rpx;
				}
			}
			.radioCP{
				position:absolute;
				top:30rpx;
				right:30rpx;
			}
			.use{
				width: 125rpx;
				height:41rpx;
				border-radius: 41rpx;
				border:1px solid $main-hl;
				color: $main-hl;
				font-size: 20rpx;
				text-align: center;
				line-height: 39rpx;
				position:absolute;
				top:30rpx;
				right:30rpx;
			}
		}
	}
</style>
