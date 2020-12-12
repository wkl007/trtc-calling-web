/* eslint-disable @typescript-eslint/ban-types */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'trtc-calling-js'
