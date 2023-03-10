import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CommentsContext } from '../../context/CommentsContext'
import { FaHeart, FaComment, FaShare, FaPlus } from 'react-icons/fa'
import "./styles.css"

export const ActionBar = ({ profileImg, likesCount, commentsCount, sharesCount}) => {
  const {toggleComments}= useContext(CommentsContext)
  const [ likes, setLikes] = useState(likesCount)
//   const [ comments, setComments] = useState(commentsCount)
//   const [ shares, setShares] = useState(sharesCount)
  const comments = commentsCount;
  const shares = sharesCount;

  const handleLike = (e) => {
    e.preventDefault();
    const target = e.target;
        if(likes !== likesCount){
            target.classList.remove("active")
            setLikes(likesCount)
        }else{
            target.classList.add("active")
            setLikes(prev => prev + 1)
        }
  }
  return (
    <ul className='actions'>
        <li className='actions--item'>
            <Link to="/profile">
                <img className='actions--img' src={profileImg} alt="foto de perfil" />
                <span><FaPlus /></span>
            </Link>
        </li>
        <li className='actions--item'>
            <button onClick={handleLike}>
                <FaHeart />
            </button>
            <p className='actions--number'>{likes}</p>
        </li>
        <li className='actions--item'>
            <button onClick={() => toggleComments(prev => !prev)}>
                <FaComment />
            </button>
            <p className='actions--number'>{comments}</p>
        </li>
        <li className='actions--item'>
            <button>
                <FaShare />
            </button>
            <p className='actions--number'>{shares}</p>
        </li>
    </ul>
  )
}
