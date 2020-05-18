import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import('@/views/main/Main')
const Home = () => import('@/views/main/home/Home')
const Article = () => import('@/views/main/Article')
const Hero = () => import('@/views/main/Hero')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: "Home", component: Home },
      { path: '/articles/:id', name: "Article", component: Article, props: true },
    ]
  },
  { path: '/heroes/:id', name: "Hero", component: Hero, props: true }
]

const router = new VueRouter({
  routes
})

export default router
