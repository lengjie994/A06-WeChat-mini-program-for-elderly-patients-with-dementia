<template>
<<<<<<< HEAD
	<view>
		<view class="header">
			<uni-nav-bar title="联系医生" height="150rpx" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		这是联系医生
		<view>
			<tabBar selectedIndex=1 :id_data="id_data"></tabBar>
=======
	<view>
		<view class="header">
			<uni-nav-bar title="联系医生" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		这是联系医生
		<view>
			<tabBar selectedIndex=1 :id_data="id_data"></tabBar>
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
		</view>
	</view>
</template>

<<<<<<< HEAD
<script>
=======
<script>
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
	import tabBar from '@/components/tabbar/tabbar.vue'
	export default {
		data() {
			return {
				id_data:"guardian",
			};
<<<<<<< HEAD
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
=======
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
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
		},
	}
</script>

<style lang="scss">
<<<<<<< HEAD
	.header{
		background-color: #F5F5F5;
=======
	.header{
		background-color: #F5F5F5;
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
	}
</style>
