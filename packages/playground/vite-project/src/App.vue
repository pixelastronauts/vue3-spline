<template>
  <Vue3Spline
    :scene="{
      url: link,
    }"
  ></Vue3Spline>
  <HelloWorld msg="Hello Spline! Using Vue 3 + TypeScript + Vite" />
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
