import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import OnePost from '../views/OnePost.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'OnePost',
    props: true,
    component: OnePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
