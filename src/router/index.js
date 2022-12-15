import { createRouter, createWebHistory } from 'vue-router'
import Authorization from "../views/Authorization.vue";
import Chatroom from "../views/Chatroom.vue";

const routes = [
  {
    path: '/',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
