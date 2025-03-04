import { useContext, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthProvider";
import {toast} from 'react-toastify'
import axiosInstance from "../api/api";
const Login = () => {
  const [isLogin,setIsLogin] = useState(true);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!isLogin) {
      try {
        const {data} = await axiosInstance.post('/auth/signup',{name,email,password});
        login(data);
        localStorage.setItem('accessToken',data.accessToken);
        toast.success('Successfully');
        navigate('/');
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      }

    } else {
      try {
        const {data} = await axiosInstance.post('/auth/signin',{email,password});
        login(data);
        localStorage.setItem('accessToken',data.accessToken);
        toast.success('Successfully');
        navigate('/');
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      }
    }
  } 
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-xl shadow-lg max-w-md">
      <h2 className="text-3xl font-bold text-center mb-3">{ isLogin ? "Sign In" : "Sign Up"}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
          <input type="text" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} 
          className="w-full border p-3 mt-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />            
          )}
          <input type="email" placeholder="example@gmail.com"
          value={email} onChange={(e)=>setEmail(e.target.value)}
          className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="password" placeholder="Password"
          value={password} onChange={(e)=>setPassword(e.target.value)}
          className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <p className="text-blue-500 cursor-pointer hover:underline transition"
          onClick={()=>navigate('/forgot-password')} >Forgot Password?</p>
          <p>
            <button className="w-full font-semibold bg-blue-500 p-3 rounded-lg text-white cursor-pointer 
            hover:bg-blue-600 transition">{ isLogin ? "Sign In" : "Sign Up" }</button>
          </p>
          <p className="mt-3 text-center font-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={()=>setIsLogin(!isLogin)} 
            className="text-blue-500 cursor-pointer hover:underline">
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
          <div className="flex items-center justify-center gap-5 mt-2">
          <button className="cursor-pointer flex items-center gap-2 hover:text-blue-00 hover:underline transtion">
            Google
            <img src="/google.svg" alt="google" className="w-8 h-8" />
          </button>
          <button className="cursor-pointer flex items-center gap-2 hover:text-blue-00 hover:underline transtion">
            Github
            <img src="/github.svg" alt="github" className="w-8 h-9" />
          </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login