# Vue 3 Spline

Add Spline animations to your Vue 3 or Nuxt 3 application.

<p align="center">
  <a href="#">
    <img src="header.png" />
  </a>
</p>

`vue3-spline` was created to facilitate developers in integrating Spline animations into their Vue 3 applications. During my quest for an uncomplicated method to incorporate Spline animations into my Vue project, I discovered a noticeable absence of up-to-date solutions. `vue3-spline` serves as a Vue wrapper around the `spline-runtime` library, enriched with several additional features.

## Installation and Usage

### Vue 3

- You can install `vue3-spline` over `yarn`, `npm` or `pnpm. `spline-runtime`is a dependency of`vue3-spline`and should be automatically installed when you install`vue3-spline`.

If you are using npm:

```shell
npm install vue3-spline@latest --save
```

If you are using yarn:

```shell
yarn add vue3-spline@latest
```

If you are using pnpm:

```shell
pnpm install vue3-spline@latest
```

- Register the component in your Vue 3 application.

The most common use case is to register the component globally.

```js
// main.js
import { createApp } from 'vue'
import Vue3Spline from 'vue3-spline'

createApp(App).use(Vue3Spline).mount('#app')
```

If you get an error with TS, try `use(Vue3Spline, { name: "Vue3Spline" })`

To define global components for [Volar type-checking](https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-vue-language-features#usage) you will need to add:

```ts
// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SplineAnimation: typeof import('vue3-spline')['Vue3Spline']
  }
}
export {}
```

If needed rename component to use:

```ts
app.use(Vue3Spline, { name: 'SplineAnimation' }) // use in template <SplineAnimation />
```

- `name` string (default: 'Vue3Spline') - set custom component name

Alternatively you can also import the component locally.

```js
import { Vue3Spline } from 'vue3-spline'

export default {
  components: {
    Vue3Spline,
  },
}
```

You can then use the component in your template

```vue
<template>
  <Vue3Spline
    :scene="{
      url: 'https://prod.spline.design/VXwvUCucezeKhYSq/scene.splinecode',
    }"
  />
</template>

<script>
import { Vue3Spline } from 'vue3-spline'

export default {
  components: {
    Vue3Spline,
  },
}
</script>
```

### Nuxt 3

This is still experimental. Will be updated soon.

- You can install `vue3-spline` over `yarn` or `npm`. `spline-runtime` is a dependency of `vue3-spline` and should be automatically installed when you install `vue3-spline`.

If you are using npm:

```shell
npm install vue3-spline@latest --save
```

If you are using yarn:

```shell
yarn add vue3-spline@latest
```

- Create a folder called **`plugins`** at the root of your project.
- Create a file named **`Vue3Spline.client.ts`** inside the _plugins_ directory.
- Add the following code to the **`Vue3Spline.client.ts`** file.

```ts
import Vue3Spline from 'vue3-spline'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Spline)
})
```

If you get an error with TS, try `use(Vue3Spline, { name: "Vue3Spline" })`

This should register as a global component that you can call anywhere in your app under the <Vue3Spline> tag.

I would recommend using a `<client-only>` parent tag to ensure that the animation only loads in on the client side.

```vue
<client-only>
  <Vue3Spline
    :scene="{
      url: 'https://prod.spline.design/VXwvUCucezeKhYSq/scene.splinecode',
    }"
  />
</client-only>
```
