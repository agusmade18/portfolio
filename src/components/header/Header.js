import React from 'react'
import BtnHeader from './BtnHeader'
import MyPic from '../../assets/mypic.jpeg'
import Medsos from './Medsos'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="card">
        <div className="card-header">
          <h4>Om Swastyastu</h4>
          <small className='text-light'>-- Perkenalkan saya --</small>
        </div>
        <div className="card-body">
          <img src={MyPic} alt='my picture' className='header__image' />
          <h5 className="card-title">I Made Agus Suyasa</h5>
          <p className="card-text">Web Developer.</p>
          <Medsos />
          <BtnHeader />
        </div>
      </div>
    </header>
  )
}

export default Header