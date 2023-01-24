import React from 'react'
import { ProfileBar } from '../../components/ProfileBar/index.jsx'
import { VideoGrid } from '../../components/VideoGrid/index.jsx'
import { ProfileNavbar } from "../../components/ProfileNavbar"
import './styles.css'

export const Profile = () => {
  return (
    <div className='profile'>
        <ProfileBar />
        <ProfileNavbar />
        <VideoGrid />
    </div>
  )
}
