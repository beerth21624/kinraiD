import React from 'react'
import './Navbar.scss'
import { AiFillHeart } from 'react-icons/ai'

const Navbar = ({ setModal = () => {}, countFavorite = 0 }) => {
  function openModal() {
    setModal(true)
  }
  return (
    <div className="nav-container">
      <div className="logo-text ">SEE FOOD</div>
      <div onClick={() => openModal()} className="fav-box">
        <AiFillHeart style={{ cursor: 'pointer', fontSize: '26px' }} />
        <span className="favorite-count">{countFavorite}</span>
      </div>
    </div>
  )
}

export default Navbar
