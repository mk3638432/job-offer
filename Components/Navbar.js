import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className='p-6 w-1/4 h-screen bg-white z-20 fixed top-0 left-0'>
            <p className=' right-10 top-4 absolute'>{"<<"} </p>
            <h1 className='border text-center my-4 rounded-xl bg-black/10 border-black/10 mt-10 p-3 shadow-2xl'>Manoj Kumar</h1>
            <h4 className='py-2 font-bold'>PEOPLE CARE SYSTEM</h4>
            <h1 className='text-green-300 font-bold bg-green-100 border rounded-xl text-center p-2'>Home</h1>
            <h3 className='py-4 font-bold'>MANAGEMENT</h3>
            <div>

                <ul className=''>
                    <Link href='/'><li className='py-3'> Employee <span className='absolute right-10 text-center'>{">"}</span> </li></Link>
                    <Link href='/'><li className='py-3'> Attendance  <span className='absolute right-10 text-center'>{">"}</span> </li></Link>
                    <Link href='/'><li className='py-3'> Leaves  <span className='absolute right-10 text-center'>{">"}</span> </li></Link>
                    <Link href='/'><li className='py-3'> Payroll  <span className='absolute right-10 text-center'>{">"}</span> </li></Link>
                    <Link href='/'><li className='py-4'> Separation  </li></Link>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar