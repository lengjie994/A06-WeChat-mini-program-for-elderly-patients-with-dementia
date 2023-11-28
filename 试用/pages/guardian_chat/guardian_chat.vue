<template>
	<view>
		<view class="header">
			<uni-nav-bar title="联系医生" height="150rpx" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		这是联系医生
		<view>
			<tabBar selectedIndex=1 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	export default {
		data() {
			return {
				id_data:"guardian",
			};
		},
		onShow() {
			//⭐隐藏pages.json里配置的导航栏，使用封装的tabbar组件
			uni.hideTabBar({
				animation: false
			});
			if (uni.hideHomeButton) {
				console.log('uni.hideHomeButton');
				wx.hideHomeButton();
			}
		
		},
		
		components: {
			tabBar,
		},
	}
</script>

<style lang="scss">
	.header{
		background-color: #F5F5F5;
	}
</style>
