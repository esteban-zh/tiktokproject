import React from 'react'
import './styles.css'

export const Description = ({ description, profile, sound, date}) => {
  return (
    <div className='description'>
        <p className='description--profile'>@profile</p>
        <p className='description--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos minus adipisci commodi, nulla molestias itaque optio voluptatum obcaecati, tempore ad id nam cum aut facilis qui! Unde, maxime rem?</p>
        <p className='description--date'>hace 20 horas</p>
    </div>
  )
}
