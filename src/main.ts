import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import 'virtual:windi.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ router }) => {
    // Evita que Vue Router intercepte enlaces externos
    router.beforeEach((to, from, next) => {
      if (to.fullPath.startsWith('http')) {
        window.location.href = to.fullPath
      } else {
        next()
      }
    })
  }
)
