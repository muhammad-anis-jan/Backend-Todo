import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
const HomePage = () => {

  const [notes , setNotes] = useState()
  const [loading , setLoading] = useState([])

  useEffect(()=>{
   const fetchData = async () =>{
      try {
        const res = await axios.post ("http://localhost:5001/api/notes")
        console.log(res.data)
      } catch (error) {
        console.log("Error fetching notes");
      }
   }
   fetchData()
  },[])
  return (
    <div className='min-h-screen'>
     <Navbar/>
    </div>
  )
}

export default HomePage
