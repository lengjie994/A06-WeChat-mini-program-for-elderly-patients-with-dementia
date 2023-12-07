<template>
	<view>
		<view class="chart">
			<view class="chartbtn">
				<button :style="{ backgroundColor: btncolor1 }" @click="showContent('content1')">血压</button>
				<button :style="{ backgroundColor: btncolor2 }" @click="showContent('content2')">体温</button>
				<button :style="{ backgroundColor: btncolor3 }" @click="showContent('content3')">心率</button>
			</view>
			<view class="charts-box">
				<qiun-data-charts v-if="selectedContent === 'content1'" type="column" :opts="opts"
					:chartData="chartData" />
				<qiun-data-charts v-if="selectedContent === 'content2'" type="line" :opts="opts2"
					:chartData="chartData2" />
				<qiun-data-charts v-if="selectedContent === 'content3'" type="line" :opts="opts3"
					:chartData="chartData3" />
			</view>
		</view>
		<view class="box">
			<view class="selectbtn" @tap="showheart">
				<image src="../../static/health_data/heart.png"></image>
				<text>心率</text>
			</view>
			<view class="selectbtn" @tap="showtemp">
				<image src="../../static/health_data/temperature.png"></image>
				<text>体温</text>
			</view>
			<view class="selectbtn" @tap="showbp">
				<image src="../../static/health_data/BP.png"></image>
				<text>血压</text>
			</view>
		</view>
		<view v-for="(item, index) in message" :key="index">
			<view class="td1">{{item.date}}</view>
			<view class="td2">{{item.heart}}</view>
			<view class="td3">{{item.temperature}}</view>
			<view class="td4">{{item.dbp}}</view>
			<view class="td4">{{item.sbp}}</view>
		</view>
		<add_heart ref='addheart' @onClickConfirm="Addheart"></add_heart>
		<add_temperature ref='addtemp' @onClickConfirm="Addtemp"></add_temperature>
		<add_bp ref='addbp' @onClickConfirm="Addbp"></add_bp>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="新的数据已覆盖" :duration="5"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import add_heart from '@/components/add_heart/add_heart.vue'
	import add_temperature from '@/components/add_temperature/add_temperature.vue'
	import add_bp from '@/components/add_bp/add_bp.vue'
	export default {
		data() {
			return {

				btncolor1: '#FAC858',
				btncolor2: 'white',
				btncolor3: 'white',
				selectedContent: 'content1', // 初始化显示内容
				lastSevenElements: [],
				message: [{
						date: "2023.11.07",
						heart: 70,
						temperature: 37.0,
						dbp: 70,
						sbp: 110,
					},
					{
						date: "2023.11.08",
						heart: 72,
						temperature: 37.4,
						dbp: 71,
						sbp: 120,
					},
					{
						date: "2023.11.09",
						heart: 64,
						temperature: 36.2,
						dbp: 78,
						sbp: 130,
					},
					{
						date: "2023.11.10",
						heart: 65,
						temperature: null,
						dbp: 76,
						sbp: 100,
					},
					{
						date: "2023.11.11",
						heart: 69,
						temperature: 36.3,
						dbp: 73,
						sbp: 114,
					},
					{
						date: "2023.11.12",
						heart: 64,
						temperature: 37.2,
						dbp: 70,
						sbp: 110,
					},
					{
						date: "2023.11.13",
						heart: null,
						temperature: 36.8,
						dbp: 70,
						sbp: 110,
					},
				],
				add: {
					date: null,
					heart: null,
					temperature: null,
					dbp: null,
					sbp: null,
				},
				chartData: {},
				chartData2: {},
				chartData3: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					color: ["#FAC858", "#EE6666", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 15, 0, 5],
					enableScroll: false,
					legend: {},
					width: 35,
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						data: [{
							min: 0
						}]
					},
					extra: {
						column: {
							type: "group",
							width: 19,
							activeBgColor: "#000000",
							activeBgOpacity: 0.08,
							linearType: "custom",
							seriesGap: 4,
							linearOpacity: 0.5,
							barBorderCircle: true,
							customColor: [
								"#FA7D8D",
								"#EB88E2"
							]
						}
					},
					update: true,
				},
				opts2: {
					color: ["#1890FF"],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					legend: {},
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						splitNumber: 8,
						data: [{
							min: 35,
							max: 39,
						}]
					},
					extra: {
						line: {
							type: "straight",
							width: 2,
							activeType: "hollow"
						}
					}
				},
				opts3: {
					color: [
						"#EE6666"
					],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					legend: {},
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						splitNumber: 6,
						data: [{
							min: 50,
							max: 110,
						}]
					},
					extra: {
						line: {
							type: "straight",
							width: 2,
							activeType: "hollow"
						}
					}
				},


			};
		},
		components: {
			uniPopup,
			add_heart,
			add_temperature,
			add_bp,
		},
		methods: {
			showContent(content) {
				this.selectedContent = content;
				if (content == 'content1') {
					this.btncolor1 = '#FAC858';
					this.btncolor2 = 'white';
					this.btncolor3 = 'white';
				} else if (content == 'content2') {
					this.btncolor1 = 'white';
					this.btncolor2 = '#1890FF';
					this.btncolor3 = 'white';
				} else if (content == 'content3') {
					this.btncolor1 = 'white';
					this.btncolor2 = 'white';
					this.btncolor3 = '#EE6666';
				}
			},
			showheart() {
				this.$refs['addheart'].showModal();
			},
			showtemp() {
				this.$refs['addtemp'].showModal();
			},
			showbp() {
				this.$refs['addbp'].showModal();
			},
			Addheart(data) {
				let stateData = JSON.parse(data)
				console.log(stateData)
				const currentDate = new Date();
				const year = currentDate.getFullYear();
				const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 使用 padStart 格式化月份
				const day = currentDate.getDate().toString().padStart(2, '0');
				const currentTime = year + "." + month + "." + day;
				this.$refs['addheart'].hideModal();
				if (this.message[this.message.length - 1].date != currentTime) {
					this.add.date = currentTime;
					this.add.heart = stateData;
					this.add.temperature = null;
					this.add.dbp = null;
					this.add.sbp = null;
					this.message.push(this.add);
				} else if (this.message[this.message.length - 1].heart == null) {
					this.message[this.message.length - 1].heart = stateData;
				} else {
					this.message[this.message.length - 1].heart = stateData;
					this.$refs['popup'].open('center');
				}
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改健康数据的url
					url: 'http://127.0.0.1:8000/api/user/SendHealthdata/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						healthdata: this.message,
					},
					success: function(response) {
						console.log("修改健康数据成功")
					},
					fail: function(response) {
						console.log("修改健康数据失败")
					}
				})
				this.getServerData();

			},
			Addtemp(data) {
				let stateData = JSON.parse(data)
				console.log(stateData)
				const currentDate = new Date();
				const year = currentDate.getFullYear();
				const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 使用 padStart 格式化月份
				const day = currentDate.getDate().toString().padStart(2, '0');
				const currentTime = year + "." + month + "." + day;
				this.$refs['addtemp'].hideModal();
				if (this.message[this.message.length - 1].date != currentTime) {
					this.add.date = currentTime;
					this.add.heart = null;
					this.add.temperature = stateData;
					this.add.dbp = null;
					this.add.sbp = null;
					this.message.push(this.add);
				} else if (this.message[this.message.length - 1].temperature == null) {
					this.message[this.message.length - 1].temperature = stateData;
				} else {
					this.message[this.message.length - 1].temperature = stateData;
					this.$refs['popup'].open('center');
				}
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改健康数据的url
					url: 'http://127.0.0.1:8000/api/user/SendHealthdata/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						healthdata: this.message,
					},
					success: function(response) {
						console.log("修改健康数据成功")
					},
					fail: function(response) {
						console.log("修改健康数据失败")
					}
				})
				this.getServerData();

			},
			Addbp(data) {
				let stateData = JSON.parse(data)
				console.log(stateData)
				const currentDate = new Date();
				const year = currentDate.getFullYear();
				const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 使用 padStart 格式化月份
				const day = currentDate.getDate().toString().padStart(2, '0');
				const currentTime = year + "." + month + "." + day;
				this.$refs['addbp'].hideModal();
				if (this.message[this.message.length - 1].date != currentTime) {
					this.add.date = currentTime;
					this.add.heart = null;
					this.add.temperature = null;
					this.add.dbp = stateData.dbp;
					this.add.sbp = stateData.sbp;
					this.message.push(this.add);
				} else if (this.message[this.message.length - 1].dbp == null) {
					this.message[this.message.length - 1].dbp = stateData.dbp;
					this.message[this.message.length - 1].sbp = stateData.sbp;
				} else if (this.message[this.message.length - 1].sbp == null) {
					this.message[this.message.length - 1].sbp = stateData.sbp;
					this.message[this.message.length - 1].dbp = stateData.dbp;
				} else {
					this.message[this.message.length - 1].sbp = stateData.sbp;
					this.message[this.message.length - 1].dbp = stateData.dbp;
					this.$refs['popup'].open('center');
				}
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改健康数据的url
					url: 'http://127.0.0.1:8000/api/user/SendHealthdata/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						healthdata: this.message,
					},
					success: function(response) {
						console.log("修改健康数据成功")
					},
					fail: function(response) {
						console.log("修改健康数据失败")
					}
				})
				this.getServerData();

			},
			getServerData() {
				
				
				this.lastSevenElements = [];
				this.lastSevenElements = this.message.slice(-5);
				console.log(this.lastSevenElements)
				let resdate = [];
				let resdbp = [];
				let ressbp = [];
				let resheart = [];
				let restemp = [];
				for (var i = 0; i < 5; i++) {
					resdate.push(this.lastSevenElements[i].date.slice(-5));
					resdbp.push(this.lastSevenElements[i].dbp);
					ressbp.push(this.lastSevenElements[i].sbp);
					resheart.push(this.lastSevenElements[i].heart);
					restemp.push(this.lastSevenElements[i].temperature);
				}

				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: resdate,
					series: [{
							name: "舒张压",
							data: resdbp
						},
						{
							name: "收缩压",
							data: ressbp
						}
					]
				};

				let res2 = {
					categories: resdate,
					series: [{
						name: "体温",
						data: restemp
					}]
				};

				let res3 = {
					categories: resdate,
					series: [{
						name: "心率",
						data: resheart
					}]
				};

				this.chartData = JSON.parse(JSON.stringify(res));
				this.chartData2 = JSON.parse(JSON.stringify(res2));
				this.chartData3 = JSON.parse(JSON.stringify(res3));

			},
		},
		onLoad() {
			this.openid = getApp().globalData.global_openid
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为获取健康数据的url
				url: 'http://127.0.0.1:8000/api/user/getGuardianInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid: this.openid,
				},
				success: function(response) {
					console.log("获取健康数据成功")
					this.message = response.data.code.Healthdata;
				},
				fail: function(response) {
					console.log("修改健康数据失败")
				}
			})
			this.getServerData();
		}
	}
</script>

<style lang="scss">
	.chart {
		margin-left: 4%;
		width: 92%;
		height: 500rpx;
		border-radius: 15px;
		box-shadow: 1px 1px 2px 2px rgba(125, 125, 125, 0.1);
		background-color: white;

	}

	.chartbtn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
	}

	.chartbtn button {
		height: 80rpx;
		width: 140rpx;
		font-size: 32rpx;
		margin: 0;
	}

	.charts-box {
		width: 100%;
		height: 400rpx;
	}

	.box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

	}

	.selectbtn {
		width: 44%;
		height: 320rpx;
		margin-left: 4%;
		margin-top: 30rpx;
		background-color: white;
		display: flex;
		font-size: 35rpx;
		border-radius: 15px;
		box-shadow: 1px 1px 2px 2px rgba(125, 125, 125, 0.1);

	}

	.selectbtn image {
		margin-top: 35rpx;
		margin-left: 40rpx;
		margin-right: 15rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.selectbtn text {
		margin-top: 35rpx;
		align-self: baseline;
		font-weight: 800;
	}
</style>