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
				
			};
		},
		methods: {
			patient_info(){
				uni.redirectTo({
					url:'/pages/patient_myinfo/patient_myinfo'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
