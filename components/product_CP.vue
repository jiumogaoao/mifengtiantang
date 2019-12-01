<template>
	<view :class="destop?'destopCP':'phoneCP'" @click="c">
		<!-- #ifdef H5 -->
		<view class="productCP" v-if="destop">
			<image :src="img" class="img"></image>
			<view class="brand">{{band}}</view>
			<view class="title">{{name}}</view>
			<view class="taxes">预计税费：￥{{taxes}}</view>
			<view class="price">零售价：<block style="font-size: 20px;">￥{{price}}</block></view>
			<image class="follow" :src="imgPath+'favorite-full-love.png'" v-if="follow" @click.stop="f"></image>
			<image class="follow" :src="imgPath+'sellWellHIcon.png'" v-else @click.stop="f"></image>
			<image class="shoppingCar" :src="imgPath+'caricon-blue.png'"></image>
		</view>
		<!-- #endif -->
		<view :class="{productCP:1,integralProduct:type==1}" v-if="!destop"  @click="c">
			<image :src="img" class="img"></image>
			<view class="brand">{{band}}</view>
			<view class="title">{{name}}</view>
			<block v-if="type==1">
				<view class="integralMallList">
					<radioCP/>
					<view class="text">纯积分：</view>
					<view class="number">3600</view>
				</view>
				<view class="integralMallList">
					<radioCP/>
					<view class="text">纯现金：</view>
					<view class="number">￥200.00</view>
				</view>
				<view class="integralMallList">
					<radioCP/>
					<view class="text">现+积：</view>
					<view class="number">￥200.00+1500</view>
				</view>
			</block>
			<block v-else>
				<view class="saleFrame">
					<view class="sale">包邮</view>
					<view class="sale">促销</view>
				</view>
				<view class="taxes">预计税费：￥{{taxes}}</view>
				<view class="price">零售价：<block style="font-size: 20px;">￥{{price}}</block></view>
			</block>
			<view :class="{follow:1,nuskinIcon:1,hl:(follow?1:0)}" @click.stop="f">&#xe64e;</view>
			<image class="shoppingCar" :src="imgPath+'tab-cart-current.png'"></image>
		</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	import radioCP from "@/components/radio_CP"
	export default {
		props:['follow','img','band','name','taxes','price','id','type'],
		components:{radioCP},
		mixins: [allComponent],
		data() {
			return {
				
			};
		},
		methods: {
			c(){
				this.$emit('click')
			},
			f(){
				this.$emit('f')
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef H5 */
	.destopCP{
		.productCP{
			width: 274px;
			    height: 468px;
			    border: 1px solid #f0e9de;
			    position: relative;
			    background-color: #fff;
			    margin-bottom: 25px;
			    cursor: pointer;
		}
		.img{
			width:272px;
			height:272px;
		}
		.brand{
			font-size: 14px;
			color: #808080;
			line-height: 14px;
			display: block;
			margin-left: 19px;
		}
		.title{
			font-size: 16px;
			    color: #333333;
			    line-height: 24px;
			    margin-bottom: 10px;
			    height: 48px;
				margin-left: 19px;
		}
		.taxes{
			font-size: 14px;
			    line-height: 30px;
			    color: #c2c2c2;
			    display: inline-block;
				margin-left: 19px;
		}
		.price{
			line-height: 30px;
		    color: #37b0c9;
		    font-size: 14px;
			margin-left: 19px;
			}
		.shoppingCar{
			width:24px;
			height:25px;
			position: absolute;
			right: 19px;
			bottom: 30px;
			cursor: pointer;
		}
		.follow{
			width:20px;
			height:18px;
			position: absolute;
			right: 19px;
			top: 11px;
			cursor: pointer;
		}
	}
	/* #endif */
	.phoneCP{
		.productCP{
			width: 340rpx;
			    height: 620rpx;
			    border: 1px solid #ddd;
			    position: relative;
			    background-color: #fff;
			    margin-bottom: 42rpx;
			    cursor: pointer;
			.img{
				width:100%;
				height:328rpx;
			}
			.brand{
				display: block;
				padding: 0 18rpx;
				color: $main-gray-deep;
				font-size: 22rpx;
				// text-align: center;
				margin-top: 25rpx;
			}
			.title{
				    padding: 0 18rpx;
				    margin-top: 22rpx;
				    font-size: 26rpx;
				    line-height: 1.5;
					// text-align: center;
				    height: 70rpx;
				    overflow: hidden;
			}
			.saleFrame{
				padding: 0 18rpx;
				height: 30rpx;
				display: flex;
				.sale{
					width:92rpx;
					height: 30rpx;
					border: 1px solid #ff69b0;
					color: #ff69b0;
					font-size: 21rpx;
					text-align: center;
					line-height: 24rpx;
					border-radius: 30rpx;
					margin-right: 20rpx;
				}
			}
			.taxes{
				font-size: 20rpx;
				padding: 0 18rpx;
				margin-top: 16rpx;
				color: $main-gray-deep;
			}
			.price{
				font-size: 24rpx;
				    color: $main-hl;
				    font-size: 34rpx;
				    padding: 0 18rpx;
					margin-top: 12rpx;
					font-weight: bolder;
				}
			.follow{
				color: $main-gray;
				position: absolute;
				right: 39rpx;
				top: 43rpx;
				cursor: pointer;
				font-size: 30rpx;
			}
			.follow.hl{
				color: $main-hl;
			}
			.shoppingCar{
				width:40rpx;
				height:40rpx;
				position: absolute;
				right: 20rpx;
				bottom: 30rpx;
				cursor: pointer;
			}
			.integralMallList{
				padding: 0 18rpx;
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				.text{
					font-size: 22rpx;
					color: $main-gray;
					margin-left: 10rpx;
				}
				.number{
					font-size: 22rpx;
					// margin-left: 10rpx;
				}
			}
		}
		.productCP.integralProduct{
			height: 720rpx;
		}
	}
</style>
