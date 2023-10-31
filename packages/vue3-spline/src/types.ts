import { StyleValue } from 'vue'

// Basic type for scene props
export interface SceneProps {
  url: string
  variables?: Record<string, any>
}

// Props for the Vue component
export interface SplineCanvasProps {
  canvasId?: string
  scene: SceneProps
  canvasStyle?: StyleValue
}

// Type for the Spline application instance
export interface Application {
  load(url: string, variables?: Record<string, any>): Promise<void>
  play(): void
  stop(): void
  setVariables(variables: Record<string, any>): void
  setVariable(name: string, value: any): void
  getVariables(): Record<string, any> | undefined
  getVariable(name: string): any
  setBackgroundColor(color: string): void
  getAllObjects(): any
  getSplineEvents(): any
  setZoom(zoom: number): void
  setSize(width: number, height: number): void
  findObjectById(uuid: string): any
  findObjectByName(name: string): any
  emitEvent(eventName: SplineEventName, nameOrUuid: string): void
  emitEventReverse(eventName: SplineEventName, nameOrUuid: string): void
  addEventListener(eventName: SplineEventName, cb: (event: any) => void): void
  removeEventListener(
    eventName: SplineEventName,
    cb: (event: any) => void,
  ): void
}

// Type for supported Spline event names (assuming we don't have the complete list)
export type SplineEventName = string
