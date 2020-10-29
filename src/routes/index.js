import Vue from 'vue'
import Router from 'vue-router'
import Stats from "@/components/Stats";
import Login from "@/components/Login";
import Default from "@/components/Default";
import SymptomsPage from "@/components/SymptomsPage";
import Profile from "@/components/Profile";
import RiskAssessments from "@/components/RiskAssessments";
import Settings from "@/components/Settings";

Vue.use(Router)

export default new Router({
    routes: [{ path: '/symptoms', name: "Symptoms",component: SymptomsPage},
        { path: '/profile', name: "Profile",component: Profile,
            children: [
                {path:'', component:Profile},
                {path:'risk',component:RiskAssessments},
                {path:'settings',component:Settings}
            ]
        },
    { path: '/stats', name: "Stats",component: Stats},
    { path: '/login', component: Login},
    { path: '/', name: "Default", component: Default}]});

