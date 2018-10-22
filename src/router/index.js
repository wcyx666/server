import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article'
import Activity from '@/components/activity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }
  ]
})
