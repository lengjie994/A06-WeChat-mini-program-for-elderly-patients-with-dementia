<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "components/firstui-uni/firstui/fui-theme/fui-theme.css"
</style>
<script>
	export default {

		globalData: {
			global_openid: "",
			global_id: "",
			global_identity: "",
			global_opposite_id: "",
			global_indexList: [],
			global_flag: false, //监护人方聊天消息是否更新标识
			global_opposite_nickname:"",
			// base_url:"http://127.0.0.1:8000/api/user",
			base_url:"http://43.140.198.99/api/user",
			// base_url:"http://183.173.169.112/api/user",
		},
		data() {
			return {
				timer: "",
				value: 0,
			}
		},
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			this.timer = setInterval(this.valChange, 2000);
		},
		methods: {
			valChange() {
				if (this.globalData.global_identity == "doctor") {
					//获取绑定的监护人列表indexList（获取医生信息）待完成

					let _this=this
					this.value++;
					// console.log(this.value);
					//每隔一段时间触发获取请求
					wx.request({
						// 这里是django的本地ip地址
						// 如果部署到线上，需要改为接口的实际网址
						//此处url还需修改为获取医生信息的url
						url: _this.globalData.base_url+'/getDoctorInfo/',
						// 请求方式修改为 POST
						method: 'POST',
						data: {
							openid: this.globalData.global_openid,
						},
						success: function(response) {
							//将indexList更新
							_this.globalData.global_indexList = response.data.code.Guardian_id_list
							if(_this.globalData.global_indexList ==null)
							{
								_this.globalData.global_indexList =[]
							}
							// console.log(response)
						},
						fail: function(response) {
							console.log("获取聊天记录失败")
						}
					})


				}
				if (this.globalData.global_identity == "guardian") {
					//获取绑定的监护人列表indexList（获取医生信息）待完成

					let _this=this
					this.value++;
					// console.log(this.value);
					// console.log(this.globalData.global_openid);
					//每隔一段时间触发获取请求
					wx.request({
						// 这里是django的本地ip地址
						// 如果部署到线上，需要改为接口的实际网址
						//此处url还需修改为获取监护人信息的url
						url: _this.globalData.base_url+'/getGuardianInfo/',
						// 请求方式修改为 POST
						method: 'POST',
						data: {
							openid: this.globalData.global_openid,
						},
						success: function(response) {
							// console.log(response)
							_this.globalData.global_flag = response.data.code.Flag
							_this.globalData.global_opposite_id=response.data.code.Doctor_id
							_this.globalData.global_opposite_nickname=response.data.code.Doctor_nickname
							if(_this.globalData.global_opposite_id==null||_this.globalData.global_opposite_id=="UNDEFINED")
							{
								_this.globalData.global_opposite_id=""
							}
							// console.log("获取聊天记录成功")
						},
						fail: function(response) {
							console.log("获取聊天记录失败")
						}
					})

				}
			},
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>