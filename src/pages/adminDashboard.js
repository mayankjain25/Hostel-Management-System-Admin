import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import IssueDisplay from '../components/IssueDisplay'
import styles from '../components/FrontComponent.module.css'
import axios from 'axios'

const adminDashboard = () => {

    const {status,data} = useSession()
    const [stat, setStat] = useState('unauthenticated')
    const [adminInfo, setAdminInfo] = useState({})

    const getAdminData = async () => {
      const adminData = await axios.get(`https://hms-backend-89o3.onrender.com/admin/${data.user.email}`,{
        headers:{
          'Content-Type':'application/json',
        }
      })
      setAdminInfo(adminData.data)
    }
    useEffect(()=>{
        if(status==="unauthenticated"){
          // alert("You are not logged in! Redirecting to login page...")
          Router.push('/login')
        }
        else if(status==="authenticated"){
          getAdminData()
        }
     },[status])

     

     if(status=='authenticated'){
      return (
        data && <div>
            <Head>
                <title>Admin Dashboard - HMS</title>
            </Head>
            <Navbar logOut={true} admin={true} />
            <center>  
              <h2 className={styles.mainText}><i>hola,</i>{data.user.name} </h2>
              <p style={{marginTop:'-10px'}}>How's your day today?</p>
              
              <IssueDisplay email={adminInfo.email} hostelName={adminInfo.hostelName}/>
            
    
            </center>   
        </div>
      )
     }
  
}

export default adminDashboard