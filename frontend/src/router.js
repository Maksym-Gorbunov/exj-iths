import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('./components/pages/HomePage.vue')
    },
    {
      path: '/api',
      name: 'ApiPage',
      component: () => import('./components/pages/ApiPage.vue')
    },
    {
      path: '/countries',
      name: 'CountriesPage',
      component: () => import('./components/pages/CountriesPage.vue')
    },
    {
      path: '/total',
      name: 'TotalPage',
      component: () => import('./components/pages/TotalPage.vue')
    },
    {
      path: '/daily',
      name: 'DailyPage',
      component: () => import('./components/pages/DailyPage.vue')
    },
    {
      path: '/country',
      name: 'CountryPage',
      component: () => import('./components/pages/CountryPage.vue')
    }
  ]
})
