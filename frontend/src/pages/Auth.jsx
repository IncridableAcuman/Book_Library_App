import {Sun} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="fixed w-full top-0 left-0 flex items-center justify-between px-10 py-4">
        <div className="">
        <img src="/uzb.png" alt="uzb" className="w-8 h-8 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center gap-10">
          <Sun/>
          <button className='border px-5 py-2.5 rounded-full cursor-pointer 
          hover:bg-gray-300 transition' onClick={()=>navigate('/login')}>Sign In</button>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <button className='bg-purple-500 text-white px-5 py-2.5 rounded shadow-lg 
        hover:bg-purple-600 transition'>Start</button>
      </div>
    </div>
    </>
  )
}

export default Auth