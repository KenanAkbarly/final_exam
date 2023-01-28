import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from './style.module.scss'
import { useSelector } from 'react-redux';
const Navbar = () => {
const data = useSelector((state)=> state.addToFav.value)

  return (
    <div className={styled.navbar}>
      <div className={styled.container}> 
      <div className={styled.navbar_left}>
        <Link to={''}><img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" /></Link>
      <div className={styled.navbar_middle}>
      <Link to={''}>Home</Link>
      <Link to={'add'}>Add</Link>
      <span>Shop</span>
      <span>Blog</span>
      <span>Contact</span>
      </div>
      </div>
      <div className={styled.navbar_right}>
        <div>
        <FiSearch/>
        </div>
        <div className={styled.wishlist}>
         <Link to={'wishlist'}><MdShoppingCart/></Link>
         <div>{data.length}</div>
        </div>
        <div className={styled.wishlist}>
         <Link to={'wishlist'}><AiOutlineHeart/></Link>
         <div>0</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
