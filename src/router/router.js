import Home from '../views/Home.vue'

export default[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: () => import('../views/Topic.vue')
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/topic',
      redirect: '/'
    },
    {
      path: '/user',
      redirect: '/'
    }
]
