import type { Player } from '../src/index'
export interface VideoCompOptions {
  getPlayer: (player: Player) => void
  width: number
  height: number
  src: string
  poster?: string
  hideMouse?: number
  showFullScreen?: boolean
  showMultiple?: boolean
  loop?: boolean
  autoPlay?: boolean
}
