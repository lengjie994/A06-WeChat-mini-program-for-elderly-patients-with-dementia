<<<<<<< HEAD
<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="个人中心" height="150rpx" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="info">
			<image id="pic" src="/static/12.jpg"></image>
			<text id="id">id:username</text>
			<view id="depart"></view>
		</view>
		<view>

			<view class="table">
				<!-- 表头(即第一行) -->
				<view class="tr" v-if="true" @click="onClickShow()">
					<view class="th">
						<view class="iconfont icon-tianxuangouren"></view>
					</view>
					<view class="td">我的监护人</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
				</view>
				<!-- 表格第二行 -->
				<view class="tr" @tap="goto_healthdata">
					<view class="th">
						<view class="iconfont icon-fenxiang"></view>
					</view>
					<view class="td">我的健康数据</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
				</view>

				<!-- 表格第三行 -->
				<view class="tr" @tap="goto_memoir">
					<view class="th">
						<view class="iconfont icon-shangchuantupian"></view>
					</view>
					<view class="td">我的回忆录</view>
					<view class="th">
						<view class="iconfont icon-jinru"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出框模块 -->
		<patientguardian_state ref='customModal' :dataLineDetail="dataLineDetail"
			@onClickConfirm="onClickConfirm"></patientguardian_state>


		<view>
			<tabBar selectedIndex=2 :id_data="id_data"></tabBar>
		</view>




	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';

	// 引入自定义弹出框组件
	import tabBar from '@/components/tabbar/tabbar.vue'
	import patientguardian_state from '@/components/patient_guardian_state/patient_guardian_state.vue';

	export default {
		data() {
			return {
				openid:"",
				id_data:"patient",
				dataLineDetail:{
					remark:"1111",
					status:0,
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
			patientguardian_state,
		},

		methods: {
			goto_memoir() {
				uni.navigateTo({
					url: '/pages/patient_memoir/patient_memoir'
				})
			},
			goto_healthdata() {
				uni.navigateTo({
					url: '/pages/patient_healthdata/patient_healthdata'
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
				console.log(stateData.remark)
				
				// 回调组件里的隐藏方法
				this.$refs['customModal'].hideModal();
			},
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
	.info {
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
		font-family: "iconfont";
		/* Project id 4305931 */
		src: url('//at.alicdn.com/t/c/font_4305931_7px9mqbj2vl.woff2?t=1698481858386') format('woff2'),
			url('//at.alicdn.com/t/c/font_4305931_7px9mqbj2vl.woff?t=1698481858386') format('woff'),
			url('//at.alicdn.com/t/c/font_4305931_7px9mqbj2vl.ttf?t=1698481858386') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-shangchuantupian:before {
		content: "\e627";
	}

	.icon-xiaoxi-zhihui:before {
		content: "\e61d";
	}

	.icon-shouye-zhihui:before {
		content: "\e61e";
	}

	.icon-gerenzhongxin-zhihui:before {
		content: "\e61f";
	}

	.icon-qianshuxieyi:before {
		content: "\e620";
	}

	.icon-fenxiang:before {
		content: "\e621";
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
=======
<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="个人中心" height="11vh" :border="false" :fixed="true"
				backgroundColor="#f9f9f9"></uni-nav-bar>
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
				<fui-list-cell arrow @click="onClickShow()" marginTop="28">
					<view class="iconfont icon-tianxuangouren"></view>
					<text style="margin-left: 20rpx;">我的监护人</text>
				</fui-list-cell>
				<fui-section title="我的档案" line-width="8rpx" isLine margin-top="20"
					class="fui-section__title"></fui-section>
				<fui-list-cell arrow @click="goto_healthdata" marginTop="28">
					<view class="iconfont icon-fenxiang"></view>
					<text style="margin-left: 20rpx;">我的健康数据</text>
				</fui-list-cell>
				<fui-list-cell arrow @click="goto_memoir">
					<view class="iconfont icon-shangchuantupian"></view>
					<text style="margin-left: 20rpx;">我的回忆录</text>
				</fui-list-cell>
			</view>


		</view>
		<!-- 弹出框模块 -->
		<patientguardian_state ref='customModal' :dataLineDetail="dataLineDetail" @onClickConfirm="onClickConfirm">
		</patientguardian_state>


		<view>
			<tabBar selectedIndex=2 :id_data="id_data"></tabBar>
		</view>




	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';

	// 引入自定义弹出框组件
	import tabBar from '@/components/tabbar/tabbar.vue'
	import patientguardian_state from '@/components/patient_guardian_state/patient_guardian_state.vue';
	import fuilistcell from '@/components/firstui-uni/firstui/fui-list-cell/fui-list-cell.vue'
	import fuisection from 'firstui-uni/firstui/fui-section/fui-section.vue'
	import fuiAvatar from "firstui-uni/firstui/fui-avatar/fui-avatar.vue"
	import fuiTag from "firstui-uni/firstui/fui-tag/fui-tag.vue"
	export default {
		data() {
			return {
				openid: "",
				id_data: "patient",
				dataLineDetail: {
					remark: "1111",
					status: 0,
				},
				id: "00000001",
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
			patientguardian_state,
			fuilistcell,
			fuisection,
			fuiAvatar,
			fuiTag,
		},

		methods: {
			goto_memoir() {
				uni.navigateTo({
					url: '/pages/patient_memoir/patient_memoir'
				})
			},
			goto_healthdata() {
				uni.navigateTo({
					url: '/pages/patient_healthdata/patient_healthdata'
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
				console.log(stateData.remark)

				// 回调组件里的隐藏方法
				this.$refs['customModal'].hideModal();
			},
		},
		onLoad() {
			let _this = this;
			this.openid = getApp().globalData.global_openid
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为修改健康数据的url
				url: 'http://127.0.0.1:8000/api/user/getPatientInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid: this.openid,
				},
				success: function(response) {
					_this.id = response.data.code.Patient_id;
					console.log("获取患者id成功")
				},
				fail: function(response) {
					console.log("获取患者id失败")
				}
			})
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

	.header {
		background-color: #F5F5F5;
	}

	.info {
		margin-top: 6%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
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
		font-family: "iconfont";
		/* Project id 4305931 */
		src: url('//at.alicdn.com/t/c/font_4305931_7px9mqbj2vl.woff2?t=1698481858386') format('woff2'),
			url('//at.alicdn.com/t/c/font_4305931_7px9mqbj2vl.woff?t=1698481858386') format('woff'),
			url('//at.alicdn.com/t/c/font_4305931_7px9mqbj2vl.ttf?t=1698481858386') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-shangchuantupian:before {
		content: "\e627";
	}

	.icon-xiaoxi-zhihui:before {
		content: "\e61d";
	}

	.icon-shouye-zhihui:before {
		content: "\e61e";
	}

	.icon-gerenzhongxin-zhihui:before {
		content: "\e61f";
	}

	.icon-qianshuxieyi:before {
		content: "\e620";
	}

	.icon-fenxiang:before {
		content: "\e621";
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
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
</style>