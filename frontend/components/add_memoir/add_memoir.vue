<template>
	<uni-popup ref="customModal" type="center">
		<view class="model-wraper">
			<view class="modal-body">
				<view class="style-font">文本内容</view>
				<!-- <input v-model="inputSerialNum" class="uni-input input-style" focus placeholder="请输入备注" /> -->
				<textarea v-model="inputtext" class=" input-style"></textarea>

				<view class="content">
					<!-- 上传图片 -->
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" :multiple="true"
						:maxCount="10" uploadIcon="plus" uploadIconColor="#0086ff" width="158rpx" height="154rpx"
						:deletable="true" :previewImage="true">
					</u-upload>
				</view>


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
			// note: {
			// 	type: Object,
			// 	default: ''
			// },
		},
		data() {
			return {
				isShowModal: false,
				inputtext: "",
				inputphone: "",
				composition: {},

				fileList1: [],

			}
		},
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.uUpload = this.$refs.uUpload;
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

				this.$set(this.composition, 'text', this.inputtext);
				
				console.log(this.fileList1)
				var list2 = []
				return new Promise((resolve, reject) => {
					let len = this.fileList1.length
					let timer = null
					for (let i = 0; i < this.fileList1.length; i++) {
						var imgItem = this.fileList1[i];

						console.log("filePath:", imgItem.size, imgItem.url);


						wx.uploadFile({
							url: getApp().globalData.base_url + '/UploadImage/', // 接口地址
							filePath: imgItem.url,
							name: 'image',
							header: {
								"content-type": "multipart/form-data"
							},
							formData: {},
							success: res => {
								var json = JSON.parse(res.data) // 此处转换
								console.log(json)
								list2.push(json.msg)
								//do something
							},
							fail: res => {
								const data = res.data
								console.log("失败");
								//do something
							},

							complete: res => {
								console.log('完成..: ' + len)
								len--; // 不论success还是fail，都把len-1

								//do something
							}
						})
					}
					// 关键部分
					// 通过此部分来延续方法的时长，待到异步的回调执行完毕后则关闭
					// 以防万一，建议设定一个阈值，防止出现意外导致无限循环
					timer = setInterval(() => {
						console.log(len);
						if (!len || len < -5000) { // 只要len结束，将定时器清除
							console.log("同步结束");
							resolve(list2)
							console.log(list2)
							// this.isShowModal = false
							
							this.$set(this.composition, 'img', list2);
							this.$emit('onClickConfirm', JSON.stringify(this.composition))
							//this.$refs['customModal'].close();
							this.fileList1 = []
							this.inputtext = ""
							clearInterval(timer) // 上传操作完成，消除阻塞
						}
					}, 1) // 这个参数一定要写，如果不写在IOS端会报错导致同步失败
					
				}, 50);
			},
			//删除图片
			deletePic(e) {
				console.log(e);
				this[`fileList${e.name}`].splice(e.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				console.log(event)
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'success',
						message: '上传中',
					})
				})
			},
			// //上传图片
			// uploadFilePromise(url) {
			// 	return new Promise((resolve, reject) => {
			// 		let a = uni.uploadFile({
			// 			//url: this.$common.domain+'/api/common/upload', // 仅为示例，非真实的接口地址
			// 			url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
			// 			filePath: url,
			// 			name: 'file',
			// 			formData: {
			// 				user: 'test'
			// 			},
			// 			success: (res) => {
			// 				setTimeout(() => {
			// 					resolve(res.data.data)
			// 				}, 1000)
			// 			}
			// 		});
			// 	})
			// },



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
		margin: 10rpx 30rpx;
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
		margin: 0rpx 30rpx;
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