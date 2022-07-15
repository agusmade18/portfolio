import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="con__footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link px-2 link">Tentang Saya</a></li>
          <li className="nav-item"><a href="#portfolio" className="nav-link px-2 link">Portfolio</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link px-2 link">Contact</a></li>
        </ul>
        <p className="text-center text-bottom">&copy; 2022 Agus Suyasa</p>
      </footer>
    </div>
  )
}

export default Footer