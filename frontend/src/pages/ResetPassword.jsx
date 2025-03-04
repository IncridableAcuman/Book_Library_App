import { useState } from "react"
import { toast } from "react-toastify";
import axiosInstance from "../api/api";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      if(password!==confirmPassword){
        toast.info("Password must be equal");
      }
      await axiosInstance.put('/auth/reset-password',{password,confirmPassword});
      toast.success("Password is successfully updated");
      navigate('/login');
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-4 max-w-md">
        <h2 className="text-center
        font-semibold text-2xl mb-4">Reset Password</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="password" placeholder="Password"
        className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 foces:ring-gray-500"
        value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password"
        className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 foces:ring-gray-500"
        value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
        <button className="w-full bg-gradient-to-br from-blue-500 to-purple-800
         text-white p-3 rounded-xl cursor-pointer">Submit</button>
      </form>
      </div>
      
    </div>
    </>
  )
}

export default ResetPassword