import { RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import SearchResult from './pages/SearchResult.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/s', component: SearchResult }
]

export default routes
