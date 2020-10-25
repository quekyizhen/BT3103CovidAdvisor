import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from './components/Profile.vue'
import RiskAssessments from './components/RiskAssessments.vue'
import Settings from './components/Settings.vue'

Vue.use(VueRouter)

export default new VueRouter( [
    {path:'/', component:Profile},
    {path:'/risk',component:RiskAssessments},
    {path:'/settings',component:Settings}
]);