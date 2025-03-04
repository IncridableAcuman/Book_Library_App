import {X,Menu} from 'lucide-react'
import { useState } from 'react'
const Dashboard = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <div className="flex">
        <div className={`fixed left-0 top-0 h-full w-64 bg-gray-900 text-white transform 
            ${isOpen ? "translate-x-0" : "-translate-x-64"} transition-transform 
            duration-300 ease-in-out lg:translate-x-0`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                    {isOpen && (
                        <button className="lg:hidden text-gray-300 hover:text-white"
                        onClick={()=>setIsOpen(false)}>
                            <X size={24} />
                        </button>
                    )}
                </div>
            <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Author</label>
            <input
              type="text"
              placeholder="Enter author"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Description</label>
            <textarea
              placeholder="Enter description"
              rows="3"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Genre</label>
            <input
              type="text"
              placeholder="Enter genre"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Published Year</label>
            <input
              type="text"
              placeholder="Enter year"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <button
            className="w-full mt-4 p-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
        </div>
        {!isOpen && (
              <button
            className="lg:hidden fixed top-4 left-4 bg-gray-900 text-white p-2 rounded-md shadow-md"
            onClick={()=>setIsOpen(true)} >
                <Menu size={24}/>
            </button>  
            )}
            <div className="flex-1 p-6 lg:ml-64">
                <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
                <p className="mt-2 text-gray-600">This is a main content area.</p>
            </div>
    </div>
    </>
  )
}

export default Dashboard