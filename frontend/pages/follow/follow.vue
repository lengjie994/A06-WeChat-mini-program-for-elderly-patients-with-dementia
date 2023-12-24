<template>
	<view>

		<fui-input :padding="['20rpx','32rpx']" label="UID" :bottomLeft="0" :placeholder="uid" @input="input">
			<fui-button type="gray" bold width="100rpx" height="64rpx" :size="28" text="确认"
				@click="confirm()"></fui-button>
		</fui-input>
	</view>
</template>

<script>
	import fuiInput from "firstui-uni/firstui/fui-input/fui-input.vue"
	import fuiButton from "firstui-uni/firstui/fui-button/fui-button.vue"
	export default {
		data() {
			return {
				followurl: '',
				uid: "请输入上述公众号返回的UID",
			};
		},
		components: {
			fuiInput,
			fuiButton,
		},
		onLoad() {
			let _this=this
			this.followurl = decodeURIComponent('https://wxpusher.zjiecode.com/wxuser/?type=1&id=67688#/follow')
			console.log(this.followurl)
			wx.request({
				// 这里是django的本地ip地址
				// 如果部署到线上，需要改为接口的实际网址
				//此处url还需修改为绑定患者账号的url
				url: 'http://43.140.198.99/api/user/getPatientInfo/',
				// 请求方式修改为 POST
				method: 'POST',
				data: {
					openid: this.openid,
				},
				success: function(response) {
					_this.uid=response.data.code.uid
					console.log("绑定患者账号成功")
					console.log(response)
				},
				fail: function(response) {
					console.log("绑定患者账号失败")
				}
			})
		},
		methods: {
			input(e) {
				let _this = this
				_this.uid = e
			},
			confirm() {
				console.log(this.uid)
				wx.request({
					// 这里是django的本地ip地址
					// 如果部署到线上，需要改为接口的实际网址
					//此处url还需修改为绑定患者账号的url
					url: 'http://43.140.198.99/api/user/WriteUid/',
					// 请求方式修改为 POST
					method: 'POST',
					data: {
						openid: this.openid,
						uid: this.uid,
					},
					success: function(response) {
						console.log("绑定患者账号成功")
						console.log(response)
					},
					fail: function(response) {
						console.log("绑定患者账号失败")
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	web-view {
		height: 500rpx;
	}
</style>