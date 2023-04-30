import {AiOutlineSearch} from 'react-icons/ai'
const Main = () => {
  return (
    <div className='w-3/4 ml-[380px] m-auto '>
        <div className='flex justify-evenly shadow-lg p-3 items-center bg-black/10  mt-6'>
            <h1 className='hover:border-b-2  border-green-600'><span className='bg-blue-200 p-1 rounded-lg mx-2'>20</span>Total Offer</h1>
            <h1 className='hover:border-b-2  border-green-600'><span className='bg-orange-200 p-1 rounded-lg mx-2'>20</span>Pending Offer</h1>
            <h1 className='hover:border-b-2  border-green-600'><span className='bg-orange-400 p-1 rounded-lg mx-2'>20</span>Pending Onboarding</h1>
            <h1 className='hover:border-b-2  border-green-600'><span className='bg-red-300 text-red-500 p-1 rounded-lg mx-2'>20</span>Joining overdue</h1>
            <h1 className='hover:border-b-2  border-green-600'><span className='bg-green-200 p-1 rounded-lg mx-2'>20</span>Joined</h1>
            <h1 className='hover:border-b-2  border-green-600'><span className='bg-black/20 p-1 rounded-lg mx-2'>20</span>Not Joined</h1>
        </div>
        <div className='h-[100px] rounded-lg bg-white border-2'>
           <div className='flex  justify-evenly'>
            <select className='mt-8 w-[120px] h-[30px]'>
                <option>All</option>
                <option>Name</option>
                <option>Joining data</option>
                <option>Designation</option>
                <option>Phone no</option>
            </select>
            <div className='mt-2 '>
                <h2>Start Date</h2>
            <input type='date'/>
            </div>
            <div className='mt-2 '>
                <h2>End Date</h2>
            <input type='date'/>
            </div>
            <div className='relative'>
            <input className='h-[30px] px-6 mt-8' type='text' placeholder='Search'/>
            <AiOutlineSearch size={20} className='absolute top-[40px]' />
            </div>
           </div>
        </div>
        <div>
            <div className='h-[100px] flex justify-evenly pt-4 pl-10 bg-black/10'>
    <div>
        <h4 className='font-bold'>Name</h4>
        <p>Role</p>
    </div>
    <div>
        <h4 className='font-bold'>joining Date</h4>
        <p>Offering Date</p>
    </div>
    <div>
        <h4 className='font-bold'>Designation</h4>
        <p>Department</p>
    </div>
    <div>
        <h4 className='font-bold'>Phone No</h4>
        <p>Email</p>
    </div>
    <div>
        <h4 className='font-bold'>Location</h4>
        <p>Business Function</p>
    </div>
    <div>
        <h4 className='font-bold'>Status</h4>
        <p>Employment Type</p>
    </div>

            </div>
        </div>
    </div>
  )
}

export default Main