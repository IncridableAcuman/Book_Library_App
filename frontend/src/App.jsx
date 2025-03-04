import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Login from './pages/Login'
import Book from './pages/Book'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile';
import PrivateRoute from './private/PrivateRoute';
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<PrivateRoute element={<Home/>} />} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/books' element={<Book/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/reset-password' element={<ResetPassword/>} />
      <Route path='/admin' element={<Dashboard/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
    </>
  )
}

export default App