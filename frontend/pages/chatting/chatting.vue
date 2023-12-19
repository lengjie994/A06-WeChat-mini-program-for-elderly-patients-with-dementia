<template>
	<view>
		<view class="title" style="position: fixed;">
			<view>联系对象</view>
		</view>
		<view class="wrap" :style="{paddingBottom:padding_height}">
			<view class="content_box" id="box" ref="scrollBox">
				<view class="timer">2022-08-02 11:08:07</view>
				<!-- <view :class="item.position == 'left' ? 'userbox2' : 'userbox'" v-for="(item, index) in chatlist"
					:key="index" :id='"item"+index'>
					<view :class="item.position == 'left' ? 'nameInfo2' : 'nameInfo'">
						<view style="font-size: 14rpx">{{ item.position == 'left' ?item.uname:item.to_name  }}</view>
						<view :class="item.position == 'left' ? 'contentText2' : 'contentText'">
							{{ item.msn }}
						</view>
					</view>
					<view>
						<image class="touxiang" :src="item.position == 'left' ?item.uavatar:item.to_avatar" />
					</view>
				</view> -->
				<view :class="item.identity == identity ? 'userbox' : 'userbox2'" v-for="(item, index) in chatlist"
					:key="index" :id='"item"+index'>
					<view :class="item.identity == identity ? 'nameInfo' : 'nameInfo2'">
						<view style="font-size: 14rpx">{{ item.identity == identity ?item.to_name:item.uname  }}
						</view>
						<view :class="item.identity == identity ? 'contentText' : 'contentText2'">
							{{ item.msn }}
						</view>
					</view>
					<view>
						<image class="touxiang" :src="item.identity == identity ?item.to_avatar:item.uavatar" />
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="input">
					<textarea name="输入框" id="1" cols="20" rows="5" class="areaBox" v-model="inputValue"></textarea>
					<button style="height: 80rpx;color:#58df4d;font-size: 30rpx;line-height: 80rpx;width: 200rpx;"
						@click="sendOut">发送</button>
					<button style="height: 80rpx;color:#58df4d;font-size: 30rpx;line-height: 80rpx;width: 200rpx;"
						@click="changeMode">➕</button>
				</view>
				<view class="more-view" v-show="showMore">
					<view v-if="identity==='doctor'" style="justify-content: center; height: 120rpx;width: 120rpx; margin-left: 30rpx;">
						<button class="funcbtn" @click="gotoHealthdata">
							<image src="../../static/health.png"></image>
						</button>
						<text style="font-size: 28rpx;">患者数据</text>

					</view>
					<view v-if="identity==='guardian'" style="justify-content: center; height: 120rpx;width: 120rpx; margin-left: 30rpx;">
						<button class="funcbtn" @click="gotoReservation">
							<image src="../../static/reserve.png"></image>
						</button>
						<text style="font-size: 28rpx;">预约就医</text>
					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	import fuiIcon from "firstui-uni/firstui/fui-icon/fui-icon.vue"
	export default {
		data() {
			return {
				//若聊天历史记录过长有可能发生页面刷新时间长的情况，那时需要分页记录
				//page: 1,//聊天历史记录分页
				openid: "",
				identity: "",
				opposite_id: "",
				chatlist: [], //聊天信息
				userName: "", //用户名
				inputValue: "", //输入内容
				scrollTop: 0, //滚动条距离顶部距离
				infoList: null, //用户信息
				showMore: false, //底部菜单栏是否弹出
				padding_height: "0rpx",

				// path: "wss://test.jskwsx.com/msg", //websocket链接地址
				// ws: null, //建立的连接
				// lockReconnect: false, //是否真正建立连接
				// timeout: 10 * 1000, //30秒一次心跳
				// timeoutObj: null, //心跳心跳倒计时
				// serverTimeoutObj: null, //心跳倒计时
				// timeoutnum: null, //断开 重连倒计时
				// closeType: 1, //断开判断：0代表不重连，1代表重连
			}
		},  
		components: {
			fuiIcon,
		},
		onShow() {
			this.getlishiList() //历史记录
			console.log(this.opposite_id)
			this.userName = uni.getStorageSync("userinfo").nickname //拿到缓存中的用户信息
		},
		onLoad(options) {
			this.openid = getApp().globalData.global_openid
			this.identity = getApp().globalData.global_identity
			

			//获取聊天对象id
			this.opposite_id = getApp().globalData.global_opposite_id
			console.log(this.identity)
			console.log(this.opposite_id)
		},
		onPageScroll(e) {
			//监听滚动事件，如果滚动条等于0，代表滚动到最顶部，把分页加一，然后历史记录拉第二页数据，以此类推
			if (e.scrollTop == 0) {
				this.page++
				console.log('到顶部了')
				this.getlishiList(1)
			}
		},
		beforeDestroy() {
			// this.closeType = 0 //离开页面前改为0，代表离开后断开链接不再重连
			// this.ws.send({
			// 	data: JSON.stringify({
			// 		type: "online",
			// 		data: {
			// 			online: 0,
			// 			user_type: 'user',
			// 			is_tourist: uni.getStorageSync("userinfo").id ? 0 : 1
			// 		}
			// 	})
			// })
			// // 离开页面后关闭连接
			// this.ws.close();
			// // 清除时间
			// clearTimeout(this.timeoutObj);
			// clearTimeout(this.serverTimeoutObj);

		},
		methods: {

			// 切换菜单栏显示隐藏
			changeMode() {
				this.showMore = !this.showMore;
				if (this.showMore) {
					this.padding_height = "200rpx";
				} else {
					this.padding_height = "0rpx";
				}
				console.log(this.showMore)
			},
			gotoHealthdata(){
				//这里还需要修改页面逻辑，判断是什么身份进入页面
				uni.navigateTo({
					url: '/pages/patient_healthdata/patient_healthdata'
				})
			},
			gotoReservation(){
				uni.navigateTo({
					url: '/pages/guardian_reservation/guardian_reservation'
				})
			},
			//获取历史记录
			getlishiList(type) {
				let _this=this
				/*uni.request({
					url: 'https://zz.api.asdwqs.com/gzh/crmebchat/chatMessageList', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						accept_id: this.infoList.kf_id,
						page: this.page,
						limit: 10,
					},
					header: {
						token: uni.getStorageSync('token') //拿到缓存中的token
					},
					success: (res) => {
						console.log('历史记录:', res);
						let a = res.data.data.list
						this.chatlist = a.concat(this.chatlist)//用拿到的数据合并现有的数据，这样当加载第二页历史记录时，顺序不会乱
						if (type == 1) {//滚动到顶部触发方法会传入1，此时不需要调用滚动到最底部的方法
							return
						}
						this.setPageScrollTo()//滚动到最底部
					}
				});*/
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为获取聊天记录的url
					url: 'http://127.0.0.1:8000/api/user/ReturnChatList/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						identity: this.identity,
						opposite_id: this.opposite_id,
					},
					success: function(response) {
						_this.chatlist = response.data.chatlist;
						console.log(_this.chatlist[0].identity==_this.identity)
						
						console.log(response)
						console.log("获取聊天记录成功")
						_this.setPageScrollTo()//滚动到最底部
					},
					fail: function(response) {
						console.log("获取聊天记录失败")
					}
				})
			},
			//滚动条默认滚动到最底部
			setPageScrollTo(s, c) {
				let that = this
				this.$nextTick(() => {
					const query = uni.createSelectorQuery().in(this);
					query
						.select("#box")
						.boundingClientRect((rect) => {
							let height = rect.height; //拿到聊天框的高度
							console.log("聊天信息框高度: ", height);
							wx.pageScrollTo({
								scrollTop: height, //把距离顶部距离设置成聊天框高度，以此把滚动条顶到最底部
								duration: 100 // 滑动速度
							})
						})
						.exec();
				});
			},

			//发送消息
			sendOut() {
				this.chatlist.push({
					msn: this.inputValue,
					//不再使用position表明发送人，而直接使用身份
					//position: "right",
					identity: this.identity,
					//可以考虑加上头像和昵称
					// to_avatar: uni.getStorageSync("userinfo").avatar,
					// to_name: uni.getStorageSync("userinfo").nickname
				})
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为存储聊天记录的url
					url: 'http://127.0.0.1:8000/api/user/SaveChatlist/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						identity: this.identity,
						chatlist: this.chatlist,
						opposite_id: this.opposite_id,
					},
					success: function() {
						console.log("发送聊天记录成功")
					},
					fail: function(response) {
						console.log("发送聊天记录失败")
					}
				})
				this.inputValue = '' //点击发送后清空输入框
				this.setPageScrollTo() //滚动到最底部
				console.log('发送成功', this.inputValue);
			},
		}
	}
</script>

<style scoped>
	image {
		width: 55rpx;
		height: 50rpx;
	}

	.funcbtn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
	}

	.more-view {
		background-color: #F1F1F1;
		height: 200rpx;
	}

	.wrap {
		padding-top: 80rpx;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.touxiang {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.areaBox {
		margin-left: 30rpx;
		margin-top: 5rpx;
		background-color: white;
		height: 70rpx;
	}

	.title {
		height: 80rpx;
		width: 100%;
		background-color: #eaeaea;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bottom {
		min-height: 100rpx;
		width: 100%;
		border-top: 2rpx solid #eaeaea;
		background-color: #F1F1F1;
		position: fixed;
		bottom: 0;

		justify-content: space-between;
		align-items: center;
		/* padding: 0 10rpx; */
		border-radius: 20rpx;
	}

	.input {
		display: flex;
	}

	.content_box {
		/* 
  中间栏计算高度，110是包含了上下固定的两个元素高度90
  这里padding：10rpx造成的上下够加了10，把盒子撑大了，所以一共是20要减掉
  然后不知道是边框还是组件的原因，导致多出了一些，这里再减去5rpx刚好。不然会出现滚动条到顶或者底部的时候再滚动的话就会报一个错，或者出现滚动条变长一下的bug
  */
		height: calc(100% - 230rpx);
		overflow: auto;
		padding: 20rpx 20rpx 100rpx 20rpx;
	}

	.timer {
		text-align: center;
		color: #c2c2c2;
	}

	/* 发送的信息样式 */
	/* 
右边消息思路解释：首先大盒子userbox内放两个盒子，一个放头像，一个放用户名和发送的内容，我们先用flex让他横向排列。
然后把写文字的大盒子设置flex：1。这个属性的意思就是让这个元素撑满父盒子剩余位置。然后我们再把文字盒子设置flex，并把他对齐方式设置为尾部对齐就完成了基本的结构，然后微调一下就可以了
*/
	.userbox {
		width: 100%;
		display: flex;
		margin-bottom: 20rpx;
	}

	.nameInfo {
		/* 用flex：1把盒子撑开 */
		flex: 1;
		margin-right: 20rpx;
		/* 用align-items把元素靠右对齐 */
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.contentText {
		background-color: #9eea6a;
		/* 把内容部分改为行内块元素，因为盒子flex：1把盒子撑大了，所以用行内块元素让内容宽度不根据父盒子来 */
		display: inline-block;
		/* 这四句是圆角 */
		border-top-left-radius: 20rpx;
		border-top-right-radius: 0rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		/* 最大宽度限定内容输入到百分61换行 */
		max-width: 61%;
		padding: 10rpx 20rpx;
		/* 忽略多余的空白，只保留一个空白 */
		white-space: normal;
		/* 换行显示全部字符 */
		word-break: break-all;
		margin-top: 6rpx;
		font-size: 28rpx;
	}

	/* 接收的信息样式 */
	/* 
左边消息思路解释：跟上面一样，就是换一下位置，首先通过把最外层大盒子的排列方式通过flex-direction: row-reverse;属性翻转，也就是头像和文字盒子换位置
然后删除掉尾部对齐方式，因为不写这个默认是左对齐的。我们写的左边就没必要再写了。
*/
	.userbox2 {
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
		margin-bottom: 20rpx;
	}

	.nameInfo2 {
		/* 用flex：1把盒子撑开 */
		flex: 1;
		margin-left: 20rpx;
	}

	.contentText2 {
		background-color: #9eea6a;
		/* 把内容部分改为行内块元素，因为盒子flex：1把盒子撑大了，所以用行内块元素让内容宽度不根据父盒子来 */
		display: inline-block;
		/* 这四句是圆角 */
		border-top-left-radius: 0rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		/* 最大宽度限定内容输入到百分61换行 */
		max-width: 61%;
		padding: 10rpx 20rpx;
		/* 忽略多余的空白，只保留一个空白 */
		white-space: normal;
		/* 换行显示全部字符 */
		word-break: break-all;
		margin-top: 6rpx;
		font-size: 28rpx;
	}
</style>
