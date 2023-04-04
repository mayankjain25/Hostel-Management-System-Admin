import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import FrontComponent from '@/components/FrontComponent'


export default function Home() {
  return (
      <div className={styles.appContainer}>
        <Head>
          <title>Hostel Management System - Admin</title>
        </Head>
        <Navbar />
        <FrontComponent />
        {/* <Hero /> */}
        {/* <Footer className={styles.footer} />  */}
      </div>
  )
}
