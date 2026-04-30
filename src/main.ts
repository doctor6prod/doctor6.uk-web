import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import 'virtual:windi.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ router }) => {
    // Eliminamos el beforeEach. 
    // Las rutas externas se manejan nativamente con etiquetas <a> en tus componentes.
    // Esto evita que el router intente procesar links de redes sociales o descargas de R2.
  }
)
