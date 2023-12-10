<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="服药提醒" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<scroll-view class="scroll-view" :scroll-y="true" ref="scrollView" style="height: 78vh;">
		<view v-for="(item,index) in list" :key="index">
			<view v-for="(item2,index2) in item.time.split(',')" :key="index2">
				<view class="card">
					<fui-card :title="item.pill" 
					:tag="checkTime(item2) ? '已过期' : '待服用'" 
					size="32"
					:tagColor="checkTime(item2) ? '#7F7F7F' : '#fff'"
					:color="checkTime(item2) ? '#b2b2b2' : '#fff'"
					:background="checkTime(item2) ? '#fff' : 'linear-gradient(90deg, #465CFF 0%, #6831FF 100%)'"
					>
						<view class="fui-card__content"
						:style="checkTime(item2) ? '' : 'color:#fff;'"
						>{{item2}} {{item.count}}</view>
					</fui-card>
				</view>
			</view>
		</view>
		</scroll-view>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	import fuiCard from "firstui-uni/firstui/fui-card/fui-card.vue"
	export default {
		data() {
			return {
				openid:"",
				list: [{
					pill: "奥拉西坦胶囊",
					count: "一次一粒",
					dailycount: "3",
					time: "08:00,12:00,18:00",
				},
				{
					pill: "奥拉西坦1",
					count: "一次一粒",
					dailycount: "2",
					time: "08:30,12:20",
				},
				{
					pill: "奥拉西坦2",
					count: "一次一粒",
					dailycount: "3",
					time: "08:00,12:00,13:16",
				}],
				id_data:"patient",
			};
		},
		components: {
			tabBar,
			fuiCard,
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
			let _this=this
			this.openid=getApp().globalData.global_openid
			_this.checkTime();
		},
		methods:{
			checkTime(targetTime) {
				let _this=this
			      // 获取当前时间
			      var currentTime = new Date();
			      
			      // 将当前时间转换为 "hh:mm" 格式
			      var currentHours = currentTime.getHours();
			      var currentMinutes = currentTime.getMinutes();
			      
			      // 构建当前时间字符串
			      var currentTimeString = `${currentHours}:${currentMinutes}`;
			      
			      // 比较时间
			      if (currentTimeString > targetTime) {
			        return true;
			      } else {
			        return false;
			      }
			    },
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #F1F4FA;
		height: 100vh;
	}
	.card{
		margin-top: 20rpx;
		font-size: 38rpx;
	}
	.fui-section__title {
		margin-left: 32rpx;
	}
	
	.fui-card__content {
		font-size: 38rpx;
		padding: 32rpx 20rpx;
		box-sizing: border-box;
		font-family: cursive;
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