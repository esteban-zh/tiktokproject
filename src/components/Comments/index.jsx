import React, { useContext } from 'react'
import { CommentsContext } from '../../context/CommentsContext'
import { Comment } from '../Comment'
import { MdClose } from 'react-icons/md'
import './styles.css'

export const Comments = ( { comments }) => {
    const { currentCommentsState, toggleComments } = useContext(CommentsContext)

    if(currentCommentsState){
        return (
            <ul className='comments'>
                <button onClick={() => toggleComments(prev => !prev)}><MdClose /></button>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
            </ul>
        )
    }
}
