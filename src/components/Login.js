import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '../css/style.module.css';
import { useNavigate } from "react-router";


export default function Login() {
    const [formdata , setformdata] = useState("")
    const [user , setuser] = useState([])
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()


    useEffect(()=>{
        console.log(formdata ,"formdata")
    },[formdata])
    useEffect(()=>{
      user?.map((item)=>{
        console.log(item , "item")
        if(item.Email == formdata.Email && item.Password == formdata.Password){
          navigate("/")
        }
      })
    },[user]) 

    function loin(){

      fetch('https://6574b870b2fbb8f6509c954d.mockapi.io/signup')
      .then((res)=>{
          res.json().then((reg)=>{
            setuser(reg);
            console.log(reg , "reg")
            localStorage.setItem("login",true)
          })
      })
  }

  return (
    <>
    <div className={styles.wraper}>
    <form onSubmit={handleSubmit((data) => {setformdata(data);loin()})}>
      <input className={styles.input} {...register("Email", { required: true })} placeholder="Email" />
      <input className={styles.input} {...register("Password", { required: true })} placeholder="Password" />
      <input className={styles.btn} type="submit" value='Log in' />
    </form>
    </div>
    </>
  );
}