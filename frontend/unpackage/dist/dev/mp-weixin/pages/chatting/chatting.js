(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chatting/chatting"],{

/***/ 288:
/*!***********************************************************************************************************************************!*\
  !*** D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/main.js?{"page":"pages%2Fchatting%2Fchatting"} ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chatting = _interopRequireDefault(__webpack_require__(/*! ./pages/chatting/chatting.vue */ 289));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chatting.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 289:
/*!****************************************************************************************************************!*\
  !*** D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatting.vue?vue&type=template&id=eb12b574&scoped=true& */ 290);
/* harmony import */ var _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatting.vue?vue&type=script&lang=js& */ 292);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatting.vue?vue&type=style&index=0&id=eb12b574&scoped=true&lang=css& */ 294);
/* harmony import */ var _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 159);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eb12b574",
  null,
  false,
  _chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chatting/chatting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 290:
/*!***********************************************************************************************************************************************************!*\
  !*** D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue?vue&type=template&id=eb12b574&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=template&id=eb12b574&scoped=true& */ 291);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_eb12b574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 291:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue?vue&type=template&id=eb12b574&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 292:
/*!*****************************************************************************************************************************************!*\
  !*** D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=script&lang=js& */ 293);
/* harmony import */ var _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 293:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fuiIcon = function fuiIcon() {
  Promise.all(/*! require.ensure | node-modules/firstui-uni/firstui/fui-icon/fui-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/firstui-uni/firstui/fui-icon/fui-icon")]).then((function () {
    return resolve(__webpack_require__(/*! firstui-uni/firstui/fui-icon/fui-icon.vue */ 316));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      //若聊天历史记录过长有可能发生页面刷新时间长的情况，那时需要分页记录
      //page: 1,//聊天历史记录分页
      openid: "",
      identity: "",
      opposite_id: "",
      chatlist: [],
      //聊天信息
      userName: "",
      //用户名
      inputValue: "",
      //输入内容
      scrollTop: 0,
      //滚动条距离顶部距离
      infoList: null,
      //用户信息
      showMore: false,
      //底部菜单栏是否弹出
      padding_height: "0rpx"

      // path: "wss://test.jskwsx.com/msg", //websocket链接地址
      // ws: null, //建立的连接
      // lockReconnect: false, //是否真正建立连接
      // timeout: 10 * 1000, //30秒一次心跳
      // timeoutObj: null, //心跳心跳倒计时
      // serverTimeoutObj: null, //心跳倒计时
      // timeoutnum: null, //断开 重连倒计时
      // closeType: 1, //断开判断：0代表不重连，1代表重连
    };
  },

  components: {
    fuiIcon: fuiIcon
  },
  onShow: function onShow() {
    this.getlishiList(); //历史记录
    console.log(this.opposite_id);
    this.userName = uni.getStorageSync("userinfo").nickname; //拿到缓存中的用户信息
  },
  onLoad: function onLoad(options) {
    this.openid = getApp().globalData.global_openid;
    this.identity = getApp().globalData.global_identity;

    //获取聊天对象id
    this.opposite_id = getApp().globalData.global_opposite_id;
    console.log(this.identity);
    console.log(this.opposite_id);
  },
  onPageScroll: function onPageScroll(e) {
    //监听滚动事件，如果滚动条等于0，代表滚动到最顶部，把分页加一，然后历史记录拉第二页数据，以此类推
    if (e.scrollTop == 0) {
      this.page++;
      console.log('到顶部了');
      this.getlishiList(1);
    }
  },
  beforeDestroy: function beforeDestroy() {
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
    changeMode: function changeMode() {
      this.showMore = !this.showMore;
      if (this.showMore) {
        this.padding_height = "200rpx";
      } else {
        this.padding_height = "0rpx";
      }
      console.log(this.showMore);
    },
    //获取历史记录
    getlishiList: function getlishiList(type) {
      var _this = this;
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
          opposite_id: this.opposite_id
        },
        success: function success(response) {
          _this.chatlist = response.data.chatlist;
          console.log(_this.chatlist[0].identity == _this.identity);
          console.log(response);
          console.log("获取聊天记录成功");
          _this.setPageScrollTo(); //滚动到最底部
        },

        fail: function fail(response) {
          console.log("获取聊天记录失败");
        }
      });
    },
    //滚动条默认滚动到最底部
    setPageScrollTo: function setPageScrollTo(s, c) {
      var _this2 = this;
      var that = this;
      this.$nextTick(function () {
        var query = uni.createSelectorQuery().in(_this2);
        query.select("#box").boundingClientRect(function (rect) {
          var height = rect.height; //拿到聊天框的高度
          console.log("聊天信息框高度: ", height);
          wx.pageScrollTo({
            scrollTop: height,
            //把距离顶部距离设置成聊天框高度，以此把滚动条顶到最底部
            duration: 100 // 滑动速度
          });
        }).exec();
      });
    },
    //发送消息
    sendOut: function sendOut() {
      this.chatlist.push({
        msn: this.inputValue,
        //不再使用position表明发送人，而直接使用身份
        //position: "right",
        identity: this.identity
        //可以考虑加上头像和昵称
        // to_avatar: uni.getStorageSync("userinfo").avatar,
        // to_name: uni.getStorageSync("userinfo").nickname
      });
      /*
      let parms = {
      	content: this.inputValue,
      	uid: uni.getStorageSync("userinfo").id,
      	uname: uni.getStorageSync("userinfo").nickname,
      	uavatar: uni.getStorageSync("userinfo").avatar,
      	to_uid: this.infoList.kf_id,
      	to_name: this.infoList.kfname,
      	to_avatar: this.infoList.kf_avatar,
      	type: 'text',
      	channel_type: 'wechat',
      }
      //通过websocket发送信息到后台
      this.ws.send({
      	data: JSON.stringify({
      		type: "chat",
      		data: parms
      	})
      })
      */
      //将chatlist发送给后端
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
          opposite_id: this.opposite_id
        },
        success: function success() {
          console.log("发送聊天记录成功");
        },
        fail: function fail(response) {
          console.log("发送聊天记录失败");
        }
      });
      this.inputValue = ''; //点击发送后清空输入框
      this.setPageScrollTo(); //滚动到最底部
      console.log('发送成功', this.inputValue);
    }
    /*
    			// 初始化websocket链接
    			initWebpack() {
    				//实例
    				this.ws = wx.connectSocket({
    					url: this.path
    				})
    				//链接成功
    				this.ws.onOpen((res) => {
    					let that = this
    					console.log("连接成功", that.ws.readyState);
    					if (that.ws.readyState == 1) {
    						wx.sendSocketMessage({ //发送消息到后台，和send一样，这是微信的写法
    							data: JSON.stringify({
    								type: "login",
    								data: {
    									id: uni.getStorageSync("userinfo").wechatUsers.id,
    									channel_type: 'wechat',
    									uid: uni.getStorageSync("userinfo").id,
    									openid: 'ojV4k6tnkv4_F1dddc3VwLeJ_QLs'
    								}
    							})
    						})
    						this.ws.send({
    							data: JSON.stringify({
    								type: "online",
    								data: {
    									online: 1,
    									user_type: 'user',
    									is_tourist: uni.getStorageSync("userinfo").id ? 0 : 1
    								}
    							})
    						})
    					}
    					that.start(); //链接成功后开启心跳
    				})
    				//链接异常
    				this.ws.onError((res) => {
    					console.log("出现错误");
    					this.reconnect(); //重连
    				})
    				//链接断开
    				this.ws.onClose((res) => {
    					console.log("连接关闭");
    					//断开链接时判断
    					if (this.closeType == 0) {
    						return
    					}
    					this.reconnect(); //重连
    				})
    				//后台返回消息
    				this.ws.onMessage((res) => {
    					let type = JSON.parse(res.data)
    					//后台返回消息，通过type字段判断是不是别人发送给我的消息
    					if (type.type == 'chat') {
    						this.chatlist.push(type.data) //把消息添加到信息列表渲染
    						this.setPageScrollTo() //滚动到最底部
    						console.log("收到后台信息：", JSON.parse(res.data));
    					}
    						this.reset(); //收到服务器信息，心跳重置
    				})
    				},
    			//重新连接
    			reconnect() {
    				var that = this;
    				//防止重复链接
    				if (that.lockReconnect) {
    					return;
    				}
    				that.lockReconnect = true;
    				//没连接上会一直重连，设置延迟避免请求过多
    				that.timeoutnum && clearTimeout(that.timeoutnum);
    				that.timeoutnum = setTimeout(function() {
    					that.initWebpack(); //新连接
    					that.lockReconnect = false;
    				}, 5000);
    			},
    			//重置心跳
    			reset() {
    				var that = this;
    				clearTimeout(that.timeoutObj); //清除心跳倒计时
    				clearTimeout(that.serverTimeoutObj); //清除超时关闭倒计时
    				that.start(); //重启心跳
    			},
    			//开启心跳
    			start() {
    				var self = this;
    				self.timeoutObj && clearTimeout(self.timeoutObj); //心跳倒计时如果有值就清除掉，防止重复
    				self.serverTimeoutObj && clearTimeout(self.serverTimeoutObj); //超时关闭倒计时如果有值就清除掉，防止重复
    				self.timeoutObj = setTimeout(function() {
    					if (self.ws.readyState == 1) {
    						wx.sendSocketMessage({
    							data: JSON.stringify({
    								type: "ping"
    							})
    						})
    					} else {
    						self.reconnect(); //重连
    					}
    						//如果超时了就关闭连接
    					self.serverTimeoutObj = setTimeout(function() {
    						self.ws.close();
    					}, self.timeout);
    				}, self.timeout);
    			},
    			*/
    //连接成功
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 294:
/*!*************************************************************************************************************************************************************************!*\
  !*** D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue?vue&type=style&index=0&id=eb12b574&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=style&index=0&id=eb12b574&scoped=true&lang=css& */ 295);
/* harmony import */ var _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_12_20230817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_eb12b574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 295:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/前端/A06-WeChat-mini-program-for-elderly-patients-with-dementia/frontend/pages/chatting/chatting.vue?vue&type=style&index=0&id=eb12b574&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[288,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chatting/chatting.js.map