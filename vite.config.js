import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/', // <--- Reemplaza con el nombre exacto de tu repo en GitHub
})