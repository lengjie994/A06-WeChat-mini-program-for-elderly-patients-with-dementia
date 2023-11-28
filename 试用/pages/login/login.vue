<template>
	<view>
		<image src="/static/12.jpg"></image>
		<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
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
				let _this=this;
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
								url: 'http://127.0.0.1:8000/api/user/login/',
								// 请求方式修改为 POST
								method: 'POST',
								data: {
									code: loginres.code
								},
								success: function(response) {
									console.log(111)
									console.log(response)
									_this.role=response.data.code.role
									getApp().globalData.global_openid=response.data.code.openid
									console.log(getApp().globalData.global_openid)
									console.log(_this.role)
									//若用户为绑定过身份的用户
									console.log(_this.role)
									if(_this.role==='newUser'){
										uni.navigateTo({
											url: '/pages/identity/identity'
										})
									}
									else if(_this.role==='doctor'){
										uni.navigateTo({
											url: '/pages/doctor_myinfo/doctor_myinfo'
										})
									}
									else if(_this.role==='guardian'){
										uni.navigateTo({
											url: '/pages/guardian_myinfo/guardian_myinfo'
										})
									}
									else if(_this.role==='patient'){
										uni.navigateTo({
											url: '/pages/patient_myinfo/patient_myinfo'
										})
									}
								},
								fail: function(response) {
									console.log(222)
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

</style>