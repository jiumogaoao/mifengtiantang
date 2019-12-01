<template>
	<view class="mineNavCP">
		<view class="title">交易管理</view>
		<view :class="{item:1,hl:nav=='myOrder'}" @click="go('/pages/myOrder/myOrder')">我的订单</view>
		<view :class="{item:1,hl:nav=='afterSale'}" @click="go('/pages/afterSale/afterSale')">售后服务查询</view>
		<view :class="{item:1,hl:nav=='myCoupon'}" @click="go('/pages/myCoupon/myCoupon')">我的优惠券</view>
		<view :class="{item:1,hl:nav=='myPlace'}" @click="go('/pages/myPlace/myPlace')">收货地址</view>
		<view :class="{item:1,hl:nav=='amout'}" @click="go('/pages/amout/amout')">年度购买额度</view>
		<view class="title">交易管理</view>
		<view :class="{item:1,hl:nav=='myLevel'}" @click="go('/pages/myLevel/myLevel')">我的身份</view>
		<view :class="{item:1,hl:nav=='myShare'}" @click="go('/pages/myShare/myShare')">我的分享</view>
		<view :class="{item:1,hl:nav=='myIncome'}" @click="go('/pages/myIncome/myIncome')">我的收入</view>
		<view :class="{item:1,hl:nav=='myCard'}" @click="go('/pages/myCard/myCard')">我的银行卡</view>
		<view class="title">我的账号</view>
		<view :class="{item:1,hl:nav=='myInfo'}" @click="go('/pages/myInfo/myInfo')">个人信息</view>
		<view :class="{item:1,hl:nav=='myQrcode'}" @click="go('/pages/myQrcode/myQrcode')">我的二维码</view>
		<view :class="{item:1,hl:nav=='myNotice'}" @click="go('/pages/myNotice/myNotice')">我的消息</view>
		<view :class="{item:1,hl:nav=='myFollow'}" @click="go('/pages/myFollow/myFollow')">我的收藏</view>
		<view :class="{item:1,hl:nav=='myIntegral'}" @click="go('/pages/myIntegral/myIntegral')">我的积分</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		computed:{
			nav(){return this.$store.state.rootST.myPage}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.mineNavCP{
		width:180px;
		flex-grow: 0;
		flex-shrink: 0;
	}
	.title{
		font-size: 16px;
		font-weight: bold;
		color: #000;
		margin-bottom: 20px;
	}
	.item{
		color: #333333;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.item.hl{
		color:#008ab0
	}
</style>
