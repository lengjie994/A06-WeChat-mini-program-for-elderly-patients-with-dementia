<template>
    <view class="tab">
         <view v-for="(item,index) in list" :key="index" class="tab-item" @click="switchTab(item, index)">
            <view v-if="currentIndex == index">
				<fui-icon :name="iconname[index]+'-fill'" color="#465CFF"></fui-icon>
			</view>
			<view v-else>
				<fui-icon :name="iconname[index]"></fui-icon>
			</view>
            <view class="tab_text" :style="{color: currentIndex == index ? selectedColor : color}">{{item.text}}</view>
        </view>
    </view>
</template>
 
<script>
	import fuiIcon from "firstui-uni/firstui/fui-icon/fui-icon.vue"
    export default {
        props: {
            selectedIndex: { // 当前选中的tab index
                default: 0
            },
            id_data: {
				type: String,
			},
        },
		components:{
			fuiIcon,
		},
        data() {
            return {
                color: "#666666",
                selectedColor: "#465CFF",
                list: [],
                currentIndex:0,
				iconname: ["star","idcard","my"]
            }
        },
        created() {
            this.currentIndex = this.selectedIndex;
            
            let _this = this
			console.log("111111")
			console.log(this.selectedIndex)
			console.log(this.id_data)
            
            if (this.id_data=="patient") {
                //角色1
                _this.list = [{
                        "pagePath": "/pages/patient_reminder/patient_reminder",
                        "iconPath": "/static/tab/pill.png",
                        "selectedIconPath": "/static/tab/pill_active.png",
                        "text": "服药提醒"
                    },
                    {
                        "pagePath": "/pages/patient_memorandum/patient_memorandum",
                        "iconPath": "/static/tab/check.png",
                        "selectedIconPath": "/static/tab/check_active.png",
                        "text": "备忘录"
                    },
					{
					    "pagePath": "/pages/patient_myinfo/patient_myinfo",
					    "iconPath": "/static/tab/my.png",
					    "selectedIconPath": "/static/tab/my_active.png",
					    "text": "个人中心"
					}
                ]
            } else if(this.id_data=="guardian") {
                //角色2
				iconname=["classify","message","my"]
                _this.list = [{
                        "pagePath": "/pages/guardian_health/guardian_health",
                        "iconPath": "/static/tab/health.png",
                        "selectedIconPath": "/static/tab/health_active.png",
                        "text": "患者相关"
                    },
                    {
                        "pagePath": "/pages/guardian_chat/guardian_chat",
                        "iconPath": "/static/tab/chat.png",
                        "selectedIconPath": "/static/tab/chat_active.png",
                        "text": "联系医生"
                    },
					{
					    "pagePath": "/pages/guardian_myinfo/guardian_myinfo",
					    "iconPath": "/static/tab/my.png",
					    "selectedIconPath": "/static/tab/my_active.png",
					    "text": "个人中心"
					}
                ]
            } else if(this.id_data=="doctor"){
				//医生
				iconname=["message","my"]
				_this.list = [{
				        "pagePath": "/pages/doctor_contact_guardian/doctor_contact_guardian",
				        "iconPath": "/static/tab/health.png",
				        "selectedIconPath": "/static/tab/health_active.png",
				        "text": "联系监护人"
				    },
					{
					    "pagePath": "/pages/doctor_myinfo/doctor_myinfo",
					    "iconPath": "/static/tab/my.png",
					    "selectedIconPath": "/static/tab/my_active.png",
					    "text": "个人中心"
					}
				]
			}
        },
        methods: {
            switchTab(item, index) {
                this.currentIndex = index;
                let url = item.pagePath;
				console.log(url);
                uni.navigateTo({url:url})
				// uni.switchTab({
				// 	url:url
				// })
                
            }
        }
    }
</script>
 
<style lang="scss">
    .tab {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 10%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部
 
        .tab-item {
            flex: 1;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .tab_img {
                width: 60rpx;
                height: 60rpx;
            }
            .tab_text {
                font-size: 30rpx;
                margin-top: 9rpx;
            }
        }
    }
</style>