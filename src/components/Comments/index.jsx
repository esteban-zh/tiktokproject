import React, { useContext } from 'react'
import { CommentsContext } from '../../context/CommentsContext'
import { Comment } from '../Comment'
import './styles.css'

export const Comments = ( { comments }) => {
    const { currentCommentsState } = useContext(CommentsContext)

    if(currentCommentsState){
        return (
            <ul className='comments'>
                <Comment profilePic={"http://picsum.photos/50"} content="hola!!" likes="1" user="leocode" date="hace 2 horas"/>
            </ul>
        )
    }
}
