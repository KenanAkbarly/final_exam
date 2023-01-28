import React from 'react'
import styled from './style.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import toast from 'react-hot-toast';

const Add = () => {
    const formik = useFormik({
        initialValues: {
            img: '',
            name: '',
            price: '',
        },
        validationSchema: Yup.object({
            img: Yup.string()
            .max(505, 'Must be 15 characters or less')
            .required('Required'),
            name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          price: Yup.number().required('Required'),
        }),
        onSubmit: values => {
            axios.post('http://localhost:8080/api/prod',values).then((res)=>{
                console.log(res.data);
            })
          formik.resetForm()
          toast.success('Successfully Added!')
        },
      });
  return (
    <div className={styled.add_body}>
      <div className={styled.contanier}>
      <form onSubmit={formik.handleSubmit}>
      <div>
      <input
         id="img"
         name="img"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.img}
         placeholder="Add img link"
       />
       {formik.touched.img && formik.errors.img ? (
         <span>{formik.errors.img}</span>
       ) : null}
      </div>
      
 
       <div>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
         placeholder="Name"
       />
       {formik.touched.name && formik.errors.name ? (
         <span>{formik.errors.name}</span>
       ) : null}
       </div>
      
 
     <div>
     <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
         placeholder="Price"
       />
       {formik.touched.price && formik.errors.price ? (
         <span>{formik.errors.price}</span>
       ) : null}
     </div>
     
 
       <button type="submit">Submit</button>
     </form>
      </div>
    </div>
  )
}

export default Add
