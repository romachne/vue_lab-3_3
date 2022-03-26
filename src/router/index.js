import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewsView from "@/views/NewsView";
import FullNewsView from "@/views/FullNewsView";
import GalleryView from "@/views/GalleryView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/news/:id',
    name: 'fullnews',
    component: FullNewsView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
