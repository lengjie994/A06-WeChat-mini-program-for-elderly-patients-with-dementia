<template>
	<uni-popup ref="customModal" type="center">
		<view class="model-wraper">
			<view class="modal-body">
				<view class="style-font">姓名</view>
				<!-- <input v-model="inputSerialNum" class="uni-input input-style" focus placeholder="请输入备注" /> -->
				<input v-model="inputname" class=" input-style-name" :placeholder="name"></input>
				<view class="style-font">住址</view>
				<!-- <input v-model="inputSerialNum" class="uni-input input-style" focus placeholder="请输入备注" /> -->
				<textarea v-model="inputplace" class=" input-style" :placeholder="addr"></textarea>
				<view class="style-font">紧急联系人</view>
				<!-- <input v-model="inputSerialNum" class="uni-input input-style" focus placeholder="请输入备注" /> -->
				<textarea v-model="inputphone" class=" input-style" :placeholder="phone"></textarea>
			</view>

			<view>
				<view class="btn cancel" :style="{'color': '#666'}" @click="handleCancel">取消</view>
				<view class="btn confirm" :style="{'color': '#5999FF'}" @click="handleConfirm">确定</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {

		props: {
			note: {
				type: Object,
				default: ''
			},
		},
		data() {
			return {
				isShowModal: false,
				inputname: null,
				inputplace:null,
				inputphone:null,
				name:"",
				addr:"",
				phone:"",
				isactive: 0,
				total: 0,
				iconType: ['waiting', 'success', 'cancel'],
				
			}
		},
		methods: {
			hideModal() {
				// this.isShowModal = true
				this.$refs['customModal'].close();
			},
			showModal() {
				// this.isShowModal = true
				this.openid=getApp().globalData.global_openid
				let _this=this;
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为绑定患者账号的url
					url: getApp().globalData.base_url+'/getGuardianInfo/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
					},
					success: function(response) {
						console.log("获取备忘录成功")
						_this.name=response.data.code.Name;
						_this.addr=response.data.code.Address;
						_this.phone=response.data.code.Phone_contact;
						if(_this.name==null||_this.name=="UNDEFINED")
						{
							_this.name="暂无"
						}
						if(_this.addr==null||_this.addr=="UNDEFINED")
						{
							_this.addr="暂无"
						}
						if(_this.phone==null||_this.phone=="UNDEFINED")
						{
							_this.phone="暂无"
						}
						console.log(response)
					},
					fail: function(response) {
						console.log("获取备忘录失败")
					}
				})
				this.$refs['customModal'].open();
			},
			handleCancel() {
				// this.isShowModal = false
				this.$refs['customModal'].close();
				this.$emit('onClickCancel', 'cancel')
			},
			handleConfirm() {
				
				this.$set(this.note,'name',this.inputname);
				this.$set(this.note,'place',this.inputplace);
				this.$set(this.note,'phone',this.inputphone);
				this.inputname=""
				this.inputplace=""
				this.inputphone=""
				// this.isShowModal = false
				this.$emit('onClickConfirm',JSON.stringify(this.note))
				//this.$refs['customModal'].close();
			}
		}
	}
</script>

<style scoped>
	.model-wraper {
		width: 600rpx;
		background-color: #fff;
		border-radius: 16rpx;
		position: absolute;
		z-index: 1000;
		top: 50%;
		left: 50%;
		margin-top: -300rpx;
		margin-left: -300rpx;
		box-shadow: #dcdcdc 0px 0px 20rpx;
	}

	.modal-title {
		height: 90rpx;
		line-height: 90rpx;
		width: 100%;
		text-align: center;
		font-size: 32rpx;
		color: #666;
	}

	.modal-body {
		/* padding: 30rpx 30rpx 80rpx 30rpx; */
		margin:10rpx 30rpx;
	}

	.btn {
		width: 300rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		float: left;
		border-top: 1rpx solid #ddd;
	}

	.btn.cancel {
		width: 299rpx;
		border-right: 1rpx solid #dcdcdc;
	}


	/* -----自定义----- */
	.relative-navigation {
		margin:0rpx 30rpx ;
		/* font-weight: bold; */
		position: relative;
		/* padding-top: 10rpx; */
		height: 50rpx;
	}

	.left-title {
		position: absolute;
		/* left: 10rpx; */
	}

	.right-title {
		position: absolute;
		right: 5%;
		color: #10AEFF;
	}

	.statu-frame {
		border: 1rpx solid #ddd;
		margin: 0rpx 30rpx;
		border-radius: 10rpx;

	}

	.statu-frame view {
		width: 100%;
		text-align: center;
		/* display: flex;
		justify-content: center */
			/* display: block; */
	}

	.selectColor {
		background-color: #4C91F0;
		color: #ffffff;
	}

	.input-style {
		border: 1rpx solid #ddd;
		border-radius: 10rpx;
		/* height: 100rpx; */
		height: 200rpx;
		padding: 10rpx;
		font-size: 30rpx;
		width: auto;
	}
	.input-style-name {
		border: 1rpx solid #ddd;
		border-radius: 10rpx;
		/* height: 100rpx; */
		height: 50rpx;
		padding: 10rpx;
		font-size: 30rpx;
		width: auto;
	}

	.style-font {
		color: #A1AAA9;
		font-size: 28rpx;
	}
	
	.img-stytle {
		padding-right: 10rpx;
		width: 32rpx;
		height: 32rpx;
		margin-right: 10rpx;
	}
</style>

