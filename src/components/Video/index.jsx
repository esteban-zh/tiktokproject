import React, { useRef } from 'react'
import { ActionBar } from '../ActionBar'
import { Description } from '../Description'
import { FaPlayCircle } from 'react-icons/fa'
import './styles.css'

export const Video = ({ source, poster }) => {
    const videoRef = useRef(null)
    const buttonPlayReference = useRef(null)

    const togglePlay = () => {
        if(videoRef.current.paused || videoRef.current.ended){
            videoRef.current.play()
            buttonPlayReference.current.classList.add("invisible")
        }else{
            videoRef.current.pause()
            buttonPlayReference.current.classList.remove("invisible")
        }
    }

  return (
    <div className='video--container'>
        <video loop poster={poster} ref={videoRef} className="video" onClick={togglePlay}>
            <source src={source} type="video/mp4"/>
        </video>
        <button ref={buttonPlayReference} onClick={togglePlay} className="video--button"><FaPlayCircle/></button>
        <ActionBar profileImg={"https://picsum.photos/200"}  likesCount={0} commentsCount={2} sharesCount= {1}/>       
        <Description />
    </div>
  )
}
