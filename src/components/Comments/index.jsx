import React from 'react'
import { Comment } from '../Comment'
import './styles.css'

export const Comments = ( { comments }) => {
  return (
    <ul className='comments'>
        <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
    </ul>
  )
}
