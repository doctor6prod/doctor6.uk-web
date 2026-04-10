import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router' // Cambié ~/ por ./ para probar
import 'virtual:windi.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ router }) => {
    // Sin lógica extra para probar
  }
)
