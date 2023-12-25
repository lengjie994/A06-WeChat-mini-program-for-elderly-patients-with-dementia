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
					loadingType = 0
					:chartData="chartData" />
				<qiun-data-charts v-if="selectedContent === 'content2'" type="line" :opts="opts2"
					loadingType = 0
					:chartData="chartData2" />
				<qiun-data-charts v-if="selectedContent === 'content3'" type="line" :opts="opts3"
					loadingType = 0
					:chartData="chartData3" />
			</view>
		</view>
		<view class="box">
			<view class="selectbtn">
				<view class="icon">
					<image src="../../static/health_data/heart.png"></image>
					<text>心率</text>
				</view>
				<text class="show" style="color: #EE6666;">{{lastSevenElements.length==0?"暂无":lastSevenElements[lastSevenElements.length-1].heart}}</text>
			</view>
			<view class="selectbtn">
				<view class="icon">
					<image src="../../static/health_data/temperature.png"></image>
					<text>体温</text>
				</view>
				<text class="show" style="color: #1890FF;">{{lastSevenElements.length==0?"暂无":lastSevenElements[lastSevenElements.length-1].temperature}}</text>
			</view>
			<view class="selectbtn">
				<view class="icon">
					<image src="../../static/health_data/BP.png"></image>
					<text>血压</text>
				</view>
				<text class="show" style="color: #FAC858;">{{lastSevenElements.length==0?"暂无":lastSevenElements[lastSevenElements.length-1].dbp}}{{lastSevenElements.length==0?"":"/"}}{{lastSevenElements.length==0?"":lastSevenElements[lastSevenElements.length-1].sbp}}</text>
			</view>
		</view>
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
				openid: "",
				btncolor1: '#FAC858',
				btncolor2: 'white',
				btncolor3: 'white',
				selectedContent: 'content1', // 初始化显示内容
				lastSevenElements: [],
				message: [],
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
		onLoad() {
			this.openid = getApp().globalData.global_openid;
			this.getServerData();
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

			getServerData() {
				let _this = this
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改健康数据的url
					url: getApp().globalData.base_url+'/getPatientInfo/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
					},
					success: function(response) {
						console.log(response)
						_this.message = response.data.code.Healthdata;

						console.log("患者获取健康数据成功")
						//模拟从服务器获取数据时的延时

						_this.lastSevenElements = [];
						if(_this.message==[] || _this.message==null)
						{
							_this.message=[]
							return;
						}
						let resdate = [];
						let resdbp = [];
						let ressbp = [];
						let resheart = [];
						let restemp = [];
						if(_this.message.length<5)
						{
							let num=_this.message.length
							_this.lastSevenElements = _this.message.slice(-num);
							console.log(_this.lastSevenElements)

							for (var i = 0; i < _this.message.length; i++) {
								
								resdate.push(_this.lastSevenElements[i].date.slice(-num));
								resdbp.push(_this.lastSevenElements[i].dbp);
								ressbp.push(_this.lastSevenElements[i].sbp);
								resheart.push(_this.lastSevenElements[i].heart);
								restemp.push(_this.lastSevenElements[i].temperature);
							}
						}
						else if(_this.message.length>=5){
							_this.lastSevenElements = _this.message.slice(-5);
							console.log(_this.lastSevenElements)
	
							for (var i = 0; i < 5; i++) {
								resdate.push(_this.lastSevenElements[i].date.slice(-5));
								resdbp.push(_this.lastSevenElements[i].dbp);
								ressbp.push(_this.lastSevenElements[i].sbp);
								resheart.push(_this.lastSevenElements[i].heart);
								restemp.push(_this.lastSevenElements[i].temperature);
							}
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

						_this.chartData = JSON.parse(JSON.stringify(res));
						_this.chartData2 = JSON.parse(JSON.stringify(res2));
						_this.chartData3 = JSON.parse(JSON.stringify(res3));
					},
					fail: function(response) {
						console.log("患者获取健康数据失败")
					}
				})

			},
		},
	}
</script>

<style lang="scss">
	.show {
		font-size: 80rpx;
		margin-left: 10%;
	}

	.chart {
		margin-top: 20rpx;
		margin-left: 4%;
		width: 92%;
		height: 50vh;
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
		height: 40vh;
	}

	.box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.selectbtn {
		width: 44%;
		height: 20vh;
		margin-left: 4%;
		margin-top: 30rpx;
		background-color: white;
		font-size: 35rpx;
		border-radius: 15px;
		box-shadow: 1px 1px 2px 2px rgba(125, 125, 125, 0.1);

	}
	.icon{
		width: 100%;
		height: 8vh;
		background-color: white;
		display: flex;
		font-size: 35rpx;
		border-radius: 15px;
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