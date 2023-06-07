'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import LoadingPage from "./loading"
import Courses from "./components/Courses"

const HomePage = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useEffect(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json();
      setCourses()
      setLoading(false)
    }
  }, [])

  if (loading){
    return <LoadingPage />
  }

  return (        
    <div>
      <h1>Welcome to Techno Spot</h1>
      
    </div>
  )       
}

export default HomePage       