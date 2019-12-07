<template>
	<view class="page">
		<image class="bg" src="/static/shareBG.png"></image>
		<view class="regestFrame">
			<view class="title">手机注册</view>
			<view class="code">邀请码<text>{{id}}</text></view>
			<view class="inputList">
				<view class="inputPoint">
					<input placeholder="请输入手机号" v-model="phone"/>
				</view>
				<view class="inputPoint">
					<input placeholder="请输入邮箱" v-model="email"/>
				</view>
				<view class="inputPoint">
					<input placeholder="请输入6-16位密码" v-model="password" :password="!showPassword"/>
					<image class="icon" src="/static/regestIcon1.png" v-if="showPassword" @click="togglePassword"></image>
					<image class="icon" src="/static/regestIcon0.png" v-else @click="togglePassword"></image>
				</view>
				<view class="inputPoint">
					<input placeholder="请输入验证码" v-model="code"/>
					<view class="getCode" v-if="nextTime">{{nextTime}}秒后可重发</view>
					<view class="getCode" @click="getCode" v-else>获取验证码</view>
				</view>
			</view>
			<view class="dsc">
				<image class="icon" src="/static/regestIcon2.png"></image>
				<view class="text">我已阅读并同意<text>《用户协议》</text>与<text>《隐私政策》</text></view>
			</view>
			<view class="regest" @click="regest">注册</view>
		</view>
	</view>
</template>

<script>
	import {postFetch} from '@/util/request_UT.js'
	export default {
		data() {
			return {
				phone:'',
				email:'',
				password:'',
				code:'',
				id:'',
				nextTime:0,
				showPassword:false
			};
		},
		onLoad(props){
			this.id = props.id||''
		},
		methods:{
			phoneCheck(){
				if(!this.phone.length){
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					})
					return false;
				}else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
								uni.showToast({
								    title: '请输入正确的手机号',
									icon:'none',
								    duration: 1000
								});
							return false;
						}else{
							return true;
						}
			},
			emailCheck(){
				if(!this.email.length){
					uni.showToast({
						title:'请输入邮箱',
						icon:'none'
					})
					return false;
				}else if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email))){
								uni.showToast({
								    title: '请输入正确的邮箱',
									icon:'none',
								    duration: 1000
								});
							return false;
						}else{
							return true;
						}
			},
			passwordCheck(){
				if(!this.password.length){
					uni.showToast({
						title:'请输入密码',
						icon:'none'
					})
					return false;
				}else{
					return true;
				}
			},
			codeCheck(){
				if(!this.code.length){
					uni.showToast({
						title:'请输入验证码',
						icon:'none'
					})
					return false;
				}else{
					return true;
				}
			},
			togglePassword(){
				this.showPassword = !this.showPassword
			},
			regest(){
				let _this=this
				if(_this.phoneCheck()&&_this.emailCheck()&&_this.passwordCheck()&&_this.codeCheck()){
					postFetch('index.php/index/login/register',{phone:_this.phone,email:_this.email,password:_this.password,checkNum:_this.code,invitation_code:_this.id},false,function(res){
						console.log('regestCallback',res)
						if(res.data.token){
							uni.showToast({
								title:'注册成功',
								icon:'none'
							})
							uni.navigateTo({
								url:'/pages/download/download'
							})
						}else{
							uni.showToast({
								title:'注册错误',
								icon:'none'
							})
						}
						
					})
				}
			},
			getCode(){
				let _this=this
				if(this.phoneCheck()){
					postFetch('index.php/index/login/sms',{phone:_this.phone},false,function(res){
						_this.nextTime=60;
						let s = setInterval(function(){
							if(!_this.nextTime){
								clearInterval(s)
							}else{
								_this.nextTime--
							}
						},1000)
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.page{
		position: relative;
		height: 100%;
		background-color: #ffae30;
		.bg{
			width:750rpx;
			height:1333rpx;
		}
		.regestFrame{
			position: absolute;
			top:533rpx;
			left:67rpx;
			width:611rpx;
			background-color: #fff;
			padding: 29rpx 48rpx;
			border-radius:28rpx;
			.title{
				font-size:33rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(34,34,34,1);
				text-align: center;
			}
			.code{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(153,153,153,1);
				text-align: center;
				margin-top: 19rpx;
				.text{
					color: #FFAE6D;
				}
			}
			.inputList{
				width: 100%;
				margin-top: 50rpx;
				.inputPoint{
					width:100%;
					height: 83rpx;
					display: flex;
					align-items: center;
					border-bottom: 1px solid rgba(162,162,162,1);
					input{
						height: 83rpx;
						flex-grow: 1;
					}
					.icon{
						width:35rpx;
						height: 35rpx;
						flex-shrink: 0;
						margin-right: 12rpx;
					}
					.getCode{
						font-size:21rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(34,34,34,1);
						margin-right: 12rpx;
					}
				}
			}
			.dsc{
				margin: auto;
				margin-top: 44rpx;
				display: flex;
				.icon{
					width:35rpx;
					height:35rpx;
					margin-right: 7rpx;
				}
				.text{
					font-size:21rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:#D9D9D9;
					text{
						color:#666666;
					}
				}
			}
			.regest{
				width:242rpx;
				height:63rpx;
				border:1px solid rgba(162,162,162,1);
				border-radius:31rpx;
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(34,34,34,1);
				margin: auto;
				margin-top: 84rpx;
				line-height: 63rpx;
				text-align: center;
			}
		}
	}
</style>
