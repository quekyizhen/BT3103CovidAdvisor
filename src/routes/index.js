import Vue from 'vue'
import Router from 'vue-router'
import Stats from "@/components/Stats";
import Login from "@/components/Login";
import Default from "@/components/Default";
import SymptomsPage from "@/components/SymptomsPage";

Vue.use(Router)

export default new Router({
    routes: [{ path: '/symptoms', name: "Symptoms",component: SymptomsPage},
    { path: '/stats', name: "Stats",component: Stats},
    { path: '/login', component: Login},
    { path: '/', name: "Default", component: Default}]});

