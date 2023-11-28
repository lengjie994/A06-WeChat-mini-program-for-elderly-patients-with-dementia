<template>
	<view>
		<view class="header">
			<uni-nav-bar title="患者相关" height="150rpx" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view>
		
			<view class="table">
				<!-- 表头(即第一行) -->
				<view class="tr" v-if="true" @tap="goto_pill">
					<view class="th">
						<view class="iconfont icon-a-23-pill-diagonal"></view>
					</view>
					<view class="td">编辑服药提醒</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
				</view>
				<!-- 表格第二行 -->
				<view class="tr" @tap="goto_healthdata">
					<view class="th">
						<view class="iconfont icon-a-17-chart-3"></view>
					</view>
					<view class="td">记录健康数据</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
				</view>
				<!-- 表格第三行 -->
				<view class="tr" @tap="onClickShow()">
					<view class="th">
						<view class="iconfont icon-a-38-mobile-check"></view>
					</view>
					<view class="td">编辑备忘录</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
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
				this.$refs['customModal'].hideModal();
			},
		}
	}
</script>

<style lang="scss">
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
