import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import('@/views/main/Main')
const Home = () => import('@/views/main/home/Home')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: "Home", component: Home }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
