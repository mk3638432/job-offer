import Hero from '@/Components/Hero'
import Main from '@/Components/Offer'
import Navbar from '@/Components/Navbar'
import React from 'react'
import Employee from '@/Components/Employee'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
      <Employee/>
    </div>
  )
}

export default index