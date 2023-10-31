declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SplineAnimation: typeof import('vue3-spline')['Vue3Spline']
  }
}
export {}
