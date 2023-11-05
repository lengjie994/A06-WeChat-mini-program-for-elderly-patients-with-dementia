<template>
	<view class="content">
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
				<view class="tr">
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
		<treatmentState ref='customModal' :dataLineDetail="dataLineDetail" :modalTitle="modalTitle"
			@onClickConfirm="onClickConfirm"></treatmentState>


		<view>
			个人
			<tabBar selectedIndex=2></tabBar>
		</view>




	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';

	// 引入自定义弹出框组件
	import treatmentState from '@/treatmentState.vue';
	import tabBar from '@/components/tabbar/tabbar.vue'

	export default {
		data() {
			let a = 1;
			return {};
		},
		onShow() {
			//⭐隐藏pages.json里配置的导航栏，使用封装的tabbar组件
			uni.hideTabBar({
				animation: false
			})
		},


		components: {
			uniPopup,
			uniPopupDialog,
			treatmentState, // 引入相关自定义弹出框组件
			tabBar,
		},

		methods: {
			goto_memoir() {
				uni.navigateTo({
					url: '/pages/patient_memoir/patient_memoir'
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
				let conditionsParameter = this.openPageParameter.conditions;
				console.log("stateData===" + JSON.stringify(this.openPageParameter))
				// 调用更新状态的接口
				this.$http.post(this.$apis.changeEarlyWarnLos, {
					tableName: '',
					custid: stateData.custid, // 获取客户id
					areaid: '',
					remark: stateData.remark, // 获取备注
					phoneNums: stateData.phoneNums, // 打电话次数
					status: stateData.status, // 更新状态
				}).then(resp => {
					let code = resp.returnInfo.code;
					console.log(resp.responseBody)
				}).catch(error => {
					this.$util.feeback.showToast({
						title: '更新业务状态失败！'
					});
				});
				// 回调组件里的隐藏方法
				this.$refs['customModal'].hideModal();
			},
		}
	}
</script>




<style lang="scss">
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
</style>