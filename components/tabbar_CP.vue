<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<view class="tabbarCP">
			<view :class="{item:1,hl:v.id==hl}" v-for="(v,i) in list" :key="v.id" @click="c(v.id)">{{v.name}}<view class="line" v-if="hl == v.id"></view></view>
		</view>
	</view>
	
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		props:['list','hl'],
		mixins: [allComponent],
		data() {
			return {
				
			};
		},
		methods:{
			c(id){
				this.$emit('change',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.tabbarCP{
			height: 40px;
			border-bottom: 1px solid #f5f5f5;
			width:100%;
			display: flex;
			align-items: center;
		}
		.item{
			margin-right: 45px;
			cursor: pointer;
			color: #000;
			font-size: 14px;
			position: relative;
		}
		.line{
			display: block;
			position: absolute;
			bottom:-13px;
			    left: 5%;
			    width: 90%;
			height:2px;
			background-color: #008ab0;
		}
	}
	/* #endif */
	.phoneCP{
		width:100%;
		.tabbarCP{
			height: 91rpx;
			border-bottom: 1px solid #f5f5f5;
			width:100%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			background-color: #fff;
		}
		.item{
			align-items: center;
			    height: 100%;
				line-height: 91rpx;
			    font-size: 26rpx;
			    color: #333;
			position: relative;
		}
		.line{
			display: block;
			position: absolute;
			    left: 50%;
			    bottom: 0;
			    transform: translateX(-50%);
			    width: 120rpx;
			    height: 0;
			    border-bottom: 4px solid #008ab0;
		}
		.hl{
			color:#008ab0;
		}
	}
</style>
