<<<<<<< HEAD
<template>
	<view>
		<view class="header">
			<uni-nav-bar title="联系监护人" height="60px" :border="false" :fixed="true"
				backgroundColor="#f9f9f9"></uni-nav-bar>
		</view>
		<u-index-list :indexList="indexList" :custom-nav-height="navheight">
			<view slot="header" class="list">
				<view class="list__item">
					<u-avatar shape="square" size="35" icon="man-add-fill" fontSize="26" randomBgColor></u-avatar>
					<text class="list__item__user-name">新的朋友</text>
				</view>
				<u-line></u-line>
				<view class="list__item">
					<u-avatar shape="square" size="35" icon="tags-fill" fontSize="26" randomBgColor></u-avatar>
					<text class="list__item__user-name">标签</text>
				</view>
				<u-line></u-line>
				<view class="list__item">
					<u-avatar shape="square" size="35" icon="chrome-circle-fill" fontSize="26" randomBgColor></u-avatar>
					<text class="list__item__user-name">朋友圈</text>
				</view>
				<u-line></u-line>
				<view class="list__item">
					<u-avatar shape="square" size="35" icon="qq-fill" fontSize="26" randomBgColor></u-avatar>
					<text class="list__item__user-name">QQ</text>
				</view>
				<u-line></u-line>
			</view>
			<template v-for="(item, index) in itemArr">
				<!-- #ifdef APP-NVUE -->
				<u-index-anchor :text="indexList[index]" :key="index"></u-index-anchor>
				<!-- #endif -->
				<u-index-item :key="index">
					<!-- #ifndef APP-NVUE -->
					<u-index-anchor :text="indexList[index]"></u-index-anchor>
					<!-- #endif -->
					<view class="list" v-for="(item1, index1) in item" :key="index1">
						<view class="list__item">
							<image class="list__item__avatar" :src="item1.url"></image>
							<text class="list__item__user-name">{{item1.name}}</text>
						</view>
						<u-line></u-line>
					</view>
				</u-index-item>
			</template>
			<view slot="footer" class="u-safe-area-inset--bottom">
				<text class="list__footer">共305位好友</text>
			</view>
		</u-index-list>
		<view>
			<tabBar selectedIndex=0 :id_data="id_data"></tabBar>
		</view>
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue'
	const indexList = () => {
		const indexList = []
		const charCodeOfA = 'A'.charCodeAt(0)
		indexList.push("↑")
		indexList.push("☆")
		for (let i = 0; i < 26; i++) {
			indexList.push(String.fromCharCode(charCodeOfA + i))
		}
		indexList.push('#')
		return indexList
	}
	export default {
		data() {
			return {
				openid: "",
				id_data: "doctor",
				navheight: "60px",
				indexList: indexList(),
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
				names: ["勇往无敌", "疯狂的迪飙", "磊爱可", "梦幻梦幻梦", "枫中飘瓢", "飞翔天使",
					"曾经第一", "追风幻影族长", "麦小姐", "胡格罗雅", "Red磊磊", "乐乐立立", "青龙爆风", "跑跑卡叮车", "山里狼", "supersonic超"
				]
			}
		},
		computed: {
			itemArr() {
				return this.indexList.map(item => {
					const arr = []
					for (let i = 0; i < 10; i++) {
						arr.push({
							name: this.names[uni.$u.random(0, this.names.length - 1)],
							url: this.urls[uni.$u.random(0, this.urls.length - 1)]
						})
					}
					return arr
				})
			}
		},
		methods: {

		},
		components: {
			tabBar,
		},
		onLoad() {
			this.openid = getApp().globalData.global_openid
		}
	}
</script>

<style lang="scss">
	.list {
		&__item {
			@include flex;
			padding: 6rpx 12rpx;
			align-items: center;
			
			&__avatar {
				height: 35rpx;
				width: 35rpx;
				border-radius: 3rpx;
			}
			
			&__user-name {
				font-size: 50rpx;
				margin-left: 10rpx;
				color: $u-main-color;
			}
		}
		
		&__footer {
			color: $u-tips-color;
			font-size: 14rpx;
			text-align: center;
			margin: 15rpx 0;
		}
	}
	.list__item {
		height: 100rpx;
	}
=======
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
>>>>>>> 6f62ccfb075458bed4b2befa424e00cd6bc85799

</style>