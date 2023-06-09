import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Button } from '@mui/material'

const Navbar = ({email,logOut,admin}) => {
  return (
    <div className={styles.container}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Link href="/">

            <span className='bold-800'>Hostel</span> Management System  
          </Link>
          <span style={{marginLeft:'20px'}}>  | {new Date().toDateString()}</span>
        </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
          <p>{email}</p>
          {logOut && <Button variant="outlined" color="error" onClick={()=>admin?signOut({callbackUrl: '/'}):signOut()} style={{marginLeft:'10px'}}>logout</Button>}

          </div>
    </div>
  )
}

export default Navbar