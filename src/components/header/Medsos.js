import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa'


const Medsos = () => {
  return (
    <div className='medsos'>
        <a href='https://web.facebook.com/newbieagus' target='_blank'> <FaFacebook className='medsosItem' /> </a>
        <a href='https://www.instagram.com/lawudev/' target='_blank'> <FaInstagram className='medsosItem' /> </a>
        <a href='https://www.youtube.com/channel/UCQ9OJd7dip0twqMkOmLpbOw' target='_blank'> <FaYoutube className='medsosItem' /> </a>
        <a href='https://github.com/agusmade18' target='_blank'> <FaGithub className='medsosItem' /> </a>
    </div>
  )
}

export default Medsos