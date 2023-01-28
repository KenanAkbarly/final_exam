import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFav } from '../../../redux/slice/FavSlice'
import styled from './style.module.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
const Wishlist = () => {
const data = useSelector((state)=> state.addToFav.value)
const dispatch = useDispatch()
  return (
    <div className={styled.wislist_body}>
        <div className={styled.contanier}>
       <div className={styled.owerview_cards}>
            {
                data&& data.map((item)=>{
                    return(
                        <div className={styled.owerview_cards_card}>
                        <img src={item.img} alt="" />
                        <div>
                            <h4>{item.name}</h4>
                            <AiOutlineHeart/>
                        </div>
                        <p>${item.price}</p>
                        <div>
                            <button onClick={()=>{
                                dispatch(removeFromFav(item._id))
                            }} className={styled.btnDelete}>Delete</button>
                            <Link to={`/detail/${item._id}`}> <button className={styled.btnDetail}>Detail</button></Link>
                            {/* <button onClick={()=>dispatch(addToFav(item))} className={styled.btnWishlit}>Add Wislist</button> */}
                        </div>
                    </div>
                    )
                })
            }
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
        </div>
    </div>
  )
}

export default Wishlist
