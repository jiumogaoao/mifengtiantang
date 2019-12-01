<template>
	<view :class="destop?'destopCP':'phoneCP'">
	<!-- #ifdef H5 -->
	<image class="radioCP" :src="imgPath+'radio.png'" v-if="destop"></image>
	<!-- #endif -->
	<view class="radioCP nuskinIcon" v-if="!destop&&!checked">&#xea2a;</view>
	<view class="radioCP nuskinIcon checked" v-if="!destop&&checked">&#xe62e;</view>
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
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
	.radioCP{
		width:12px;
		height:12px;
	}
	}
	/* #endif */
	.phoneCP{
		.radioCP{
			font-size: 30rpx;
			color: $main-gray;
		}
		.radioCP.checked{
			color: $main-hl;
		}
	}
</style>
