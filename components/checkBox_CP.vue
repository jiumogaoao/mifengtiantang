<template>
	<view :class="destop?'destopCP':'phoneCP'" @click="c">
		<!-- #ifdef H5 -->
		<view class="checkboxCP nuskinIcon" v-if="destop&&!checked">&#xe65e;</view>
		<view class="checkboxCP nuskinIcon checked" v-if="destop&&checked">&#xe725;</view>
		<!-- #endif -->
		<view class="checkboxCP nuskinIcon" v-if="!destop&&!checked">&#xea2a;</view>
		<view class="checkboxCP nuskinIcon checked" v-if="!destop&&checked">&#xe62e;</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		props:['checked'],
		data() {
			return {
				
			};
		},
		methods:{
			c(){
				this.$emit("click")
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.checkboxCP{
			font-size: 10rpx;
			color: $main-gray;
		}
		.checkboxCP.checked{
			color: $main-hl;
		}
	}
	/* #endif */
	.phoneCP{
		.checkboxCP{
			font-size: 50rpx;
			color: $main-gray;
		}
		.checkboxCP.checked{
			color: $main-hl;
		}
	}
</style>
