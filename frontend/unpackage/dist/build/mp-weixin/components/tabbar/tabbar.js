(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tabbar/tabbar"],{"00f8":function(t,a,e){"use strict";e.r(a);var n=e("e540"),i=e("b49c");for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(c);e("ab4f");var o=e("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);a["default"]=s.exports},7859:function(t,a,e){},9416:function(t,a,e){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{selectedIndex:{default:0},id_data:{type:String}},components:{fuiIcon:function(){Promise.all([e.e("common/vendor"),e.e("node-modules/firstui-uni/firstui/fui-icon/fui-icon")]).then(function(){return resolve(e("d2dc"))}.bind(null,e)).catch(e.oe)}},data:function(){return{color:"#666666",selectedColor:"#465CFF",list:[],currentIndex:0,iconname:["star","idcard","my"]}},created:function(){this.currentIndex=this.selectedIndex;console.log("111111"),console.log(this.selectedIndex),console.log(this.id_data),"patient"==this.id_data?this.list=[{pagePath:"/pages/patient_reminder/patient_reminder",iconPath:"/static/tab/pill.png",selectedIconPath:"/static/tab/pill_active.png",text:"服药提醒"},{pagePath:"/pages/patient_memorandum/patient_memorandum",iconPath:"/static/tab/check.png",selectedIconPath:"/static/tab/check_active.png",text:"备忘录"},{pagePath:"/pages/patient_myinfo/patient_myinfo",iconPath:"/static/tab/my.png",selectedIconPath:"/static/tab/my_active.png",text:"个人中心"}]:"guardian"==this.id_data?(this.iconname=["classify","message","my"],this.list=[{pagePath:"/pages/guardian_health/guardian_health",iconPath:"/static/tab/health.png",selectedIconPath:"/static/tab/health_active.png",text:"患者相关"},{pagePath:"/pages/guardian_contact_doctor/guardian_contact_doctor",iconPath:"/static/tab/chat.png",selectedIconPath:"/static/tab/chat_active.png",text:"联系医生"},{pagePath:"/pages/guardian_myinfo/guardian_myinfo",iconPath:"/static/tab/my.png",selectedIconPath:"/static/tab/my_active.png",text:"个人中心"}]):"doctor"==this.id_data&&(this.iconname=["message","my"],this.list=[{pagePath:"/pages/doctor_contact_guardian/doctor_contact_guardian",iconPath:"/static/tab/health.png",selectedIconPath:"/static/tab/health_active.png",text:"联系监护人"},{pagePath:"/pages/doctor_myinfo/doctor_myinfo",iconPath:"/static/tab/my.png",selectedIconPath:"/static/tab/my_active.png",text:"个人中心"}])},methods:{switchTab:function(a,e){this.currentIndex=e;var i=a.pagePath;console.log(i),t.navigateTo({url:i}),"/pages/chatting/chatting"==i&&n.request({url:"http://43.140.198.99:80/api/user/GuardianFlagFalse/",method:"POST",data:{openid:this.openid},success:function(t){console.log("修改标识为false成功")},fail:function(t){console.log("修改标识为false失败")}})}}};a.default=i}).call(this,e("543d")["default"],e("bc2e")["default"])},ab4f:function(t,a,e){"use strict";var n=e("7859"),i=e.n(n);i.a},b49c:function(t,a,e){"use strict";e.r(a);var n=e("9416"),i=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=i.a},e540:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return n}));var n={fuiIcon:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/firstui-uni/firstui/fui-icon/fui-icon")]).then(e.bind(null,"d2dc"))}},i=function(){var t=this.$createElement;this._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tabbar/tabbar-create-component',
    {
        'components/tabbar/tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("00f8"))
        })
    },
    [['components/tabbar/tabbar-create-component']]
]);