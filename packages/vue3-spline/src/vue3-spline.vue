<template>
  <canvas ref="canvasRef" :style="canvasStyle" :id="canvasId"></canvas>
</template>

<script lang="ts" setup>
import { Application, SplineEventName } from '@splinetool/runtime'
import { ref, onMounted, StyleValue } from 'vue'

interface SceneProps {
  url: string
  variables?: Record<string, any>
}

// Props with validation and defaults
const props = defineProps({
  canvasId: {
    type: String,
    default: 'spline-canvas',
  },
  scene: {
    type: Object as () => SceneProps,
    required: true,
  },
  canvasStyle: {
    type: Object as () => StyleValue,
    default: () => ({ height: '100%', width: '100%', outline: 'none' }),
  },
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const splineInstance = ref<Application | null>(null)

const emit = defineEmits(['loaded', 'error'])

onMounted(() => {
  if (canvasRef.value) {
    splineInstance.value = new Application(canvasRef.value)

    splineInstance.value
      .load(props.scene.url, props.scene.variables)
      .then(() => emit('loaded'))
      .catch((error) => emit('error', error))
  }
})

// Methods to control the Spline application
const play = () => splineInstance.value?.play()
const pause = () => splineInstance.value?.stop()
const setVariables = (variables: Record<string, any>) =>
  splineInstance.value?.setVariables(variables)
const setVariable = (name: string, value: any) =>
  splineInstance.value?.setVariable(name, value)
const getVariables = (): Record<string, any> | undefined =>
  splineInstance.value?.getVariables()
const getVariable = (name: string) => splineInstance.value?.getVariable(name)
const stop = () => splineInstance.value?.stop()
const setBackgroundColor = (color: string) =>
  splineInstance.value?.setBackgroundColor(color)
const getAllObjects = () => splineInstance.value?.getAllObjects()
const getSplineEvents = () => splineInstance.value?.getSplineEvents()
const setZoom = (zoom: number) => splineInstance.value?.setZoom(zoom)
const setSize = (width: number, height: number) =>
  splineInstance.value?.setSize(width, height)
const findObjectById = (uuid: string) =>
  splineInstance.value?.findObjectById(uuid)
const findObjectByName = (name: string) =>
  splineInstance.value?.findObjectByName(name)
const emitEvent = (eventName: SplineEventName, nameOrUuid: string) =>
  splineInstance.value?.emitEvent(eventName, nameOrUuid)
const emitEventReverse = (eventName: SplineEventName, nameOrUuid: string) =>
  splineInstance.value?.emitEventReverse(eventName, nameOrUuid)
const addEventListener = (
  eventName: SplineEventName,
  cb: (event: any) => void,
) => splineInstance.value?.addEventListener(eventName, cb)
const removeEventListener = (
  eventName: SplineEventName,
  cb: (event: any) => void,
) => splineInstance.value?.removeEventListener(eventName, cb)
const spline = splineInstance

defineExpose({
  spline,
  play,
  pause,
  stop,
  setVariables,
  setVariable,
  getVariables,
  getVariable,
  setBackgroundColor,
  getAllObjects,
  getSplineEvents,
  setZoom,
  setSize,
  findObjectById,
  findObjectByName,
  emitEvent,
  emitEventReverse,
  addEventListener,
  removeEventListener,
})
</script>
