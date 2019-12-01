<template>
	<view class="modalCP">
		<view class="frame">
			<view class="top">
				<view class="title">{{title}}</view>
				<view class="nuskinIcon" @click="c">&#xe600;</view>
			</view>
			<view class="center">
				<slot></slot>
			</view>
			<view class="bottom">
				<view class="button" @click="c">{{cancelText}}</view>
				<view class="button hl" @click="s">{{confirmText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title','confirmText','cancelText'],
		data() {
			return {
				
			};
		},
		methods:{
			c(){
				this.$emit('cancel')
			},
			s(){
				this.$emit('submit')
			}
		}
	}
</script>

<style lang="scss">
	.modalCP{
		position: fixed;
		top:0;
		left: 0;
		right:0;
		bottom:0;
		background-color: rgba(0,0,0,0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
		.frame{
			width: 800px;
			height: 616px;
			background-color: #fff;
			border-radius: 10px;
			padding: 65px;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			.top{
				flex-shrink: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 16px;
					font-weight: bold;
				}
			}
			.center{
				flex-grow: 1;
				overflow: auto;
				margin-top: 48px;
			}
			.bottom{
				flex-shrink: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.button{
					    width: 240px;
					    height: 58px;
					    border-radius: 30px;
					    font-size: 18px;
					    outline: none;
						font-weight: 400;
						    text-align: center;
						    white-space: nowrap;
						line-height: 56px;
					    background-color: #fff;
					    color: #008ab0;
					    border: 1px solid #008ab0;
				}
				.button.hl{
					background-color: #008ab0;
					    color: #fff;
					    border: 1px solid #008ab0;
				}
			}
		}
	}
</style>
