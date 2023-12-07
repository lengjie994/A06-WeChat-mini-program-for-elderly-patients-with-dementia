<template>
	<uni-popup ref="customModal" type="center">
		<view class="model-wraper">
			<view class="modal-body">
				<view class="style-font">今日心率</view>
				<!-- <input v-model="inputSerialNum" class="uni-input input-style" focus placeholder="请输入备注" /> -->
				<input v-model="inputheart" class=" input-style-name" placeholder="暂无"></input>
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

<<<<<<< HEAD
		props: {
=======
		props: {
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
			
		},
		data() {
			return {
				isShowModal: false,
				inputheart: null,
			}
		},
		methods: {
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
<<<<<<< HEAD
				// this.isShowModal = false
				console.log(this.inputheart)
				this.$emit('onClickConfirm',JSON.stringify(this.inputheart))
				//this.$refs['customModal'].close();
=======
				// this.isShowModal = false
				console.log(this.inputheart)
				this.$emit('onClickConfirm',JSON.stringify(this.inputheart))
				//this.$refs['customModal'].close();
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
				this.inputheart = '';
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
		top: 20%;
		left: 50%;
		margin-top: -500rpx;
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

<<<<<<< HEAD
	.btn {
		display: flex;
		justify-content: center;
=======
	.btn {
		display: flex;
		justify-content: center;
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
		align-items: center;
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
<<<<<<< HEAD
	}
	.input-style-name {
		border: 1rpx solid #ddd;
		border-radius: 10rpx;
		/* height: 100rpx; */
		height: 50rpx;
		padding: 10rpx;
		font-size: 30rpx;
		width: auto;
=======
	}
	.input-style-name {
		border: 1rpx solid #ddd;
		border-radius: 10rpx;
		/* height: 100rpx; */
		height: 50rpx;
		padding: 10rpx;
		font-size: 30rpx;
		width: auto;
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799
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

