<template>
	<view>
		<image src="/static/12.jpg"></image>
		<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			getUserInfo(e) {
				if (e.detail.errMsg === 'getUserInfo:fail auth deny') {
					//return uni.$showMsg('您取消了登录授权')
				}
				console.log(e)
				this.getToken(e.detail)
				//若用户为绑定过身份的用户
				//if
				uni.switchTab({
					url: '/pages/myinfo/myinfo'
				})
			},
			async getToken(info) {
				const [err, res] = await new Promise((resolve, reject) => {	
					uni.login({
						provider: 'weixin',
						// success: function(loginres) {
						// 	//console.log(loginres);
						// 	resolve([null, loginres]); // 将loginres的值传递给res
						// },
						success:(res)=>{
						    console.log(res);
							let code=res.code
						    // 通过code换取openId
						    uni.request({
								url: `https://api.weixin.qq.com/sns/jscode2session?
								appid=wx2535e2c919c58832&
								secret=3a6e697feadee759db26c7fa033c8dc6&js_code=${code}&
								grant_type=authorization_code`,
								success:(res)=>{
									console.log(res);
									console.log(res.data.openid);
								}
						    })
						},
						fail: function(error) {
							reject([error, null]); // 将错误信息传递给err
						}
					});
				});

				console.log(res)
				const query = {
					code: res.code,
					encryptedData: info.encryptedData,
					iv: info.iv,
					rawData: info.rawData,
					signature: info.signature
				}
				console.log(query)

				const {data:loginResult}=await uni.$http.post('/api/public/v1/users/wxlogin',query)
				if(loginResult.meta.status!==200)return uni.$showMsg('登陆失败！')
				uni.$showMsg('登陆成功')
			}
		}
	}
</script>

<style lang="scss">

</style>