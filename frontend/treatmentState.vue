<template>
	<uni-popup ref="customModal" type="center">
		<view class="model-wraper">
			<view class=" relative-navigation">
				<view class="left-title style-font">绑定状态</view>
			</view>
			<view class="statu-frame">
				<view v-bind:class='{selectColor:1==isactive}' @click='selectStatus(1)'>
					<!-- <icon class="img-stytle" size="15" :type="iconType[0]" /> -->
					<image class="img-stytle" src="/static/c1.png" />
					待绑定
				</view>
				<view v-bind:class='{selectColor:2==isactive}' @click='selectStatus(2)'>
					<!-- <icon class="img-stytle" size="15" :type="iconType[1]" /> -->
					<image class="img-stytle" src="/static/c2.png" />
					已绑定
				</view>
				<view v-bind:class='{selectColor:0==isactive}' @click='selectStatus(0)'>
					<!-- <icon class="img-stytle" size="15" :type="iconType[2]" /> -->
					<image class="img-stytle" src="/static/c3.png" />
					解绑中
				</view>
			</view>

			<view class="modal-body">
				<view class="style-font">监护人账号</view>
				<!-- <input v-model="inputSerialNum" class="uni-input input-style" focus placeholder="请输入备注" /> -->
				<input v-model="inputRemark" class=" input-style" placeholder="暂无"></input>
			</view>

			<view>
				<view class="btn cancel" :style="{'color': cancelTextColor}" @click="handleCancel">{{cancelText}}</view>
				<view class="btn confirm" :style="{'color': confirmTextColor}" @click="handleConfirm">{{confirmText}}
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {

		props: {
			// 获取行数据
			dataLineDetail:{
				type: Object,
				default: ''
			},
			// 蒙层背景色
			bgColor: {
				type: String,
				default: 'rgba(0,0,0,.6)'
			},
			// 模态框标题
			modalTitle: {
				type: String,
				default: ''
			},
			// 取消按钮文字
			cancelText: {
				type: String,
				default: '取消'
			},
			// 确定按钮文字
			confirmText: {
				type: String,
				default: '确定'
			},
			// 取消按钮文字颜色
			cancelTextColor: {
				type: String,
				default: '#666'
			},
			// 确定按钮文字颜色
			confirmTextColor: {
				type: String,
				default: '#5999FF'
			}
		},
		data() {
			return {
				isShowModal: false,
				inputRemark: null,
				isactive: 0,
				total: 0,
				iconType: ['waiting', 'success', 'cancel'],
				
			}
		},
		methods: {
			// 选择更新的状态
			selectStatus(data) {
				//状态  0未处理 1待处理 2已完成  3全部
				
				this.isactive = data;
				console.log(this.isactive+"打印选择的状态=" + data)
			},
			hideModal() {
				// this.isShowModal = true
				this.$refs['customModal'].close();
			},
			showModal() {
				// this.isShowModal = true
				this.$refs['customModal'].open();
			},
			handleCancel() {
				// this.isShowModal = false
				this.$refs['customModal'].close();
				this.$emit('onClickCancel', 'cancel')
			},
			handleConfirm() {
				
				this.$set(this.dataLineDetail,'remark',this.inputRemark);
				this.$set(this.dataLineDetail,'status',this.isactive );
				this.$set(this.dataLineDetail,'phoneNums',this.total);
				this.$set(this.dataLineDetail,'time',this.getTime());
				
				// this.isShowModal = false
				this.$emit('onClickConfirm',JSON.stringify(this.dataLineDetail))
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

