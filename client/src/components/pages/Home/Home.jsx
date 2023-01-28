import React, { useEffect } from 'react'
import styled from './style.module.scss'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { addToFav } from '../../../redux/slice/FavSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [data,setData] = useState([])

    const [toggle,setToggle] = useState(true)

    const [input,setInput] = useState('')

    const dispatch = useDispatch()

    const handleChange = (event) =>{
        setInput(event.target.value)
        axios.get('http://localhost:8080/api/prod').then((res)=>{
            setData([...res.data.filter((item)=>item.name.toLowerCase().includes(event.target.value.toLowerCase()))])
        })
        
    }
    useEffect(()=>{
        axios.get('http://localhost:8080/api/prod').then((res)=>{
            setData(res.data)
        })

    },[])

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const sortData = (obj)=>{
        setToggle(!toggle)
        if(toggle){
            let sortMinToMax = obj.sort((a,b)=> a.price -b.price)
            setData([...sortMinToMax])
        }else{
            let sortMaxToMin = obj.sort((a,b)=> b.price -a.price)
            setData([...sortMaxToMin])
        }
    }
  return (
    <div>
      
      <div className={styled.top_body}> 
      <div className={styled.carusel_body}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            position:'absolute',
            top:"50%",

            right:0,
            zIndex:10,
            marginRight:"10px"


          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            position:'absolute',
            top:"50%",
            left:0,
            zIndex:10,
            marginLeft:"10px"

          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className={styled.carusel1}>
         <div className={styled.contanier}>
            <div>
                <p>Men Cllection 2018</p>
                <h1>New Arrivals</h1>
                <button>Shop Now</button>

            </div>
         </div>
        </div>
        <div className={styled.carusel2}>
        <div className={styled.contanier}>
        <div>
                <p>Men Cllection 2018</p>
                <h1>New Arrivals</h1>
                <button>Shop Now</button>
            </div>
        </div>
        </div>
        <div className={styled.carusel3}>
        <div className={styled.contanier}>
        <div>
                <p>Men Cllection 2018</p>
                <h1>New Arrivals</h1>
                <button>Shop Now</button>

            </div>
     </div>
        </div>
       
      </ReactSimplyCarousel>
    </div>
      </div>

      <section className={styled.products_cards_section}>
            <div className={styled.contanier}>
                <div className={styled.products_cards}>
                    <div className={styled.products_cards_card1}>
                        <p>Women</p>
                        <h2>Spring 2018</h2>
                    </div>
                    <div className={styled.products_cards_card2}>
                        <p>Women</p>
                        <h2>Spring 2018</h2>
                    </div>
                    <div className={styled.products_cards_card3}>
                        <p>Women</p>
                        <h2>Spring 2018</h2>
                    </div>
                </div>
            </div>
      </section>

      <section className={styled.owerview_section}>
       <div className={styled.contanier}>
          <div className={styled.owerview_section_text}>
            <h1>PRODUCT OVERVIEW</h1>
            <div className={styled.owerview_section_bottom}>
                    <div className={styled.owerview_section_bottom_links}>
                            <span>All Products</span>
                            <span>Women</span>
                            <span>Men</span>
                            <span>Bag</span>
                            <span>Shoes</span>
                            <span>Watches</span>
                    </div>
                    <div className={styled.serchName}>
                          <input value={input} onChange={handleChange} type="text" placeholder='Search...'/>
                          <FiSearch/>

                    </div>
            </div>
          </div>
            <button onClick={()=> sortData(data)} className={styled.sortPrice}>Filter Price</button>
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
                                axios.delete(`http://localhost:8080/api/prod/${item._id}`).then((res)=>{
                                    if(res.status === 200){
                                        setData(
                                            data.filter((i)=> i._id !== item._id)
                                        )
                                toast.success('Successfully deleted!')

                                    }
                                })
                            }} className={styled.btnDelete}>Delete</button>
                            <Link to={`detail/${item._id}`}> <button className={styled.btnDetail}>Detail</button></Link>
                            <button onClick={()=>dispatch(addToFav(item))} className={styled.btnWishlit}>Add Wislist</button>
                        </div>
                    </div>
                    )
                })
            }
            
          
        </div>
       </div>
      </section>
    </div>
  )
}

export default Home
