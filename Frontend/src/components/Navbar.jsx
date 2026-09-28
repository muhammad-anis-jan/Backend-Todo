import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className='bg-gray-400 border-b border-gray-900'>
      <div className='mx-auto max-w-6xl px-4 py-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-fuchsia-200 font-mono tracking-tight'>
              ThinkBoard
            </h1>
            <div className='flex items-center gap-4'>
                <Link to={"/createpage"} className='flex btn border-t-cyan-50 text-black bg-amber-500 p-2 rounded-2xl'>
                <FaPlusCircle  className='size-5'/>
                <span>NewNote</span>
                </Link>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
