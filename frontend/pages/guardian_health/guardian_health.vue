<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="患者相关" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view>
			<view>
				<view>
					<fui-section title="患者相关信息" line-width="8rpx" isLine class="fui-section__title"></fui-section>
					<fui-list-cell arrow @click="goto_pill()" marginTop="28">
						<view class="iconfont icon-a-23-pill-diagonal"></view>
						<text style="margin-left: 20rpx;">编辑服药提醒</text>
					</fui-list-cell>
					<fui-list-cell arrow @click="goto_healthdata()">
						<view class="iconfont icon-a-17-chart-3"></view>
						<text style="margin-left: 20rpx;">记录健康数据</text>
					</fui-list-cell>
					<fui-list-cell arrow @click="onClickShow()">
						<view class="iconfont icon-a-38-mobile-check"></view>
						<text style="margin-left: 20rpx;">编辑备忘录</text>
					</fui-list-cell>
				</view>
			</view>
		</view>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
		<!-- 弹出框模块 -->
		<edit_note ref='customModal' :note="note" @onClickConfirm="onClickConfirm"></edit_note>
		
		
	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';
	import tabBar from '@/components/tabbar/tabbar.vue'
	import edit_note from '@/components/edit_note/edit_note.vue'
	import fuilistcell from '@/components/firstui-uni/firstui/fui-list-cell/fui-list-cell.vue'
	import fuisection from 'firstui-uni/firstui/fui-section/fui-section.vue'
	import fuiAvatar from "firstui-uni/firstui/fui-avatar/fui-avatar.vue"
	import fuiTag from "firstui-uni/firstui/fui-tag/fui-tag.vue"
	export default {
		data() {
			return {
				id_data:"guardian",
				note:{
					name:"11",
					place:"22",
					phone:"33",
				},
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
			edit_note,
			fuilistcell,
			fuisection,
			fuiAvatar,
			fuiTag,
		},
		methods: {
			goto_pill() {
				uni.navigateTo({
					url: '/pages/guardian_pill/guardian_pill'
				})
			},
			goto_healthdata() {
				uni.navigateTo({
					url: '/pages/guardian_healthdata/guardian_healthdata'
				})
			},
			// 根据自己项目，在某个事件触发弹框弹出,注意！！！$refs后面直接跟[],不需要.
			onClickShow() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['customModal'].showModal();
			},
			// 点击确定按钮，弹出框隐藏 
			onClickConfirm(data) {
				let stateData = JSON.parse(data)
				console.log(stateData.name)
				console.log(stateData.place)
				console.log(stateData.phone)
				//这里需要将备忘录信息传递给后端，然后后端将信息发送给患者
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改备忘录的url
					url: getApp().globalData.base_url+'/modifyMemorial/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid:this.openid,
						name:stateData.name,
						place:stateData.place,
						phone:stateData.phone,
					},
					success: function(response) {
						console.log("修改备忘录成功")
						console.log(response)
					},
					fail: function(response) {
						console.log("修改备忘录失败")
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
