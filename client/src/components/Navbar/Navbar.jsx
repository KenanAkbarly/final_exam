import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from './style.module.scss'
import { useSelector } from 'react-redux';
const Navbar = () => {
const data = useSelector((state)=> state.addToFav.value)
const [scroll,setScroll] = useState(false)
window.onscroll = function(){
  let scrool = window.pageYOffset;
  if(300<scrool){
  setScroll(true)
  }else{
    setScroll(false)
    
  }
  console.log(scroll);
}
  return (
    <div style={{ backgroundColor:scroll?'white' :'tranparent'}} className={styled.navbar}>
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
