import Home from '../views/Home.vue'

export default[
    {
      path: '/dist',
      name: 'home',
      component: Home
    },
    {
      path: '/dist/topic/:id',
      name: 'topic',
      component: () => import('../views/Topic.vue')
    },
    {
      path: '/dist/user/:loginname',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/dist/topic',
      redirect: '/'
    },
    {
      path: '/dist/user',
      redirect: '/'
    }
]
