import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-3/4 ml-[380px] border-b-4  shadow-xl'>
    <div className='flex justify-between  mt-4'> 
        <AiOutlineSearch size={25}/> 
            <h1 className='bg-green-600 rounded-full w-8 text-center h-7 text-white mr-3'>A</h1>
    </div>
    <div className='mt-10'>
        <h1 className='font-bold text-xl'>Job Offers</h1>
        <div className='flex justify-between items-center'> 
            <div className='flex '>
                <h5 className='pl-2 font-bold '>Dashboard</h5>
                <h5 className='pl-2 font-semibold'>Job </h5>
                <h5 className='pl-2'>Offers</h5>
            </div>
        <button className='font-bold text-white bg-green-600 p-2 mr-2 rounded-md'>+ New Offer</button>
        </div>
    </div>
    <div className=' border bg-white h-[300px] m-auto mt-4 rounded-xl'>
     <div className='grid grid-cols-3 gap-20 p-10 '>
        <div className='relative'>
            <h5 className='absolute left-[-30px] top-6'> 💼 </h5>
            <h3>Total Offered</h3>
            
            <p>20 invoices</p>
            <p className='text-blue-500'>$1,205.75</p>
        </div>
        <div className='relative'>
        <h5 className='absolute left-[-30px] top-6'> 🗒️ </h5>
            <h3>Pending Offers</h3>
            <p>20 invoices</p>
            <p className='text-yellow-500'>$1,205.75</p>
        </div>
        <div className='relative'>
        <h5 className='absolute left-[-30px] top-6'> 📝 </h5>
            <h3>Pending Onboarding</h3>
            <p>20 invoices</p>
            <p className='text-orange-500'>$1,205.75</p>
        </div>
        <div className='relative'>
        <h5 className='absolute left-[-30px] top-6'> 🔔 </h5>
            <h3>Joining Overdue</h3>
            <p>20 invoices</p>
            <p className='text-red-500'>$1,205.75</p>
        </div>
        <div className='relative'>
        <h5 className='absolute left-[-30px] top-6'> ✅ </h5>
            <h3>Joined</h3>
            <p>20 invoices</p>
            <p className='text-green-500'>$1,205.75</p>
        </div>
        <div className='relative'>
        <h5 className='absolute left-[-30px] top-6'> ❌ </h5>
            <h3>Not Joined</h3>
            <p>20 invoices</p>
            <p className='text-red-600'>$1,205.75</p>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Hero