<template>
	<view>
		<view class="header">
			<uni-nav-bar title="身份选择" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="btn">
			<button type="primary" @click="patient_info">我是患者</button>
			<button type="primary" @click="guardian_info">我是监护人</button>
			<button type="primary" @click="doctor_info">我是医生</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role:'',
				openid:'',
			};
		},
		methods: {
			
			sendrole(){
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为传递身份的url
					url: 'http://127.0.0.1:8000/api/user/role/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						role:this.role,
						openid:this.openid,
					},
					success: function(response) {
						getApp().globalData.global_id=response.data.code.specialid
						console.log(response)
						console.log("保存身份成功")
					},
					fail: function(response) {
						console.log("保存身份失败")
					}
				})
			},
			patient_info(){
				uni.redirectTo({
					url:'/pages/patient_myinfo/patient_myinfo'
				})
				this.role="patient"
				this.sendrole()
				
			},
			guardian_info(){
				uni.redirectTo({
					url:'/pages/guardian_myinfo/guardian_myinfo'
				})
				this.role="guardian"
				this.sendrole()
			},
			doctor_info(){
				uni.redirectTo({
					url:'/pages/doctor_myinfo/doctor_myinfo'
				})
				this.role="doctor"
				this.sendrole()
			},
			
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.btn{
		margin-top: 40%;
	}
	button{
		width: 70%;
		margin-top: 100rpx;
	}
</style>
