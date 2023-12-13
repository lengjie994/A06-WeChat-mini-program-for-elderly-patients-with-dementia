<template>
	<view>
		<view >预约时段</view>
		<view class="doctorinfo">
			<view style="font-weight: 600;">{{doctor.name}}医生</view>
			<view style="color: gainsboro;font-size: 32rpx;margin-top: 20rpx;">简介：{{doctor.intro}}</view>
		</view>
		<scroll-view class="scroll-view" :scroll-y="true" :scroll-top="scrollTop" ref="scrollView">
			<view class="table">
				<view class="tr" v-for="(item, index) in surplus" :key="index">
					<view class="td1">{{item.time}}</view>
					<view class="td2">余号：{{item.num}}</view>
					<view class="td3">
						<view v-if="item.num === 0">
							<button class="cant">预约</button>
						</view>
						<view v-else>
							<button class="can" @click="goto_success_reservation(item.time)">预约</button>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctor:{
					name: "王大智",
					intro: "甲亢、甲减、多囊卵巢、代谢异常、甲状腺功能失调、甲状腺激素异常等引起的不孕不育症的治疗和孕期管理、生活指导，在治疗各种代谢内分泌异常方面有丰富的临床经验。",
					hospital: "12",
					addr: "sdaf",
					career: "adgasg",
					
				},
				surplus: [{
						time: "8:00-9:00",
						num: 0,
					},
					{
						time: "9:00-10:00",
						num: 0,
					},
					{
						time: "10:00-11:00",
						num: 2,
					},
					{
						time: "11:00-12:00",
						num: 2,
					},
					{
						time: "13:00-14:00",
						num: 3,
					},
					{
						time: "14:00-15:00",
						num: 0,
					},
				],
			};
		},
		methods: {
			goto_success_reservation(data) {
				
				uni.navigateTo({
					url: '/pages/success_reservation/success_reservation?param1='+data
				})
				//这里需要将预约信息传递给后端，由后端将预约信息记录在监护人和医生数据下
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为传递预约信息的url
					url: 'http://127.0.0.1:8000/api/user/login/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						reservation:this.reservation,
					},
					success: function(response) {
						console.log("传递预约信息成功")
					},
					fail: function(response) {
						console.log("传递预约信息失败")
					}
				})
			},
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
			console.log(this.openid)
			//需要向后端获取医生信息
		}
		
	}
</script>

<style lang="scss">
	.doctorinfo {
		width: 86%;
		margin-left: 7%;
	}
	.scroll-view {
		margin-top: 20rpx;
	    height:980rpx;
	}
	.table {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		/* 排列形式: 向下 */
	}
	
	.tr {
		display: flex;
		flex-direction: row;
		width: 92%;
	}
	
	.td1,.td2,.td3 {
		/* 公有的属性 */
		display: flex;
		flex-direction: column;
		text-align: left;
		flex-wrap: wrap;
		/* 自动换行 */
		height: 140rpx;
		text-align: center;
		/* 文本居中 */
		align-items: center;
		/* 交叉轴居中 */
		justify-content: center;
		/* 主轴居中 */
		font-size: 32rpx;
	}
	.td1,.th1{
		width: 40%;
	}
	.td2,.th2{
		width: 30%;
	}
	.td3,.th3{
		width: 30%;
	}
	.cant, .can {
		height: 60rpx;
		width: 140rpx;
		font-size: 32rpx;
	}
	.cant {
		background-color: darkgray;
	}
	.can {
		background-color: royalblue;
	}
</style>