
// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
Vue.use(uView);
// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在Vue.use(uView)之后执行
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 15
		}
		// 其他组件属性配置
		// ......
	}
})
import App from './App'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import patientguardian_state from '@/components/patient_guardian_state/patient_guardian_state.vue';

import tabBar from "@/components/tabbar/tabbar.vue"
Vue.component('tabBar',tabBar)
import edit_note from '@/components/edit_note/edit_note.vue'
Vue.component('edit_note',edit_note)
import guardianpatient_state from '@/components/guardian_patient_state/guardian_patient_state.vue'
//Vue.component('guardianpatient_state',guardianpatient_state)
import guardiandoctor_state from '@/components/guardian_doctor_state/guardian_doctor_state.vue'
//Vue.component('guardiandoctor_state',guardiandoctor_state)
import add_pill from '@/components/add_pill/add_pill.vue'
Vue.component('add_pill',add_pill)
import delete_pill from '@/components/delete_pill/delete_pill.vue'
Vue.component('delete_pill',delete_pill)
import add_heart from '@/components/add_heart/add_heart.vue'
Vue.component('add_heart',add_heart)
import add_temperature from '@/components/add_temperature/add_temperature.vue'
Vue.component('add_temperature',add_temperature)
import add_bp from '@/components/add_bp/add_bp.vue'
Vue.component('add_bp',add_bp)
import edit_info from '@/components/edit_info/edit_info.vue'
Vue.component('edit_info',edit_info)
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif