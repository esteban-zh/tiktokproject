import React, {useState} from 'react'
import { FaHeart, FaComment, FaShare, FaPlus } from 'react-icons/fa'
import "./styles.css"

export const ActionBar = ({ profileImg, likesCount, commentsCount, sharesCount}) => {
  const [ likes, setLikes] = useState(likesCount)
  const [ comments, setComments] = useState(commentsCount)
  const [ shares, setShares] = useState(sharesCount)
  return (
    <ul className='actions'>
        <li className='actions--item'>
            <img className='actions--img' src={profileImg} alt="foto de perfil" />
            <span><FaPlus /></span>
        </li>
        <li className='actions--item'>
            <button onClick={()=> {
                (likes !== likesCount) ? setLikes(likesCount) : setLikes(prev => prev +1) 
            }}>
                <FaHeart />
            </button>
            <p className='actions--number'>{likes}</p>
        </li>
        <li className='actions--item'>
            <button>
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
