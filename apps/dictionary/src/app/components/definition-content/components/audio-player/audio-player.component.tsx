import React from 'react'
import { getAudioUrl } from '../../../../state/features/form'
import { useAppSelector } from '../../../../state/hooks'
import{FaPlay } from 'react-icons/fa'
import * as Styled from './audio-player.styles'

export function AudioPlayer() {
  const audioRef = React.useRef<any>(null)
  const audioUrl = useAppSelector(getAudioUrl)
  if (!audioUrl) return null;

  function handlePlay() {
    if (audioRef.current) {
    audioRef?.current?.play()
   }
  }

  return (
    <>
    <Styled.Container ref={audioRef} key={audioUrl}>
        <source src={audioUrl} type="audio/mpeg"  />
      </Styled.Container>
      <Styled.Button type="button" onClick={handlePlay}>
        <FaPlay size="24px" />
      </Styled.Button>
    </>
  )
}

export default AudioPlayer
