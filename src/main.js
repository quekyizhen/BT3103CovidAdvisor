import Vue from 'vue';
import App from './App.vue';
import VueGeolocation from 'vue-browser-geolocation';
import router from "./routes/index";

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB51XbzxKAdmS_dyEpMRItpt5x5Ll30spU'
  },
  installComponents: true,
})

new Vue({
  render: h => h(App),
}).$mount('#app')
