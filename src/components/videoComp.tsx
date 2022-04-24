import { VideoCompOptions } from '../../types/video'
import { FC, useEffect, useRef } from 'react'
import Player from '../player'

const PlayerComp: FC<VideoCompOptions> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { width, getPlayer, height, src, poster = '', autoPlay = false } = props

  useEffect(() => {
    if (getPlayer && typeof getPlayer === 'function') {
      const player = new Player(videoRef)

      getPlayer(player)
    }
  }, [])
  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={autoPlay}
      height={height}
      width={width}
      poster={poster}
      controls
    >
      您的浏览器暂不支持HTML5播放
    </video>
  )
}

export default PlayerComp
