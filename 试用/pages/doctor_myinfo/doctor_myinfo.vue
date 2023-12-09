<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="个人中心" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="info">
			<fui-avatar marginRight="24" width="150" marginBottom="20">
				<fui-icon name="my" color="#fff"></fui-icon>
			</fui-avatar>
			<fui-tag text="ID-" type="purple" margin-bottom="24" theme="light" margin-right="24">{{id}}</fui-tag>
		</view>
		<view>
			<view>
				<fui-section title="关系绑定" line-width="8rpx" isLine class="fui-section__title"></fui-section>
				<fui-list-cell arrow @click="bind_request()" marginTop="28">
					<view class="iconfont icon-tianxuangouren"></view>
					<text style="margin-left: 20rpx;">绑定申请</text>
				</fui-list-cell>
				<fui-section title="我的档案" line-width="8rpx" isLine margin-top="20"
					class="fui-section__title"></fui-section>
				<fui-list-cell arrow @click="show_reservation()" marginTop="28">
					<view class="iconfont icon-qianshuxieyi"></view>
					<text style="margin-left: 20rpx;">我的预约</text>
				</fui-list-cell>
				<fui-list-cell arrow @click="edit_info()">
					<view class="iconfont icon-yisheng1"></view>
					<text style="margin-left: 20rpx;">我的资料</text>
				</fui-list-cell>
			</view>
		
		
		</view>
	
		<!-- 弹出框模块 -->
		<edit_info ref='customModal' :info="info" @onClickConfirm="onClickConfirm"></edit_info>
		<view>
			<tabBar selectedIndex=1 :id_data="id_data"></tabBar>
		</view>

	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';

	// 引入自定义弹出框组件
	import tabBar from '@/components/tabbar/tabbar.vue'
	import edit_info from '@/components/edit_info/edit_info.vue'
	import fuilistcell from '@/components/firstui-uni/firstui/fui-list-cell/fui-list-cell.vue'
	import fuisection from 'firstui-uni/firstui/fui-section/fui-section.vue'
	import fuiAvatar from "firstui-uni/firstui/fui-avatar/fui-avatar.vue"
	import fuiTag from "firstui-uni/firstui/fui-tag/fui-tag.vue"
	export default {
		data() {
			return {
				openid:"",
				info:{},
				id_data:"doctor",
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
			uniPopup,
			uniPopupDialog,
			tabBar,
			edit_info,
			fuilistcell,
			fuisection,
			fuiAvatar,
			fuiTag,
		},

		methods: {
			show_reservation() {
				uni.navigateTo({
					url: '/pages/doctor_reservation/doctor_reservation?openid='+this.openid
				})
			},

			// 根据自己项目，在某个事件触发弹框弹出,注意！！！$refs后面直接跟[],不需要.
			bind_request() {
				uni.navigateTo({
					url: '/pages/doctor_bind_request/doctor_bind_request?openid='+this.openid
				})
			},
			edit_info() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['customModal'].showModal();
			},
			// 点击确定按钮，弹出框隐藏
			onClickConfirm(data) {
				let stateData = JSON.parse(data)
				console.log(stateData.name)
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为传递医生资料的url
					url: 'http://127.0.0.1:8000/api/user/login/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						info:stateData
					},
					success: function() {
						console.log(111)
					},
					fail: function(response) {
						console.log(222)
					}
				})
				this.$refs['customModal'].hideModal();
			},
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #F1F4FA;
		height: 100vh;
	}
	.fui-section__title {
		margin-left: 32rpx;
	}
	.header{
		background-color: #F5F5F5;
	}
	.info {
		margin-top: 6%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#pic {
		margin-top: 5%;
		height: 200rpx;
		width: 200rpx;
	}

	#id {
		margin-top: 5%;
	}

	#depart {
		margin-top: 5%;
		width: 100%;
		height: 3%;
		background-color: rgba(228, 228, 228, 0.4);
	}

	.table {
		display: flex;
		flex-direction: column;
		/* 排列形式: 向下 */
	}

	.tr {
		display: flex;
		flex-direction: row;
	}

	.th,
	.td {
		/* 公有的属性 */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* 自动换行 */
		height: 120rpx;
		text-align: center;
		/* 文本居中 */
		align-items: center;
		/* 交叉轴居中 */
	}

	.th {
		margin-left: 8%;
		width: 15%;
		font-weight: 800;
		/* 字体加重 */
	}

	.td {
		width: 70%;
		text-align: left;
	}

	@font-face {
	  font-family: "iconfont"; /* Project id 4305931 */
	  src: url('//at.alicdn.com/t/c/font_4305931_80mti9nk8kd.woff2?t=1699279219215') format('woff2'),
	       url('//at.alicdn.com/t/c/font_4305931_80mti9nk8kd.woff?t=1699279219215') format('woff'),
	       url('//at.alicdn.com/t/c/font_4305931_80mti9nk8kd.ttf?t=1699279219215') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-yisheng1:before {
	  content: "\e68f";
	}
	
	.icon-yisheng2:before {
	  content: "\e7ad";
	}
	
	.icon-qianshuxieyi:before {
	  content: "\e620";
	}
	
	.icon-yisheng-01:before {
	  content: "\e628";
	}
	
	.icon-yisheng:before {
	  content: "\e66a";
	}
	
	.icon-a-23-pill-diagonal:before {
	  content: "\e60b";
	}
	
	.icon-a-17-chart-3:before {
	  content: "\e60c";
	}
	
	.icon-a-32-chat-double:before {
	  content: "\e60d";
	}
	
	.icon-a-41-user-health-plus:before {
	  content: "\e60e";
	}
	
	.icon-a-38-mobile-check:before {
	  content: "\e60f";
	}
	
	.icon-a-34-browser-user:before {
	  content: "\e610";
	}
	
	.icon-a-61-user-surgeon:before {
	  content: "\e611";
	}
	
	.icon-tianxuangouren:before {
	  content: "\e622";
	}
	
	.icon-bianji:before {
	  content: "\e623";
	}
	
	.icon-jinru:before {
	  content: "\e624";
	}
	
	.icon-tishi:before {
	  content: "\e625";
	}
	
	.icon-shuba:before {
	  content: "\e626";
	}


</style>