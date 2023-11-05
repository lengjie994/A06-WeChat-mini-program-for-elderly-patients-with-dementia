<template>
	<view>
		<view class="container">
			<view class="unit" v-for="(item,index) in list" :key="index">
				<view class="medicine_name">{{item.medicine_name}}</view>
				<view class="bottom">
					<view class="time" style="color: red;">{{item.time}}</view>
					<view class="method" style="color: red;">{{item.method}}</view>
					<view class="state"
						style="background-color: red;color: white;font-weight: lighter;border-radius: 10rpx;">
						{{item.state}}</view>
				</view>
			</view>
		</view>
		<view>
			服药
			<tabBar selectedIndex=0></tabBar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					medicine_name: "奥拉西坦胶囊",
					time: "12:00",
					method: "一天一次",
					state: "立即服用",
				}],
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

	.unit {
		border: 3rpx solid;
		border-radius: 10rpx;
		padding: 10rpx;
		margin-bottom: 50rpx;
		width: 80%;
		height: 20%;
		font-family: cursive;
		font-size: 50rpx;
		font-weight: bold;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bottom {
		display: flex;
		flex-direction: row;

		width: 100%;
		justify-content: space-between;


	}

	.medicine_name {
		height: 50%;
		width: 100%;
		font-family: cursive;
		font-weight: bold;
		font-size: 90rpx;
	}
</style>