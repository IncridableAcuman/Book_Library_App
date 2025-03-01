
const ResetPassword = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-4 max-w-md">
        <h2 className="text-center
        font-semibold text-2xl mb-4">Reset Password</h2>
      <form className="space-y-4">
        <input type="password" placeholder="Password"
        className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 foces:ring-gray-500" required />
        <input type="password" placeholder="Confirm Password"
        className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 foces:ring-gray-500" required />
        <button className="w-full bg-gradient-to-br from-blue-500 to-purple-800
         text-white p-3 rounded-xl cursor-pointer">Submit</button>
      </form>
      </div>
      
    </div>
    </>
  )
}

export default ResetPassword