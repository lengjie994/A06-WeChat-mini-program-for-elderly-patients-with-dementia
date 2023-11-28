<template>
	<view>
		<button type="primary" @click="patient_info">我是患者</button>
		<button type="primary" @click="guardian_info">我是监护人</button>
		<button type="primary" @click="doctor_info">我是医生</button>
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
			patient_info(){
				uni.redirectTo({
					url:'/pages/patient_myinfo/patient_myinfo'
				})
				this.role="patient"
				sendrole()
				
			},
			guardian_info(){
				uni.redirectTo({
					url:'/pages/guardian_myinfo/guardian_myinfo'
				})
				this.role="guardian"
			},
			doctor_info(){
				uni.redirectTo({
					url:'/pages/doctor_myinfo/doctor_myinfo'
				})
				this.role="doctor"
			},
			sendrole(){
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为传递身份的url
					url: 'http://127.0.0.1:8000/api/user/login/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						role:this.role,
						openid:this.openid,
					},
					success: function() {
						console.log(111)
					},
					fail: function(response) {
						console.log(222)
					}
				})
			}
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">

</style>
