<template>
	<view class="content">
		<view class="header">
			<uni-nav-bar title="个人中心" height="11vh" :border="false" :fixed="true" backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="info">
			<image id="pic" src="/static/12.jpg"></image>
			<text id="id">id:{{id}}</text>
			<view id="depart"></view>
		</view>
		<view>

			<view class="table">
				<!-- 表头(即第一行) -->
				<view class="tr" v-if="true" @click="show_patient()">
					<view class="th">
						<view class="iconfont icon-tianxuangouren"></view>
					</view>
					<view class="td">我的患者</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
				</view>
				<!-- 表格第二行 -->
				<view class="tr" @click="show_doctor()">
					<view class="th">
						<view class="iconfont icon-yisheng2"></view>
					</view>
					<view class="td">患者医生</view>
					<view class="th">
						<view class="iconfont icon-jinru" bind:tap=""></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出框模块 -->
		<guardianpatient_state ref='patient' :datapatient="datapatient" @onClickConfirm="confirm_patient"></guardianpatient_state>
		<!-- 弹出框模块 -->
		<guardiandoctor_state ref='doctor' :datadoctor="datadoctor" @onClickConfirm="confirm_doctor"></guardiandoctor_state>


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
	import guardianpatient_state from '@/components/guardian_patient_state/guardian_patient_state.vue'
	import guardiandoctor_state from '@/components/guardian_doctor_state/guardian_doctor_state.vue'

	export default {
		data() {
			return {
				datapatient:{
					remark:"11",
					status:0,
				},
				datadoctor:{
					remark:"11",
					status:0,
				},
				id_data:"guardian",
				id:"",
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
		computed:{
			myId(){
				return this.id
			}
		},

		components: {
			uniPopup,
			uniPopupDialog,
			tabBar,
			guardianpatient_state,
			guardiandoctor_state,
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
			show_patient() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['patient'].showModal();
			},
			show_doctor() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['doctor'].showModal();
			},
			// 点击确定按钮，弹出框隐藏 
			confirm_patient(data) {
				let stateData = JSON.parse(data)
				//打印要绑定的患者账号
				console.log(stateData.remark)
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为绑定患者账号的url
					url: 'http://127.0.0.1:8000/api/user/GuardianToPatient/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid:this.openid,
						patient_id:stateData.remark,
					},
					success: function(response) {
						console.log("绑定患者账号成功")
						console.log(response)
					},
					fail: function(response) {
						console.log("绑定患者账号失败")
					}
				})
				this.$refs['patient'].hideModal();
			},
			confirm_doctor(data) {
				let stateData = JSON.parse(data)
				console.log(stateData.remark)
				// 调用更新状态的接口
				// this.$http.post(this.$apis.changeEarlyWarnLos, {
				// 	tableName: '',
				// 	custid: stateData.custid, // 获取客户id
				// 	areaid: '',
				// 	remark: stateData.remark, // 获取备注
				// 	phoneNums: stateData.phoneNums, // 打电话次数
				// 	status: stateData.status, // 更新状态
				// }).then(resp => {
				// 	let code = resp.returnInfo.code;
				// 	console.log(resp.responseBody)
				// }).catch(error => {
				// 	this.$util.feeback.showToast({
				// 		title: '更新业务状态失败！'
				// 	});
				// });
				// 回调组件里的隐藏方法
				this.$refs['doctor'].hideModal();
			},
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
			let _this=this;
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为绑定患者账号的url
				url: 'http://127.0.0.1:8000/api/user/getGuardianInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid:this.openid,
				},
				success: function(response) {
					console.log("绑定患者账号成功")
					_this.id=response.data.code.Guardian_id;
					console.log(response)
				},
				fail: function(response) {
					console.log("绑定患者账号失败")
				}
			})

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