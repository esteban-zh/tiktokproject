import React from 'react'
import './styles.css'

export const ProfileBar = ( {name, img, followers, likes, following}) => {
  return (
    <div className='profileBar'>
        <img src="http://picsum.photos/50" alt="profile pic" />
        <ul className='profileBar--list'>
            <li>
                <p className='profileBar--paragraph__semibold'>100</p>
                <p className='profileBar--paragraph__bold'>followers</p>
            </li>
            <li>
                <p className='profileBar--paragraph__semibold'>300</p>
                <p className='profileBar--paragraph__bold'>following</p>
            </li>
            <li>
                <p className='profileBar--paragraph__semibold'>10</p>
                <p className='profileBar--paragraph__bold'>likes</p>
            </li>
        </ul>
    </div>
  )
}
