import React from 'react'
import './styles.css'

export const ProfileNavbar = () => {
  return (
    <nav className='profileNavbar'>
        <ul className='profileNavbar--list'>
            <li>
                <a href="/">Tik Toks</a>
            </li>
            <li>
                <a href="/">Likes</a>
            </li>
        </ul>
    </nav>
  )
}
