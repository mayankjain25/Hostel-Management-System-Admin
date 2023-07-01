import React, { useEffect,useState } from 'react'
import axios from 'axios'
import styles from './IssueDisplay.module.css'
import Warning from '../assets/warning.svg'
import Image from 'next/image'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import toast, { Toaster } from 'react-hot-toast';
import Resolver from '../assets/resolver.svg'

const IssueDisplay = ({email,hostelName}) => {
    const [issueInfo,setIssueInfo] =useState()
    const [userInfo,setUserInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [rowID, setRowID] = useState(false)

    async function getIssueDetails(){
        const issueDetails = await axios.get(`https://hms-backend-89o3.onrender.com/issues/hostel/${hostelName}`,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        setIssueInfo(issueDetails.data)
        
    }

    async function getUserDetails(){
        const res = await axios.get(`https://hms-backend-89o3.onrender.com/admin/${email}`,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        await setUserInfo(res.data)
        // getIssueDetails()
    }


    useEffect(()=>{
        getUserDetails()
    },[])

    useEffect(()=>{
         getIssueDetails();
    },[issueInfo])

    const handleIssueClicked = async (id)=>{
        const column = document.getElementById(id)
        setRowID(id)
        setLoading(true)
        setTimeout(()=>{
            column.style.backgroundColor = 'lightgreen'
            column.style.color = 'black'
            toast.success('Issue marked as resolved')
            column.innerText = "Resolved!"
            setLoading(false)
            // setIssueInfo(issueInfo.filter((issue)=>issue._id!==id))
            setRowID(null)
        },1000)
    }

  return (
         <div>

        <div><Toaster/></div>
        <div className={styles.issueDisplayContainer}>

            <div>
                <h3>available issues</h3>
            {issueInfo && <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 800 }}>
            <Table  size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{backgroundColor: 'lightgray'}}>
                        <TableCell sx={{fontWeight: 'bold',color:'black'}}>Title</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Description</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Status</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Priority</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Action</TableCell>
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                {issueInfo.map((issue) => (
                    // console.log(issue)
                    <TableRow
                    key={issue._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {issue.title}
                    </TableCell>
                    <TableCell align="center" sx={{maxWidth: 200, }}>{issue.description}</TableCell>
                    <TableCell align="center">{issue.status}</TableCell>
                    <TableCell align="center">{issue.priority}</TableCell>
                    <TableCell  align="center"  onClick={()=>{handleIssueClicked(issue._id)}}>
                        <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                            <button className={styles.actionItem} id={issue._id} style={{color:'white',border:'none',padding:'5px',borderRadius:'5px', fontWeight: 'bold'}}>Mark as resolved</button>
                            <span style={{marginLeft: '10px'}}>
                                {loading && rowID === issue._id && <Image src={Resolver} alt="spinner" />}
                            </span>
                        </span>
                    </TableCell>
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                ))
                
                
                }
                
                </TableBody>
            </Table>
        </TableContainer>}

        {
                  issueInfo &&  issueInfo.length===0 &&  <center> <p style={{color:'gray'}}>no issues to display</p></center> 
        }

        {/* <Link href={{ pathname: '/createIssuuserInfoe', query: { data: JSON.stringify(userInfo._id) } }}>
            <Button variant="outlined" color="success" style={{marginTop:'50px'}}>Add Issue</Button>
        </Link> */}
    </div>

        {/* <div className={styles.profileContainer}>
            <h3>your profile</h3>


            <div className={styles.profileCard}>

                    <Avatar>{userInfo.name[0]}</Avatar>
                    <p>Name: {userInfo.name}</p>
                    <p>Hostel: {userInfo.hostelName}</p>
                    <p>Room Number: {userInfo.roomNumber}</p>
            </div>

        </div> */}
        </div>
        {!issueInfo && <div className='no-issues'>
            <Image src={Warning} width={40} height={40} style={{color:'gray'}}></Image>
            <p>no issues to display</p>
        </div>}
        

        

        

    </div>
  )
}

export default IssueDisplay