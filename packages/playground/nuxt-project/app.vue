<template>
  <ClientOnly>
    <Vue3Spline
      :scene="{
        url: link,
      }"
    ></Vue3Spline>
  </ClientOnly>
  <HelloWorld msg="Hello Spline! Using Nuxt 3" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const link = ref('https://prod.spline.design/VXwvUCucezeKhYSq/scene.splinecode')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
