import Head from 'next/head'
import React, { createContext, useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
// import Guest from '../components/Guest'


const UserContext = createContext({
  id:'',
      name:'',
      rollNumber:'',
      email:'',
      contact:'',
      hostelName:'',
      roomNumber:'',
      password:'',
      v:''
})

const login = () => {
  
    const [user,setUser] = useState({
      id:'',
      name:'',
      rollNumber:'',
      email:'',
      contact:'',
      hostelName:'',
      roomNumber:'',
      password:'',
      v:''
      
    })
    
    const updateUser = (newUser) =>{
      setUser(newUser)
    }
  
  // setUser(newUser)


  return (
    <UserContext.Provider value={{user,updateUser}}>

      <div>
          <Head>
              <title>Login - HMS Admin</title>
          </Head>
          <Navbar />
          <Hero />
          {/* <Guest /> */}
          <Footer />
      </div>
    </UserContext.Provider>
  )
}

export {UserContext}
export default login