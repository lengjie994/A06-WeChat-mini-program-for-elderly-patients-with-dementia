<template>
	<view>
		这是预约成功界面
		<view>{{doctor.career}}</view>
		<view>{{doctor.intro}}</view>
		<view>{{doctor.hospital}}</view>
		<view>{{doctor.addr}}</view>
		<view>{{doctor.career}}</view>
		<view>{{time}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openid:"",
				doctor:{
					name: "王大智",
					intro: "甲亢、甲减、多囊卵巢、代谢异常、甲状腺功能失调、甲状腺激素异常等引起的不孕不育症的治疗和孕期管理、生活指导，在治疗各种代谢内分泌异常方面有丰富的临床经验。",
					hospital: "12",
					addr: "sdaf",
					career: "adgasg",
					
				},
				time:"",
			}
		},
		methods: {
			
		},
		onLoad(options){
			this.openid=getApp().globalData.global_openid
			console.log(this.openid)
			this.time=options.param1
		}
	}
</script>

<style>

</style>