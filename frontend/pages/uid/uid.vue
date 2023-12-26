<template>
	<view>
		<web-view :src="followurl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				followurl:'',
			};
		},
		onLoad() {
			let _this=this
			this.followurl = decodeURIComponent('https://wxpusher.zjiecode.com/wxuser/?type=1&id=67688#/follow')
			console.log(this.followurl)
			
		},
	}
</script>

<style lang="scss">

</style>
