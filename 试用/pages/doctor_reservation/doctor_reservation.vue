<template>
	<view>
		这是我的预约界面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openid:"",
			}
		},
		methods: {
			
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
			console.log(this.openid)
		}
	}
</script>

<style>

</style>
