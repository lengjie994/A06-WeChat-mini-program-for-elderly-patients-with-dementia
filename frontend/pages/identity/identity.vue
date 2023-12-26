<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="身份选择" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="btn">
			<!-- <button type="primary" @click="patient_info">我是患者</button>
			<button type="primary" @click="guardian_info">我是监护人</button>
			<button type="primary" @click="doctor_info">我是医生</button> -->
			<fui-button radius="96rpx" :margin="['40rpx']"  @click="patient_info" width="450rpx">我是患者</fui-button>
			<fui-button radius="96rpx" :margin="['40rpx']" @click="guardian_info" width="450rpx">我是监护人</fui-button>
			<fui-button radius="96rpx" :margin="['40rpx']" @click="doctor_info" width="450rpx">我是医生</fui-button>
		</view>
	</view>
</template>

<script>
	import fuiButton from "firstui-uni/firstui/fui-button/fui-button.vue"
	export default {
		data() {
			return {
				role:'',
				openid:'',
			};
		},
		components:{
			fuiButton,
		},
		methods: {
			
			sendrole(){
				getApp().globalData.global_identity=this.role
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为传递身份的url
					url: getApp().globalData.base_url+'/role/',
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
				this.role="patient"
				this.sendrole()
				uni.redirectTo({
					url:'/pages/patient_memorandum/patient_memorandum'
				})
				
				
				
			},
			guardian_info(){
				this.role="guardian"
				this.sendrole()
				uni.redirectTo({
					url:'/pages/guardian_myinfo/guardian_myinfo'
				})
				
				
			},
			doctor_info(){
				this.role="doctor"
				this.sendrole()
				uni.redirectTo({
					url:'/pages/doctor_myinfo/doctor_myinfo'
				})
				
				
			},
			
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.btn{
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 89vh;
	}

	.content {
		background-color: #F1F4FA;
		height: 100vh;
	}

</style>
