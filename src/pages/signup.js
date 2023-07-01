import { Button } from '@mui/material'
import React,{useState} from 'react'
import styles from '@/components/Hero.module.css'
import Loader from '@/assets/loader.gif'
import Image from 'next/image'
import Link from 'next/link'

const signup = () => {

    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(e)
        console.log('submit clicked')
        setLoading(true)
        const res = await fetch('https://hms-backend-89o3.onrender.com/admin/createAdmin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:e.target[0].value,
                employeeNumber:e.target[1].value,
                email:e.target[2].value,
                contact:e.target[3].value,
                password:e.target[4].value,
            })
        })

        setLoading(false)
        setMessage("admin created successfully")

        setTimeout(()=>{
            setMessage(null)
        },3000)
    }
  return (
    <div>
        <center>

        <h2>create admin</h2>
        </center>
        <form style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} className={styles.formContainer} onSubmit={handleSubmit}>
            <input style={{width:'50%'}} type='text' name='name' placeholder='admin name' />
            <input style={{width:'50%'}} type='text' name='employeeNumber' placeholder='admin employee number' />
            <input style={{width:'50%'}} type='email' name='email' placeholder='hostel email' />
            <input style={{width:'50%'}} type='text' name='contact' placeholder='mobile number' />
            <input style={{width:'50%'}} type='password' name="password" placeholder='hostel password' />
            <Button variant="outlined" color="success" type="submit" style={{marginTop:'20px'}}>create admin</Button>
        </form>

        <center>

         {loading && <Image style={{marginTop:'30px'}} src={Loader} alt="loading" width={40} height={40} />}
            {message && <p style={{marginTop:'30px', color:'green',fontWeight:'bold'}}>{message}</p>}
        </center>

        <center>
        <Link href="/">
        <Button variant="outlined" color="success" type="submit" style={{marginTop:'20px'}}>Back to Dashboard</Button>
        </Link>

        </center>
    </div>
  )
}

export default signup