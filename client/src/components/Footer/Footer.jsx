import React from 'react'
import styled from './style.module.scss'
import { AiFillInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className={styled.footer}>
      <div className={styled.contanier}>
        <div className={styled.catagories}>
            <h2>CATEGORIES</h2>
            <p>Women</p>
            <p>Men</p>
            <p>Shoes</p>
            <p>Watches</p>
        </div>
        <div className={styled.catagories}>
            <h2>HELP</h2>
            <p>Track Order</p>
            <p>Returns</p>
            <p>Shipping</p>
            <p>FAQs</p>
        </div>
        <div className={styled.catagories}>
            <h2>GET IN TOUCH</h2>
            <p className={styled.text}>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            <p className={styled.icons}><AiFillInstagram/> <FiFacebook/> <FaPinterestP/></p>
        </div>
        <div className={styled.catagories}>
            <h2>NEWSLETTER</h2>
           <div className={styled.input}>
            <input type="text" placeholder='email@example.com
'/>
           </div>
           <button>SUBSCRIBE</button>
        </div>
       
      </div>
      <p className={styled.colorlib}><span>Copyright ©2023 All rights reserved | This template is made with 🤍 by </span><span> Colorlib</span></p>
    </div>
  )
}

export default Footer
