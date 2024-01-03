<template>
	<view class="content1">
		<view class="add_new">
			<view class="add_image" @tap="onClickShow()">
				<view class="iconfont icon-add-circle"></view>
			</view>
			<view class="prompt">
				<text>点击左侧图标新建回忆录</text>
			</view>
		</view>
		<scroll-view class="scroll-view" :scroll-y="true" :scroll-top="scrollTop" ref="scrollView">
			<view v-for="(message, index) in messages" :key="index" style="margin-top: 30rpx;">
				<!-- <view style="display: flex;flex-direction: column;margin-left: 10%;">
					<text class="text">{{message.text}}</text>
					<text class="time">{{message.time}}</text>
				</view>
				
				<view class="onepiece">
					<fui-grid :columns="3" showBorder=false >
						<fui-grid-item v-for="(item,index1) in message.urls" :key="index1" highlight=false>
							<view class="fui-grid__cell">
								<image :src="item" class="fui-icon" mode="widthFix"></image>
							</view>
						</fui-grid-item>
					</fui-grid>
				</view> -->
				<fui-card :tag="message.time">
					<view style="margin-left: 5%;margin-bottom: 20rpx;margin-top: 20rpx;">
						<text class="text">{{message.text}}</text>
					</view>
					
					<view class="onepiece">
						<fui-grid :columns="3" showBorder=false >
							<fui-grid-item v-for="(item,index1) in message.urls" :key="index1" highlight=false>
								<view class="fui-grid__cell">
									<image :src="item" class="fui-icon" mode="widthFix"></image>
								</view>
							</fui-grid-item>
						</fui-grid>
					</view>
					<view style="height: 20rpx;"></view>
				</fui-card>
				
			</view>

		</scroll-view>
		<add_memoir ref='customModal' :memoir="memoir" @onClickConfirm="onClickConfirm"></add_memoir>
	</view>
</template>

<script>
	import add_memoir from '@/components/add_memoir/add_memoir.vue'
	import fuiGrid from "firstui-uni/firstui/fui-grid/fui-grid.vue"
	import fuiGridItem from "firstui-uni/firstui/fui-grid-item/fui-grid-item.vue"
	import fuiCard from "firstui-uni/firstui/fui-card/fui-card.vue"
	export default {
		data() {
			return {
				urls2: [],
				openid: "",
				messages: [],
				scrollTop: 0,
			};
		},
		components: {
			add_memoir,
			fuiGrid,
			fuiGridItem,
			fuiCard,
		},
		methods: {
			onClickShow() {
				//this.dataLineDetail = data;
				// this.$refs['showWeight'].open()
				// 调用弹出框组件里的显示方法
				this.$refs['customModal'].showModal();
			},
			onClickConfirm(data) {
				let stateData = JSON.parse(data)
				console.log(stateData)
				let img_urls = stateData.img;
				//现在需要将图片发送给后端然后由后端上传返回图片的云端地址并储存
				let _this = this;
				const currentDate = new Date();

				// 获取当前时间的年、月、日、时、分、秒
				const year = currentDate.getFullYear();
				const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 使用 padStart 格式化月份
				const day = currentDate.getDate().toString().padStart(2, '0');
				const hours = currentDate.getHours().toString().padStart(2, '0');
				const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // 使用 padStart 格式化分钟
				const currentTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
				//这里需要用户输入文本并且上传照片
				const newMessage = {
					text: stateData.text,
					urls: img_urls,
					time: currentTime,
				};
				_this.messages.unshift(newMessage); // 将新消息添加到开头
				_this.scrollTop = 0; // 滚动到顶部
				_this.$nextTick(() => {
					_this.$refs.scrollView && _this.$refs.scrollView.scrollTo(0, 0); // 通过 ref 滚动到顶部
				});
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为添加回忆录的url
					url: getApp().globalData.base_url + '/SendMemoir/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						memoir: this.messages,
					},
					success: function(response) {
						console.log("添加回忆录成功")
						console.log(response)
					},
					fail: function(response) {
						console.log("添加回忆录失败")
					}
				})
				this.$refs['customModal'].hideModal();
			},
		},
		onLoad() {
			let _this = this
			this.openid = getApp().globalData.global_openid
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为获取回忆录的url
				url: getApp().globalData.base_url + '/getPatientInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid: this.openid,
				},
				success: function(response) {
					console.log("获取回忆录成功", response)
					_this.messages = response.data.code.Memoir
					if (_this.messages == null) {
						_this.messages = []
					}

				},
				fail: function(response) {
					console.log("获取回忆录失败")
				}
			})
		}
	};
</script>

<style lang="scss">
	.text{
		font-family: cursive;
		font-weight: 500;
	}
	.time{
		color: #B2B2B2;
		font-size: 50%;
	}
	.onepiece{
		width: 90%;
		margin-left: 5%;
	}
	.fui-grid__cell {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex: 1;
			font-size: 28rpx;
			font-weight: 400;
		}
	.fui-icon {
			width: 95%;
			height: 95%;
		}
	.message {
		align-items: center;
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 50rpx;
	}

	.img {
		width: 85%;
	}

	.txt {
		font-size: 40rpx;
		width: 85%;
	}


	.add_new {
		display: flex;
		flex-direction: row;
	}

	.add_image {
		height: 200rpx;
		width: 250rpx;
		background: rgba(128, 128, 128, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 40rpx;
		margin-top: 40rpx;
	}

	.prompt {
		width: 400rpx;
		font-size: 60rpx;
		margin-left: 40rpx;
		margin-top: 45rpx;
	}

	@font-face {
		font-family: "iconfont";
		/* Project id 4305931 */
		src: url('//at.alicdn.com/t/c/font_4305931_0ciu9oktu8lh.woff2?t=1699154166176') format('woff2'),
			url('//at.alicdn.com/t/c/font_4305931_0ciu9oktu8lh.woff?t=1699154166176') format('woff'),
			url('//at.alicdn.com/t/c/font_4305931_0ciu9oktu8lh.ttf?t=1699154166176') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 25px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-add-circle:before {
		content: "\e664";
	}

	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 5rpx;
			border-radius: 3rpx;
		}

		&__content {
			margin-left: 75rpx;
			flex: 1;
		}
	}
</style>