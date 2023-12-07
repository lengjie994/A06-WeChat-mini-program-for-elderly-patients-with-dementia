<template>
	<view>
		<view class="header">
			<uni-nav-bar title="个人中心" height="11vh" :border="false" :fixed="true"
				backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<view class="u-page">
			<u-list @scrolltolower="scrolltolower" :height="scrollheight">
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<u-cell :title="`列表长度-${index + 1}`">
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
				]
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
			}
		},
		components: {
			tabBar,
		},
		onLoad() {
			this.openid = getApp().globalData.global_openid
			this.loadmore()
		}
	}
</script>

<style lang="scss">
	.header{
		background-color: #F5F5F5;
	}
	.u-page{
		
	}

</style>