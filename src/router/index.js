import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article' // 文章上传
import Activity from '@/components/activity' // 活动上传
import Banner from '@/components/banner' // 上传首页图片banner
import Login from '@/components/login/login'
import Main from '@/components/main/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    }, 
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/',
          redirect: '/main/article'
        },
        {
          path: '/main/article',
          name: 'Article',
          component: Article
        },
        {
          path: '/main/activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: '/main/banner',
          name: 'Banner',
          component: Banner
        }
      ]
    }
  ]
})
