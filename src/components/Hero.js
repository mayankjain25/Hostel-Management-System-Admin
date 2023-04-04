import Head from 'next/head'
import React, { useState } from 'react'
import styles from './Hero.module.css'
import { Button } from '@mui/material'
import Loader from '../assets/loader.gif'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'
import {signIn } from 'next-auth/react'

const Hero = () => {

    const [loading,setLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log('submit clicked')

        // console.log(email,password)

        let options = {redirect:false,email,password}
        const res = await signIn('credentials',options)
        setMessage(null)
        if(res?.error){
        // setMessage(res.error)
        return Router.push('/error')
        }

        console.log('will be logging res below')
        console.log(res);

        // const {updateUser} = useContext(UserContext)
        // updateUser(res)
        // console.log(res)
        return Router.push('/adminDashboard')

        // setLoading(true)

        // const res = await fetch('http://localhost:5001/admin/login',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         email:e.target[0].value,
        //         password:e.target[1].value
        //     })
        // })

        // if(res.status===404){
        //     setLoading(false)
        //     setErrorMessage("Incorrect Email/Password combination. Please try again")
        // }
        // if(res.status===200){
        //     setSuccessMessage("Login Successful. Redirecting...")
        //     setTimeout(()=>{
        //         setLoading(false)
        //         Router.push('/adminDashboard')
        //     },3000)
        // }

        // console.log(res)


    }
  return (
    
    <div style={{display:'flex',alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <center>

        <h2 className={styles.mainText}>admin panel - hostel management system</h2>
        </center>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="hostel email" required />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="hostel password" required />
            <Button variant="outlined" color="success" type="submit" style={{marginTop:'20px'}}>login</Button>
        </form>

        <div className={styles.loginHint}>
            <i class="fa-solid fa-lightbulb"></i>
            <p>
                if your hostel is KP-5, then your email will be <span style={{fontWeight:'bold',color:'red'}}>kp5@kiit.ac.in</span> and password will be <span className={styles.passwordSpoiler} style={{fontWeight:'bold'}}>kp5admin</span>
            </p>

        </div>

        <center>
            {loading && <Image src={Loader} width={40} height={40} alt="loading" /> }
            {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
            {successMessage && <p style={{color:'green'}}>{successMessage}</p>}

        </center>

        <Link href="/">
        <Button variant="outlined" color="success" type="submit" style={{marginTop:'20px'}}>Back to Home page</Button>

        </Link>
    </div>
  )
}

export default Hero