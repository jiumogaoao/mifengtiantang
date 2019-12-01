<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<view class="headerCPFrame" v-if="destop">
			<view class="headerCP">
				<image :src="imgPath+'indexLogo.jpg'" id="logo"></image>
				<view class="right">
					<view class="top">
						<view class="topLeft">
							<view class="place"><image :src="imgPath+'indexLandmarkIcon.png'" id="place"></image>{{place}}</view>
							<view class="nav1" v-for="(v,i) in head_link" :key="'nav1'+i" @click="go(v.link)">{{v.nav}}</view>
						</view>
						<view class="topRight">
							<image :src="imgPath+'indexSearchIcon.png'" id="search" @click="go('/pages/search/search')"></image>
							<image :src="imgPath+'indexUserIcon.png'" id="user" @click="go('/pages/myOrder/myOrder')"></image>
							<div class="goShoppingCar">购物车
								<view class="shoppingCarList">
									<view class="carTop">
										<view class="bigTitle">我的购物车</view>
										<view class="count">数量</view>
										<view class="price">零售价格</view>
									</view>
									<view class="carList">
										<view class="carPoint">
											<view class="bigTitle">
												<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
												<view class="title">活水深层润泽面膜</view>
											</view>
											<view class="count">1</view>
											<view class="price">370</view>
										</view>
										<view class="carPoint">
											<view class="bigTitle">
												<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
												<view class="title">活水深层润泽面膜</view>
											</view>
											<view class="count">1</view>
											<view class="price">370</view>
										</view>
									</view>
									<view class="carBottom">
										<view class="bigTitle">共2件商品</view>
										<view class="price">合计 ￥610</view>
									</view>
									<view class="carGo" @click="go('/pages/shoppingCar/shoppingCar')"><text class="nuskinIcon">&#xe6d5;</text>查看购物车</view>
								</view>
							</div>
						</view>
					</view>
					<view class="bottom">
						<view class="nav2" v-for="(v,i) in navigation" @mouseover="changeNavHl(i)" :key="'nav2'+i" @click="navClick(v.link)">{{v.nav}}</view>
						<view class="nav2ChildFrame" v-if="navHl || navHl===0">
							<view class="nav2Child" v-if="navigation[navHl].child">
								<view class="secondNav" v-for="(v,i) in navigation[navHl].child" :key="'nav3'+i">
									<view class="secondNavName" @click="navClick(v.link)">{{v.nav}}</view>
									<view class="thirdNav" v-if="v.child" v-for="(n,o) in v.child" @click="go(n.link)" :key="'nav4'+o">{{n.nav}}</view>
								</view>
							</view>
							<view class="showAll" @click="go('/pages/shelf/shelf')">查看所有商品></view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<!-- #endif -->
		<view class="headerCP" v-if="!destop">
			<view class="item" @click="go('/pages/index/index')">
				<!-- <image class="icon" :src="footNav=='index'?(imgPath+'tab-home-current.png'):(imgPath+'tab-home.png')"></image> -->
				<view class="title">首页</view>
			</view>
			<view class="line"></view>
			<view class="item" @click="go('/pages/type/type')">
				<!-- <image class="icon" :src="footNav=='type'?(imgPath+'tab-cate-current.png'):(imgPath+'tab-cate.png')"></image> -->
				<view class="title">分类</view>
			</view>
			<view class="line"></view>
			<view class="item" @click="go('/pages/shoppingCar/shoppingCar')">
				<!-- <image class="icon" :src="footNav=='shoppingCar'?(imgPath+'tab-cart-current.png'):(imgPath+'tab-cart.png')"></image> -->
				<view class="title">购物车</view>
			</view>
			<view class="line"></view>
			<view class="item" @click="go('/pages/mine/mine')">
				<!-- <image class="icon" :src="footNav=='mine'?(imgPath+'tab-my-current.png'):(imgPath+'tab-my.png')"></image> -->
				<view class="title">会员中心</view>
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
				navHl:null
			};
		},
		methods:{
			changeNavHl(index){
				this.navHl = index;
			},
			navClick(link){
				if(link){
					this.go(link)
				}
			}
		},
		computed:{
			topNav(){
				return this.$store.state.rootST.topNav
			},
			secondNav(){
				return this.$store.state.rootST.secondNav
			},
			place(){
				return this.$store.state.rootST.place
			},
			footNav(){
				return this.$store.state.rootST.footNav
			},
			head_link(){
				return this.$store.state.indexST.head_link
			},
			navigation(){
				return this.$store.state.indexST.navigation
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.headerCPFrame{
			position: fixed;
			top:0;
			left:0;
			width:100%;
			background-color: #fff;
			z-index:10;
		}
		.headerCP{
			@include frame-width;
			height:130px;
			display: flex;
			justify-content:space-between;
			align-items: center;
			margin: auto;
			position: relative;
		}
		#logo{
			width: 112px;
			height:30px;
			flex-shrink: 0;
		}
		.right{
			width:990px;
			display: flex;
			flex-direction: column;
			align-items: end;
		}
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-shrink: 0;
			width:100%;
		}
		.topLeft{
			display: flex;
			align-items: center;
			flex-shrink: 0;
		}
		.nav1{
			color:#999;
			font-size: 12px;
			width:120px;
			height:18px;
			line-height: 18px;
			text-align: center;
			border-right:1px solid #999;
		}
		.place{
			font-size: 12px;
			color:#999;
			display: flex;
			align-items: center;
		}
		#place{
			width:15px;
			height:17px;
			margin-right: 10px;
		}
		.topRight{
			display: flex;
			justify-content: end;
			align-items: center;
			flex-shrink: 0;
		}
		#search{
			width:20px;
			height:20px;
			margin-right: 20px;
		}
		#user{
			width:19px;
			height:21px;
			margin-right: 80px;
		}
		.goShoppingCar{
			width:144px;
			height:32px;
			background-color: #008AB0;
			color:#fff;
			font-size: 12px;
			text-align: center;
			line-height: 32px;
			position: relative;
			.shoppingCarList{
				position: absolute;
				top:31px;
				right: 0;
				width: 636px;
				padding: 37px;
				background-color: #fff;
				z-index: 3;
				display: none;
				.carTop{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.bigTitle{
						font-size: 18px;
						width:300px;
						text-align: left;
					}
					.count{
						width:30px;
						font-size: 13px;
					}
					.price{
						flex-grow: 1;
						font-size: 13px;
					}
				}
				.carList{
					margin-top: 14px;
					margin-bottom: 14px;
					width: 100%;
					border-bottom: 1px solid $main-gray;
					border-top: 1px solid $main-gray;
					padding-bottom: 30px;
					.carPoint{
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 30px;
						.bigTitle{
							width:300px;
							display: flex;
							align-items: center;
							image{
								width:78px;
								height:78px;
								border: 1px solid $main-gray;
							}
							.title{
								font-size: 14px;
								margin-left: 20px;
							}
						}
						.count{
							width:30px;
							font-size: 13px;
						}
						.price{
							flex-grow: 1;
							font-size: 13px;
						}
					}
				}
				.carBottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20px;
					.price{
						font-size: 15px;
					}
					.bigTitle{
						font-size: 16px;
					}
				}
				.carGo{
					width: 146px;
					height: 35px;
					background-color: $main-hl;
					color: #fff;
					text-align: center;
					line-height: 35px;
					font-size: 12px;
					margin-top: 26px;
					margin-left: 416px;
					.nuskinIcon{
						font-size: 18px;
					}
				}
			}
		}
		.goShoppingCar:hover .shoppingCarList{
			display: block;
		}
		.bottom{
			display: flex;
			width:100%;
			margin-top: 35px;
			position: relative;
		}
		.nav2{
			flex-grow: 1;
			font-size: 12px;
			color:#212529;
		}
		.nav2ChildFrame{
			@include frame-width;
			background-color: #fff;
			position: absolute;
			top:12px;
			left:-210px;
			display: none;
			padding: 30px;
		}
		.bottom:hover .nav2ChildFrame{
			display: block;
		}
		.nav2Child{
			width:100%;
			display: flex;
		}
		.secondNav{
			margin-right: 60px;
		}
		.secondNavName{
			font-size: 16px;
			line-height: 60px;
			color:#333;
		}
		.thirdNav{
			font-size: 12px;
			color:#4a4a4a;
		}
		.showAll{
			font-size: 12px;
			text-align: center;
		}
	}
	/* #endif */
	.phoneCP{
		.headerCP{
			width:750rpx;
			height:85rpx;
			background-color: #fff;
			border-top:1px solid rgba(255, 255, 255, 0.33);
			z-index: 3;
			position: fixed;
			bottom:0;
			left:0;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// .icon{
				// 	width:35rpx;
				// 	height:35rpx;
				// }
				.title{
					font-size: 23rpx;
					color:#999;
				}
			}
			.line{
				width: 1px;
				height: 10px;
				background-color: #999;
			}
			.hl{
				.title{
					color:rgb(4, 144, 183)
				}
			}
		}
	}
</style>
