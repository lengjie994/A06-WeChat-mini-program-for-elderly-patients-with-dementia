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
				message: [],
				add: {},
				scrollTop: 0,
				openid:"",
				patient_openid:"",
			};
		},
		components: {
			add_pill,
			delete_pill,
		},
		onLoad(){
			let _this=this;
			this.openid=getApp().globalData.global_openid
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为绑定患者账号的url
				url: getApp().globalData.base_url+'/getGuardianInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid:this.openid,
				},
				success: function(response) {
					console.log("获取药物列表成功")
					_this.message=response.data.code.Medicine;
					if(_this.message==null){
						_this.message=[]
					}
					_this.patient_openid=response.data.code.Patient_openid
					console.log(response)
				},
				fail: function(response) {
					console.log("获取药物列表失败")
				}
			})
		
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
				let _this=this;
				let stateData = JSON.parse(data)
				console.log(stateData.name)
				console.log(stateData.count)
				console.log(stateData.dailycount)
				console.log(stateData.time)
				_this.add = {
					pill: stateData.name,
					count: stateData.count,
					dailycount: stateData.dailycount,
					time: stateData.time,
				};
				console.log(_this.add)
				console.log(_this.message)
				_this.message.push(_this.add);
				this.$refs['addpill'].hideModal();
				//这里需要将服药提醒的内容传递给后端，由后端发送给患者并在患者部分显示
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为编辑服药提醒的url
					url: getApp().globalData.base_url+'/SendReminder/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid:this.openid,
						reminder:this.message,
					},
					success: function(response) {
						console.log("编辑服药提醒成功")
					},
					fail: function(response) {
						console.log("编辑服药提醒失败")
					}
				})
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为编辑服药提醒的url
					url: getApp().globalData.base_url+'/SendOfficialReminder/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid:this.patient_openid,
						time:stateData.time,
						name:stateData.name,
					},
					success: function(response) {
						console.log(response)
						console.log("设置服药提醒成功")
					},
					fail: function(response) {
						console.log("设置服药提醒失败")
					}
				})
			},
			Deletepill(data) {
				let _this=this;
				let stateData = JSON.parse(data)
				console.log(stateData)
				_this.message.splice(stateData, 1);
				this.$refs['deletepill'].hideModal();
				//这里需要将删除的药名发送给后端，由后端删除该药物的服药提醒，并告知患者界面，患者界面删除该提醒
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为编辑服药提醒的url
					url: getApp().globalData.base_url+'/SendReminder/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid:this.openid,
						reminder:this.message,
					},
					success: function(response) {
						console.log("删除服药提醒成功")
					},
					fail: function(response) {
						console.log("删除服药提醒失败")
					}
				})
				let param=this.patient_openid+stateData.name
				//调用后端取消提醒接口
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为编辑服药提醒的url
					url: getApp().globalData.base_url+'/SendReminder/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						param:param,
					},
					success: function(response) {
						console.log("删除服药提醒成功")
					},
					fail: function(response) {
						console.log("删除服药提醒失败")
					}
				})
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