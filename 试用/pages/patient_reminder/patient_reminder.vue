<<<<<<< HEAD
<template>
	<view>
		<view class="header">
			<uni-nav-bar title="服药提醒" height="150rpx" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="container">
			<view class="unit" v-for="(item,index) in list" :key="index">
				<view class="medicine_name">{{item.medicine_name}}</view>
				<view class="bottom">
					<view class="time" style="color: red;">{{item.time}}</view>
					<view class="method" style="color: red;">{{item.method}}</view>
					<view class="state"
						style="background-color: red;color: white;font-weight: lighter;border-radius: 10rpx;">
						{{item.state}}
					</view>
				</view>
			</view>
		</view>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	export default {
		data() {
			return {
				openid:"",
				list: [{
					medicine_name: "奥拉西坦胶囊",
					time: "12:00",
					method: "一天一次",
					state: "立即服用",
				}],
				id_data:"patient",
			};
		},
		components: {
			tabBar,
		},
		onShow() {
			let _this=this
			//⭐隐藏pages.json里配置的导航栏，使用封装的tabbar组件
			uni.hideTabBar({
				animation: false
			});
			if (uni.hideHomeButton) {
				console.log('uni.hideHomeButton');
				wx.hideHomeButton();
			}
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为获取服药提醒的url
				url: 'http://127.0.0.1:8000/api/user/login/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid:this.openid,
				},
				success: function(response) {
					console.log(1111111)
					_this.list=response.list
				},
				fail: function(response) {
					console.log(222)
				}
			})
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.header{
		background-color: #F5F5F5;
	}
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
=======
<template>
	<view>
		<view class="header">
			<uni-nav-bar title="服药提醒" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="container">
			<view class="unit" v-for="(item,index) in list" :key="index">
				<view class="medicine_name">{{item.medicine_name}}</view>
				<view class="bottom">
					<view class="time" style="color: red;">{{item.time}}</view>
					<view class="method" style="color: red;">{{item.method}}</view>
					<view class="state"
						style="background-color: red;color: white;font-weight: lighter;border-radius: 10rpx;">
						{{item.state}}
					</view>
				</view>
			</view>
		</view>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	export default {
		data() {
			return {
				openid:"",
				list: [{
					medicine_name: "奥拉西坦胶囊",
					time: "12:00",
					method: "一天一次",
					state: "立即服用",
				}],
				id_data:"patient",
			};
		},
		components: {
			tabBar,
		},
		onShow() {
			let _this=this
			//⭐隐藏pages.json里配置的导航栏，使用封装的tabbar组件
			uni.hideTabBar({
				animation: false
			});
			if (uni.hideHomeButton) {
				console.log('uni.hideHomeButton');
				wx.hideHomeButton();
			}
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为获取服药提醒的url
				url: 'http://127.0.0.1:8000/api/user/getPatientInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid:this.openid,
				},
				success: function(response) {
					console.log("获取服药提醒成功")
					_this.list=response.data.code.Medicine
				},
				fail: function(response) {
					console.log("获取服药提醒失败")
				}
			})
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.header{
		background-color: #F5F5F5;
	}
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
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
</style>