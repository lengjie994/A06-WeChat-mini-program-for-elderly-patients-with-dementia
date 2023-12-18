<template>
	<view>
		<view class="header">
			<uni-nav-bar title="个人中心" height="11vh" :border="false" :fixed="true"
				backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="u-page">
			<u-list @scrolltolower="scrolltolower" :height="scrollheight">
				<!--根据全局变量indexList判断每一个item是否有新消息，再添加消息提示组件-->
				<fui-list-cell v-for="(item, index) in indexList" :key="index"  
				@click="gotochat(item.Guardian_id)" borderColor="#DDD"
				bottomLeft=0>
					<view class="fui-align__center">
						<fui-icon name="my-fill"></fui-icon>
						<text>{{item.Guardian_id}}</text>
						
					</view>
					<fui-badge v-if="item.flag==='true'" value="1" type="danger"></fui-badge>
				</fui-list-cell>
			</u-list>
			
		</view>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>




<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	import fuiList from "firstui-uni/firstui/fui-list/fui-list.vue"
	import fuiListCell from "firstui-uni/firstui/fui-list-cell/fui-list-cell.vue"
	import fuiBadge from "firstui-uni/firstui/fui-badge/fui-badge.vue"
	import fuiIcon from "firstui-uni/firstui/fui-icon/fui-icon.vue"

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
				// this.loadmore()
			},
			// loadmore() {
			// 	for (let i = 0; i < 30; i++) {
			// 		this.indexList.push({
			// 			url: this.urls[uni.$u.random(0, this.urls.length - 1)]
			// 		})
			// 	}
			// },
			gotochat(id){
				getApp().globalData.global_opposite_id=id
				console.log(id)
				//告知后端将该监护人消息更新标识修改为false
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为修改标识为false的url
					url: 'http://127.0.0.1:8000/api/user/DoctorFlagFalse/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						guardian_id: id,
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
				let _this=this
				_this.indexList=getApp().globalData.global_indexList

			},
			
		},
		components: {
			tabBar,
			fuiList,
			fuiListCell,
			fuiBadge,
			fuiIcon,
		},
		onShow()
		{
			this.timer = setInterval(this.valChange, 2000);
		},
		
		onLoad() {
			this.openid = getApp().globalData.global_openid
			// this.loadmore()
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
	.fui-align__center {
		display: flex;
		align-items: center;
	}

</style>