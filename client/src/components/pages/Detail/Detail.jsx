import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from './style.module.scss'
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { addToFav } from '../../../redux/slice/FavSlice'

const Detail = () => {
    const {id} = useParams()

    const [item,setItem] = useState([])

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/prod/${id}`).then((res)=>{
            setItem(res.data)
            console.log(res.data);
        })
    },[])
  return (
    <div className={styled.detail_body}>
      <div className={styled.owerview_cards_card}>
                        <img src={item.img} alt="" />
                        <div>
                            <h4>{item.name}</h4>
                            <AiOutlineHeart/>
                        </div>
                        <p>${item.price}</p>
                        <div>
                            <button onClick={()=> navigate(-1)}  className={styled.btnDelete}>Back</button>
                            
                            <button onClick={()=> dispatch(addToFav(item))} className={styled.btnWishlit}>Add Wislist</button>
                        </div>
                    </div>
    </div>
  )
}

export default Detail
