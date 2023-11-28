<template>
	<view>
		<view class="add_new">
			<view class="add_image" @tap="addNewMessage">
				<view class="iconfont icon-add-circle"></view>
			</view>
			<view class="prompt">
				<text>点击左侧图标新建回忆录</text>
			</view>
		</view>
		<scroll-view class="scroll-view" :scroll-y="true" :scroll-top="scrollTop" ref="scrollView">
			<view v-for="(message, index) in messages" :key="index">
				
				
				<view class="u-demo-block">
							<view class="u-demo-block__content">
								<view class="album">
									<view class="album__content">
										<view :style="{
											marginBottom: '8rpx',
											width: albumWidth + 'rpx'
										}">
											<u--text
											    :text="message.text"
											    :customStyle="{
													width: albumWidth + 'rpx'
												}"
												size="40"
											></u--text>
											<text v-if="message.time" class="time">{{message.time}}</text>
										</view>
										<u-album
										    :urls="message.urls"
										    @albumWidth="width => albumWidth = width"
										    multipleSize="200"
										></u-album>
									</view>
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
				urls2: [
									'https://cdn.uviewui.com/uview/album/1.jpg',
									'https://cdn.uviewui.com/uview/album/2.jpg',
									'https://cdn.uviewui.com/uview/album/3.jpg',
									'https://cdn.uviewui.com/uview/album/4.jpg',
									'https://cdn.uviewui.com/uview/album/5.jpg',
									'https://cdn.uviewui.com/uview/album/6.jpg',
									'https://cdn.uviewui.com/uview/album/7.jpg',
									'https://cdn.uviewui.com/uview/album/8.jpg',
									'https://cdn.uviewui.com/uview/album/9.jpg',
									'https://cdn.uviewui.com/uview/album/10.jpg',
								],
				openid:"",
				messages: [{
						text: '消息1',
						urls: [
									'https://cdn.uviewui.com/uview/album/1.jpg',
									'https://cdn.uviewui.com/uview/album/2.jpg',
									'https://cdn.uviewui.com/uview/album/3.jpg',
									'https://cdn.uviewui.com/uview/album/4.jpg',
									'https://cdn.uviewui.com/uview/album/5.jpg',
									'https://cdn.uviewui.com/uview/album/6.jpg',
									'https://cdn.uviewui.com/uview/album/7.jpg',
									'https://cdn.uviewui.com/uview/album/8.jpg',
									'https://cdn.uviewui.com/uview/album/9.jpg',
									'https://cdn.uviewui.com/uview/album/10.jpg',
								],
						time: '2023-12-2-2-2-2'
					},
					{
						text: '消息2',
						urls: '/static/c2.png'
					},
					// ...
				],
				scrollTop: 0,
			};
		},
		methods: {
			addNewMessage() {
				const currentDate = new Date();
				
				// 获取当前时间的年、月、日、时、分、秒
				const year = currentDate.getFullYear();
				const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 使用 padStart 格式化月份
				const day = currentDate.getDate().toString().padStart(2, '0');
				const hours = currentDate.getHours().toString().padStart(2, '0');
				const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // 使用 padStart 格式化分钟
				const currentTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
				const newMessage = {
					text: '今天去公园散步了，碰见了很多遛狗的老人家，大家一块儿聊天下棋打牌，特别开心！',
					urls: [
									'https://cdn.uviewui.com/uview/album/1.jpg',
									'https://cdn.uviewui.com/uview/album/2.jpg',
									'https://cdn.uviewui.com/uview/album/3.jpg',
									'https://cdn.uviewui.com/uview/album/4.jpg',
									'https://cdn.uviewui.com/uview/album/5.jpg',
									'https://cdn.uviewui.com/uview/album/6.jpg',
									'https://cdn.uviewui.com/uview/album/7.jpg',
									'https://cdn.uviewui.com/uview/album/8.jpg',
									'https://cdn.uviewui.com/uview/album/9.jpg',
									'https://cdn.uviewui.com/uview/album/10.jpg',
								],
					time: currentTime,
				};
				this.messages.unshift(newMessage); // 将新消息添加到开头
				this.scrollTop = 0; // 滚动到顶部
				this.$nextTick(() => {
					this.$refs.scrollView && this.$refs.scrollView.scrollTo(0, 0); // 通过 ref 滚动到顶部
				});
			},
		},
		onLoad(){
			this.openid=getApp().globalData.global_openid
		}
	};
</script>

<style lang="scss">
	.message{
		align-items: center;
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 50rpx;
	}
	.img{
		width: 85%;
	}
	.txt{
		font-size: 40rpx;
		width: 85%;
	}
	.time{
		margin-left: 50%;
	}
	
	.add_new{
		display: flex;
		flex-direction: row;
	}
	.add_image{
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
	.prompt{
		width: 400rpx;
		font-size: 60rpx;
		margin-left: 40rpx;
		margin-top: 45rpx;
	}
	
	@font-face {
	  font-family: "iconfont"; /* Project id 4305931 */
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