
import { useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from './../api/api';
const ForgotPassword = () => {
  const [email,setEmail] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await axiosInstance.post('/auth/forgot-password',{email});
      toast.success('Reset password link sent to your email');
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg min-w-md p-4">
        <h2 className="text-2xl font-semibold text-center mb-3">Forgot Password</h2>
        <p className="text-center text-gray-700">Reset Password sent to your email</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="email" placeholder="example@gmail.com"
        className="w-full border p-3 mt-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
        value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <button className="w-full bg-gradient-to-br from-gray-500 to-gray-600 text-white
        p-3 rounded-2xl cursor-pointer">Submit</button>
      </form>
      </div>
      
    </div>
    </>
  )
}

export default ForgotPassword