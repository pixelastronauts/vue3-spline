import type { App, Plugin } from 'vue'
import Vue3Spline from './vue3-spline.vue'
export * from './types'

export interface PluginOptions {
  name?: string
}

export default {
  install(app: App, options?: PluginOptions) {
    const name = options?.name ?? 'Vue3Spline'
    app.component(name, Vue3Spline)
  },
} as Plugin

export { Vue3Spline }
