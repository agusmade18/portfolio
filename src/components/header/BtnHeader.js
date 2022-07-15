import React from 'react'
import CV from '../../assets/cvagus.pdf'

const BtnHeader = () => {
  return (
    <div className='btn__header'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#about' className='btn'>Tentang Saya</a>
    </div>
  )
}

export default BtnHeader