import {Sun,User,LogOut,Settings} from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <div className="fixed top-0 left-0 w-full flex items-center justify-between 
    px-10 py-4 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="">
          <h1 className='text-lg font-bold text-blue-500 cursor-pointer'>
            Book<span className='text-black hover:text-blue-500 transition'>Lib.</span></h1>
        </div>
        <div className="flex items-center gap-10">
          <Sun/>
          <img src="/uzb.png" alt="profile" className='w-8 h-8 rounded-full relative cursor-pointer' 
          onClick={()=>setIsOpen(!isOpen)} />
          {isOpen && (
            <div className="absolute top-15 right-8 bg-gray-100 rounded-xl py-3 px-4">
            <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-200 transition">
              <p>Profile</p>
              <User/>
            </div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-200 transition">
              <p>Logout</p>
              <LogOut/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer rounded hover:bg-gray-200 transition">
              <p>Settings</p>
              <Settings/>
            </div>
            
          </div>
          )}
          
        </div>
    </div>
    <h1 className='mt-20'>rfdb;lb,dlgnlfgkmlfkgm</h1>
    </>
  )
}

export default Navbar