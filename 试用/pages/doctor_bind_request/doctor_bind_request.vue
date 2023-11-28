<template>
	<view>
		这是绑定申请界面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openid:"",
				bind_list:[{
					guardian_openid:"",
				}],
			}
		},
		methods: {
			
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style>

</style>
