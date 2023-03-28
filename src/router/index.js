import { createRouter, createWebHistory } from 'vue-router'
import LoanView from '../views/LoanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loanRequest',
      component: LoanView
    }
  ]
})

export default router
