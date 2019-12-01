<template>
	<view :class="destop?'destopCP':'phoneCP'" @click="c">
		<view class="productSimpleCP">
			<image :src="img" class="img"></image>
			<view class="title">{{name}}</view>
			<view class="price">￥{{price}}</view>
			<image class="follow" :src="imgPath+'favorite-full-love.png'" v-if="follow" @click="f"></image>
			<image class="follow" :src="imgPath+'sellWellHIcon.png'" v-else @click="f"></image>
		</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		props:['follow','img','name','price','pId'],
		mixins: [allComponent],
		methods: {
			c(){
				this.$emit('click')
			},
			f(){
				this.$emit('follow')
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.productSimpleCP{
			width: 275px;
			height: 375px;
			border: 1px solid #F0E9DE;
			position: relative;
		}
		.img{
			width: 273px;
			height: 270px;
		}
		.title{
			padding-left: 20px;
			padding-right: 20px;
			margin-top: 15px;
			text-align: center;
			font-size: 16px;
			font-weight: 500;
		}
		.price{
			text-align: center;
			margin-top: 5px;
			font-weight: bold;
			font-size: 16px;
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
		.productSimpleCP{
			width: 654rpx;
			height: 876rpx;
			border: 1px solid #F0E9DE;
			position: relative;
			.img{
				width: 100%;
				height: 602rpx;
			}
			.title{
				text-align: center;
				margin-top: 80rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #191919;
			}
			.price{
				margin-top: 87rpx;
				    text-align: center;
				    font-size: 30rpx;
				    color: #191919;
					font-weight: 500;
			}
			.follow{
				width:45rpx;
				height:39rpx;
				position: absolute;
				    top: 16rpx;
				    right: 22rpx;
			}
		}
	}
</style>
