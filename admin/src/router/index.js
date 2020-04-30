import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
const CategoryList = () => import('@/views/category/CategoryList.vue')
const CategoryEdit = () => import('@/views/category/CategoryEdit.vue')
const ItemList = () => import('@/views/item/ItemList.vue')
const ItemEdit = () => import('@/views/item/ItemEdit.vue')
const HeroList = () => import('@/views/hero/HeroList.vue')
const HeroEdit = () => import('@/views/hero/HeroEdit.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/items/list',
        component: ItemList
      },
      {
        path: '/heroes/create',
        component: HeroEdit
      },
      {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        props: true
      },
      {
        path: '/heroes/list',
        component: HeroList
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
