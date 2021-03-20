import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import PersonalInfo from '../components/HomePage/PersonalInfo'
import HomeContent from '../components/HomePage/HomeContent'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      children: [{
        path: '/person_info',
        name: 'PersonalInfo',
        component: PersonalInfo
      }, {
        path: '/home_content',
        name: 'HomeContent',
        component: HomeContent
      }]
    }]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' || store.state.user.isLogin) {
    next()
  } else {
    next({ name: 'LoginPage' })
  }
})

export default router
