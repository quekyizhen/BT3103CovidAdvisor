import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB51XbzxKAdmS_dyEpMRItpt5x5Ll30spU',
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
