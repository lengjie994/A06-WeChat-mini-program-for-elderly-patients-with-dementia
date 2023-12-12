<template>
	<view>
		<view class="header">
			<uni-nav-bar title="个人中心" height="11vh" :border="false" :fixed="true"
				backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="u-page">
			<u-list @scrolltolower="scrolltolower" :height="scrollheight">
				<!--根据全局变量indexList判断每一个item是否有新消息，再添加消息提示组件-->
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<u-cell :title="`列表长度-${index + 1}`"  @click="gotochat(index)">
						<u-avatar slot="icon" shape="square" size="35" :src="item.url"
							customStyle="margin: -3px 5px -3px 0"></u-avatar>
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>




<script>
	import tabBar from '@/components/tabbar/tabbar.vue'

	export default {
		data() {
			return {
				openid: "",
				id_data: "doctor",
				navheight: "60px",
				indexList: [],
				scrollheight: "1100rpx",
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
				timer: "",
			}
		},

		methods: {
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			gotochat(index){
				getApp().globalData.global_opposite_id=index
				//告知后端将该监护人消息更新标识修改为false
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改标识为false的url
					url: 'http://127.0.0.1:8000/api/user/login/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						opposite_id: index,
					},
					success: function(response) {
						console.log("修改标识为false成功")
					},
					fail: function(response) {
						console.log("修改标识为false失败")
					}
				})
				uni.navigateTo({
					url: '/pages/chatting/chatting'
				})
			},
			valChange()
			{
				this.indexList=getApp().globalData.global_indexList
			}
		},
		components: {
			tabBar,
		},
		onShow()
		{
			this.timer = setInterval(this.valChange, 2000);
		},
		
		onLoad() {
			this.openid = getApp().globalData.global_openid
			this.loadmore()
		},
		onHide() {
			clearTimeout(this.timer);
		},
	}
</script>

<style lang="scss">
	.header{
		background-color: #F5F5F5;
	}
	.u-page{
		
	}

</style>