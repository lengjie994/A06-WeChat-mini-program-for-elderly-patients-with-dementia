<template>
	<view>
		<view class="btn">
			<button @tap="showadd()">添加服药提醒</button>
			<button @tap="showdelete()">删除服药提醒</button>
		</view>
		<scroll-view class="scroll-view" :scroll-y="true" :scroll-top="scrollTop" ref="scrollView">
			<view class="table">
				<view class="tr">
					<view class="th1">当前用药</view>
					<view class="th2">每次剂量</view>
					<view class="th3">每日剂次</view>
					<view class="th4">提醒时间</view>
				</view>
				<view class="tr" v-for="(item, index) in message" :key="index">
					<view class="td1">{{item.pill}}</view>
					<view class="td2">{{item.count}}</view>
					<view class="td3">{{item.dailycount}}</view>
					<view class="td4">{{item.time}}</view>
				</view>
			</view>
		</scroll-view>
		<!-- 弹出框模块 -->
		<add_pill ref='addpill' :add="add" @onClickConfirm="Addpill"></add_pill>
		<delete_pill ref='deletepill' :message="message" :deleteindex="deleteindex" @onClickConfirm="Deletepill">
		</delete_pill>
	</view>
</template>

<script>
	import add_pill from '@/components/add_pill/add_pill.vue'
	import delete_pill from '@/components/delete_pill/delete_pill.vue'
	export default {
		data() {
			return {
				message: [{
					pill: "奥拉西坦胶囊",
					count: "一次一粒",
					dailycount: "3",
					time: "08:00，12:00，18:00",
				}],
				add: {},
				scrollTop: 0,
			};
		},
		components: {
			add_pill,
			delete_pill,
		},
		methods: {
			// 根据自己项目，在某个事件触发弹框弹出,注意！！！$refs后面直接跟[],不需要.
			showadd() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['addpill'].showModal();
			},
			showdelete() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['deletepill'].showModal();
			},
			// 点击确定按钮，弹出框隐藏 
			Addpill(data) {
				let stateData = JSON.parse(data)
				console.log(stateData.name)
				console.log(stateData.count)
				console.log(stateData.dailycount)
				console.log(stateData.time)
				this.add = {
					pill: stateData.name,
					count: stateData.count,
					dailycount: stateData.dailycount,
					time: stateData.time,
				};
				this.message.push(this.add);
				this.$refs['addpill'].hideModal();
			},
			Deletepill(data) {
				let stateData = JSON.parse(data)
				console.log(stateData)
				this.message.splice(stateData, 1);
				this.$refs['deletepill'].hideModal();
			},
		}
	}
</script>

<style lang="scss">
	.btn {
		display: flex;
		height: 10%;
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

	.th1,.th2,.th3,.th4,
	.td1,.td2,.td3,.td4 {
		/* 公有的属性 */
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		/* 自动换行 */
		height: 140rpx;
		text-align: center;
		/* 文本居中 */
		align-items: center;
		/* 交叉轴居中 */
		justify-content: center;
		/* 主轴居中 */
		border-top: 1px solid #dadada;
		/* 单元格上线框 */
		border-bottom: 1px solid #dadada;
		/* 单元格下线框 */
		border-left: 1px solid #dadada;
		/* 单元格左线框 */
		border-right: 1px solid #dadada;
		/* 单元格右线框 */

		font-size: 32rpx;
	}
	.td1,.th1{
		width: 32%;
	}
	.td2,.th2{
		width: 24%;
	}
	.td3,.th3{
		width: 10%;
	}
	.td4,.th4{
		width: 34%;
	}

	.th1,.th2,.th3,.th4 {
		font-weight: 800;
		/* 字体加重 */
		background-color: #B3CCF4;
		/* 背景色 */
		height: 80rpx;
	}

	.td1,.td2,.td3,.td4 {
		text-align: left;
	}
</style>