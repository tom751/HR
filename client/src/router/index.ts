import { useAuthStore } from '@/store'
import Details from '@/views/Details.vue'
import Holidays from '@/views/Holidays.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Payslips from '@/views/Payslips.vue'
import Sickness from '@/views/Sickness.vue'
import { createRouter, createWebHistory, RouteRecordName, RouteRecordRaw } from 'vue-router'
import { RouteNames, RoutePaths } from './enums'

const routes: RouteRecordRaw[] = [
  { path: RoutePaths.Home, name: RouteNames.Home, component: Home },
  { path: RoutePaths.Details, name: RouteNames.Details, component: Details },
  { path: RoutePaths.Holidays, name: RouteNames.Holidays, component: Holidays },
  { path: RoutePaths.Sickness, name: RouteNames.Sickness, component: Sickness },
  { path: RoutePaths.Payslips, name: RouteNames.Payslips, component: Payslips },
  { path: RoutePaths.Login, name: RouteNames.Login, component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const unauthenicatedRoutes: RouteRecordName[] = [RouteNames.Login]

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (authStore.isLoggedIn && to.name === RouteNames.Login) {
    return { name: RouteNames.Home }
  }

  if (!authStore.isLoggedIn && !unauthenicatedRoutes.includes(to.name || '')) {
    return { name: RouteNames.Login }
  }
})

export default router
