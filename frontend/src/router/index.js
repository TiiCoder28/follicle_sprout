import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import CustomerDashboard from '@/views/CustomerDashboard.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import PasswordReset from '@/components/PasswordReset.vue'
import VerificationCode from '@/components/VerificationCode.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupForm
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/customer-dashboard',
    name: 'customer-dashboard',
    component: CustomerDashboard
  },

  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: AdminDashboard
  },

  {
    path: '/send-forgot-password-code',
    name: 'send-forgot-password-code',
    component: ForgotPassword
  },
  {
    path: '/verify-forgot-password-code',
    name: 'verify-forgot-password-code',
    component: PasswordReset
  },
  {
    path: '/send-verification-code',
    name: 'send-verification-code',
    component: VerificationCode
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
