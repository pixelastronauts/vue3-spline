import Vue3Spline from 'vue3-spline'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Spline, { name: 'Vue3Spline' })
})
