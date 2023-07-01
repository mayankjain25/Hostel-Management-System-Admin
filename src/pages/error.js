import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Warning from 'src/assets/warning.svg'

const error = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'100vh'}}>
        <Head>
            <title>Error Occurred</title>
        </Head>
        <center>https://i.postimg.cc/5t5F6jfD/Screenshot-from-2023-07-01-13-54-55.png
          
                <Image src={Warning} width={100} height={100}></Image>
                <h2>sigh! an error occurred</h2>
                <p>please try again</p>
                <Link href='/'>

                <Button variant="outlined" color="success">Home Page</Button>
                
                </Link>
                <Link href='/signup'>

                <Button style={{marginLeft:'20px'}} variant="outlined" color="success">Sign Up</Button>
                
                </Link>
           

        </center>
    </div>
  )
}

export default error