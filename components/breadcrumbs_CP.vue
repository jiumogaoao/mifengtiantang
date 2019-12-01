<template>
		<view class="breadcrumbs">
			<view class="item">首页</view>
			<view class="deg">></view>
			<view class="item">一级导航</view>
			<view class="deg">></view>
			<view class="item">二级导航</view>
		</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.breadcrumbs{
		@include frame-width;
		margin: auto;
		display: flex;
	}
	.item{
		cursor: pointer;
	}
	.deg,.item{
		font-size: 14px;
		color:#212529;
		margin-right: 10px;
	}
</style>
