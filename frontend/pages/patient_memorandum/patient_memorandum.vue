<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="我的信息" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<fui-section title="我的信息" line-width="8rpx" isLine class="fui-section__title" marginBottom="28"></fui-section>
		<view class="card">
			<fui-card title="姓名" tag="本人">
				<view class="fui-card__content">{{name}}</view>
			</fui-card>
		</view>
		<view class="card">
			<fui-card title="住址" tag="本人">
				<view class="fui-card__content">{{addr}}</view>
			</fui-card>
		</view>
		<view class="card">
			<fui-card title="紧急联系电话" tag="监护人">
				<view class="fui-card__content">{{emergence}}</view>
			</fui-card>
		</view>
		<view>
			<tabBar selectedIndex=1 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	import fuiCard from "firstui-uni/firstui/fui-card/fui-card.vue"
	import fuisection from 'firstui-uni/firstui/fui-section/fui-section.vue'
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
			fuiCard,
			fuisection,
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
				url: getApp().globalData.base_url+'/getPatientInfo/',
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
					console.log(response)
					if(_this.name==null||_this.name=="UNDEFINED")
					{
						_this.name="暂无"
					}
					if(_this.addr==null||_this.addr=="UNDEFINED")
					{
						_this.addr="暂无"
					}
					if(_this.emergence==null||_this.emergence=="UNDEFINED")
					{
						_this.emergence="暂无"
					}
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
	.card{
		margin-bottom: 20rpx;
		font-size: 38rpx;
	}
	.fui-section__title {
		margin-left: 32rpx;
	}
	.content {
		background-color: #F1F4FA;
		height: 100vh;
	}

	.fui-card__content {
		
		padding: 32rpx 20rpx;
		box-sizing: border-box;
	}
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