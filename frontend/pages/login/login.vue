<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="登录界面" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="login-container">
			<view class="logo">
				<!-- 提示登录的图标 -->
				<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
				<!-- 登录按钮 -->
				<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
				<!-- 登录提示 -->
				<view class="tips-text">登录后尽享更多权益</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				role: 'newrole',
			};
		},
		methods: {
			getUserInfo(e) {
				if (e.detail.errMsg === 'getUserInfo:fail auth deny') {
					//return uni.$showMsg('您取消了登录授权')
				}
				console.log(e)
				this.getToken(e.detail)

			},
			async getToken(info) {
				let _this = this;
				const [err, res] = await new Promise((resolve, reject) => {
					uni.login({
						provider: 'weixin',
						success: function(loginres) {
							//console.log(loginres);
							resolve([null, loginres]); // 将loginres的值传递给res
							// 通过code换取openId
							wx.request({
								// 这里是django的本地ip地址
								// 如果部署到线上，需要改为接口的实际网址
								url: 'http://43.140.198.99/api/user/login/',
								// 请求方式修改为 POST
								method: 'POST',
								data: {
									code: loginres.code
								},
								success: function(response) {
									console.log("登录成功")
									console.log(response)
									_this.role = response.data.code.role
									getApp().globalData.global_openid = response.data
										.code.openid
									getApp().globalData.global_id = response.data.code
										.specialid
									getApp().globalData.global_identity=_this.role
									console.log(getApp().globalData.global_openid)
									console.log(getApp().globalData.global_id)
									console.log(_this.role)
									//若用户为绑定过身份的用户
									console.log(_this.role)
									if (_this.role === 'newUser') {
										uni.navigateTo({
											url: '/pages/identity/identity'
										})
									} else if (_this.role === 'doctor') {
										uni.navigateTo({
											url: '/pages/doctor_myinfo/doctor_myinfo'
										})
									} else if (_this.role === 'guardian') {
										uni.navigateTo({
											url: '/pages/guardian_myinfo/guardian_myinfo'
										})
									} else if (_this.role === 'patient') {
										uni.navigateTo({
											url: '/pages/patient_memorandum/patient_memorandum'
										})
									}
								},
								fail: function(response) {
									console.log("登陆失败")
									console.log(response)
								}
							})
						},

						fail: function(error) {
							reject([error, null]); // 将错误信息传递给err
						},

					});
				});

			}
		}
	}
</script>

<style lang="scss">
	.content{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.logo{
		margin-top: -500rpx;
	}
	.login-container {
		// 登录盒子的样式
		flex: 1 1 auto;
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f8f8f8;
		position: relative;
		overflow: hidden;

		// 绘制登录盒子底部的半椭圆造型
		&::after {
			content: ' ';
			display: block;
			position: absolute;
			width: 100%;
			height: 40px;
			left: 0;
			bottom: 0;
			background-color: white;
			border-radius: 100%;
			transform: translateY(50%);
		}

		// 登录按钮的样式
		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: #c00000;
		}

		// 按钮下方提示消息的样式
		.tips-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>