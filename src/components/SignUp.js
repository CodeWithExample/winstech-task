import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '../css/style.module.css';
import { Navigate, useNavigate } from "react-router";


export default function SignUp() {
    const [formdata , setformdata] = useState("")
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(formdata ,"formdata")
    },[formdata])

    async  function submit (){
  
         await fetch(`https://6574b870b2fbb8f6509c954d.mockapi.io/signup`,{
            method:'POST',
            body:JSON.stringify(formdata),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>{
            res.json().then((reg)=>{
              navigate("/login")
                console.log(reg ,"regregreg")
            })
        })
        
      }

    
  return (
    <>
    <div className={styles.wraper}>
    <form onSubmit={handleSubmit((data) => {setformdata(data);submit()})}>
      <input className={styles.input} {...register("Email", { required: true })} placeholder="Email" />
      <input className={styles.input} {...register("Password", { required: true })} placeholder="Password" />
      <input className={styles.btn} type="submit" value='Sign Up' />
    </form>
    </div>
    </>
  );
}