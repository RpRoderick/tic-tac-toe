import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/routes/Home.vue'
import Contact from '@/views/routes/Contact.vue'
import Play from '@/views/routes/Play.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
