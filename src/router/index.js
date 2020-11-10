import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/Bar',
    name: 'Bar',
    component: () => import(/* webpackChunkName: "about" */ '../components/AgeBarChart.vue')
  },
  {
    path: '/Pie',
    name: 'Pie',
    component: () => import(/* webpackChunkName: "about" */ '../components/Pie_API.vue')
  },
  {
    path: '/Line',
    name: 'Line',
    component: () => import(/* webpackChunkName: "about" */ '../components/Line_Breakdown.vue')
  },
  {
    path: '/Gender',
    name: 'Gender',
    component: () => import(/* webpackChunkName: "about" */ '../components/Doughnut_Gender.vue')
  },
  {
    path: '/Nationality',
    name: 'Nationality',
    component: () => import(/* webpackChunkName: "about" */ '../components/Doughnut_Nationality.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
