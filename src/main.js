import Vue from 'vue';
import App from './App.vue';
import router from "./routes/index";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

Vue.config.productionTip = false;

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB51XbzxKAdmS_dyEpMRItpt5x5Ll30spU',
  },
});


export const firebaseConfig = {
  apiKey: "AIzaSyC0wn78cHDG7Rb97vS9NhFsia0BIfB1Mi8",
  authDomain: "bt3103covidadvisor.firebaseapp.com",
  databaseURL: "https://bt3103covidadvisor.firebaseio.com",
  projectId: "bt3103covidadvisor",
  storageBucket: "bt3103covidadvisor.appspot.com",
  messagingSenderId: "688888531172",
  appId: "1:688888531172:web:2a6ea4165bb4adb4f144f1",
  measurementId: "G-ZJG5FEQCBT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')