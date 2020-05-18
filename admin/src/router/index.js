import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
const Login = () => import('@/views/Login.vue')
const CategoryList = () => import('@/views/category/CategoryList.vue')
const CategoryEdit = () => import('@/views/category/CategoryEdit.vue')
const ItemList = () => import('@/views/item/ItemList.vue')
const ItemEdit = () => import('@/views/item/ItemEdit.vue')
const HeroList = () => import('@/views/hero/HeroList.vue')
const HeroEdit = () => import('@/views/hero/HeroEdit.vue')
const ArticleList = () => import('@/views/article/ArticleList.vue')
const ArticleEdit = () => import('@/views/article/ArticleEdit.vue')
const AdList = () => import('@/views/ad/AdList.vue')
const AdEdit = () => import('@/views/ad/AdEdit.vue')
const AdminUserList = () => import('@/views/adminUser/AdminUserList.vue')
const AdminUserEdit = () => import('@/views/adminUser/AdminUserEdit.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { 
      isPublic: true
     }
  },
  {
    path: '/', 
    name: 'Main', 
    component: Main, 
    children: [
      {path: '/categories/create', component: CategoryEdit}, 
      {path: '/categories/edit/:id', component: CategoryEdit, props: true}, 
      {path: '/categories/list', component: CategoryList}, 

      {path: '/items/create', component: ItemEdit}, 
      {path: '/items/edit/:id', component: ItemEdit, props: true}, 
      {path: '/items/list', component: ItemList}, 
      
      {path: '/heroes/create', component: HeroEdit}, 
      {path: '/heroes/edit/:id', component: HeroEdit, props: true}, 
      {path: '/heroes/list', component: HeroList}, 
      
      {path: '/articles/create', component: ArticleEdit}, 
      {path: '/articles/edit/:id', component: ArticleEdit, props: true}, 
      {path: '/articles/list', component: ArticleList},

      {path: '/ads/create', component: AdEdit}, 
      {path: '/ads/edit/:id', component: AdEdit, props: true}, 
      {path: '/ads/list', component: AdList},

      {path: '/admin_users/create', component: AdminUserEdit}, 
      {path: '/admin_users/edit/:id', component: AdminUserEdit, props: true}, 
      {path: '/admin_users/list', component: AdminUserList},
    ]
  }, 
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !sessionStorage.token) {
    return next('/login')
  }
  next()
})

export default router
