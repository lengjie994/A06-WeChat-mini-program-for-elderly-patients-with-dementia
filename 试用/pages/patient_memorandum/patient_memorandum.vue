<template>
	<view>
		<view class="container">
			<view>姓名：</view>
			<view>住址：</view>
			<view>紧急联系人：</view>
		</view>
		<view>
			备忘
			<tabBar selectedIndex=1></tabBar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onShow() {
			//⭐隐藏pages.json里配置的导航栏，使用封装的tabbar组件
			uni.hideTabBar({
				animation: false
			})
		},
	}
</script>

<style lang="scss">
	.container {
		height: 1200rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10%;

	}

	.container view {
		border: 3rpx solid;
		border-radius: 10rpx;
		padding: 10rpx;
		margin-bottom: 50rpx;
		width: 80%;
		height: 30%;
		font-family: cursive;
		font-size: 25px;
		font-weight: bold;

	}
</style>