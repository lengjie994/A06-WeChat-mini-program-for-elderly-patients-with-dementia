<template>
	<view>
		<view class="header">
			<uni-nav-bar title="我的信息" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="container">
			<view class="name">姓名：{{name}}</view>
			<view>住址：{{addr}}</view>
			<view>紧急联系人：{{emergence}}</view>
		</view>
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
				openid:"",
				id_data:"patient",
				name:"姓名",
				addr:"住址",
				emergence:"紧急联系人",
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
				//此处url还需修改为获取备忘录的url
				url: 'http://127.0.0.1:8000/api/user/getPatientInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid:this.openid,
				},
				success: function(response) {
					console.log("获取备忘录成功")
					_this.name=response.data.code.Name
					_this.addr=response.data.code.Address
					_this.emergence=response.data.code.Phone_contact
				},
				fail: function(response) {
					console.log("获取备忘录失败")
				}
			})
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.container .name{
		height: 10%;
	}
	.header{
		background-color: #F5F5F5;
	}
	.container {
		height: 1200rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5%;

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