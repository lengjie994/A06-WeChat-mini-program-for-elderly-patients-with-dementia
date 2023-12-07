<<<<<<< HEAD
<template>
	<view>
		<button @click="goto_reservetime">添加预约</button>
		<scroll-view class="scroll-view" :scroll-y="true" :scroll-top="scrollTop" ref="scrollView">
			<view class="table">
				<view class="tr" v-for="(item, index) in message" :key="index">
					<view class="td1">
						<view>{{item.doctor}}</view>
						<view>
							<view v-if="item.state === 0" style="color: blue;font-weight: 500;">待就诊</view>
							<view v-if="item.state === 1" style="font-weight: 500;">已就诊</view>
							<view v-if="item.state === 2" style="color: gray;font-weight: 500;">已取消</view>
						</view>
					</view>
					<view class="td2">
						<view>{{item.hospital}}</view>
						<view>{{item.department}}</view>
					</view>
					<view class="td3">
						<view>擅长：{{item.skill}}</view>
					</view>
					<view class="divider"></view>
					<view class="td4">
						<view class="p">就诊人：</view>
						<view>{{item.patient}}</view>
						<view>{{item.date}}</view>
						<view>{{item.time}}</view>
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
				message: [{
					doctor: "王医生",
					hospital: "北京大学第一医院",
					department: "心血管内科",
					skill: "心血管疾病、心脏病、冠心病……",
					patient: "李先生",
					state: 0,
					date: "2023-12-02",
					time: "下午",
				}],
				scrollTop: 0,
			};
		},
		methods: {
			goto_reservetime() {
				uni.navigateTo({
					url: '/pages/guardian_reservetime/guardian_reservetime'
				})
			},
		}
	}
</script>

<style lang="scss">
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
		width: 92%;
		border-radius: 5px;
		box-shadow: 0px 0px 2px 2px rgba(46, 89, 167, 0.2);
		background-color: white;
		height: 260rpx;
	}
	.td1,.td2,.td3,.td4 {
		display: flex;
		flex-direction: row;
	}
	.td1 {
		margin-top: 8rpx;
		justify-content: space-between; /* 两端对齐 */
	}
	.td1 view,.td2 view,.td3 view,.td4 view{
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 6rpx;
		margin-bottom: 6rpx;
	}
	.td1 view {
		font-size: 38rpx;
		font-weight: 600;
	}
	.td2 view {
		font-size: 32rpx;
		font-weight: 500;
		color: gray;
	}
	.td3 view {
		font-size: 32rpx;
		font-weight: 500;
		color: gainsboro;
	}
	.p {
		color: gainsboro;
		font-weight: 600;
	}
	.td4 view {
		font-size: 34rpx;
	}
	
	.divider {
		height: 2rpx;
		width: 94%;
		background-color: rgba(75, 92, 196, 0.3);
		margin-top: 12rpx;
		margin-bottom: 12rpx;
		margin-left: 3%;
	}
=======
<template>
	<view>
		<button @click="goto_reservetime">添加预约</button>
		<scroll-view class="scroll-view" :scroll-y="true" :scroll-top="scrollTop" ref="scrollView">
			<view class="table">
				<view class="tr" v-for="(item, index) in message" :key="index">
					<view class="td1">
						<view>{{item.doctor}}</view>
						<view>
							<view v-if="item.state === 0" style="color: blue;font-weight: 500;">待就诊</view>
							<view v-if="item.state === 1" style="font-weight: 500;">已就诊</view>
							<view v-if="item.state === 2" style="color: gray;font-weight: 500;">已取消</view>
						</view>
					</view>
					<view class="td2">
						<view>{{item.hospital}}</view>
						<view>{{item.department}}</view>
					</view>
					<view class="td3">
						<view>擅长：{{item.skill}}</view>
					</view>
					<view class="divider"></view>
					<view class="td4">
						<view class="p">就诊人：</view>
						<view>{{item.patient}}</view>
						<view>{{item.date}}</view>
						<view>{{item.time}}</view>
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
				message: [{
					doctor: "王医生",
					hospital: "北京大学第一医院",
					department: "心血管内科",
					skill: "心血管疾病、心脏病、冠心病……",
					patient: "李先生",
					state: 0,
					date: "2023-12-02",
					time: "下午",
				}],
				scrollTop: 0,
			};
		},
		methods: {
			goto_reservetime() {
				uni.navigateTo({
					url: '/pages/guardian_reservetime/guardian_reservetime'
				})
			},
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
			console.log(this.openid)
		}
	}
</script>

<style lang="scss">
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
		width: 92%;
		border-radius: 5px;
		box-shadow: 0px 0px 2px 2px rgba(46, 89, 167, 0.2);
		background-color: white;
		height: 260rpx;
	}
	.td1,.td2,.td3,.td4 {
		display: flex;
		flex-direction: row;
	}
	.td1 {
		margin-top: 8rpx;
		justify-content: space-between; /* 两端对齐 */
	}
	.td1 view,.td2 view,.td3 view,.td4 view{
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 6rpx;
		margin-bottom: 6rpx;
	}
	.td1 view {
		font-size: 38rpx;
		font-weight: 600;
	}
	.td2 view {
		font-size: 32rpx;
		font-weight: 500;
		color: gray;
	}
	.td3 view {
		font-size: 32rpx;
		font-weight: 500;
		color: gainsboro;
	}
	.p {
		color: gainsboro;
		font-weight: 600;
	}
	.td4 view {
		font-size: 34rpx;
	}
	
	.divider {
		height: 2rpx;
		width: 94%;
		background-color: rgba(75, 92, 196, 0.3);
		margin-top: 12rpx;
		margin-bottom: 12rpx;
		margin-left: 3%;
	}
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
</style>