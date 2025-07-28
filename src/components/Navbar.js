import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-around mx-auto items-center h-[60px]  shadow-md shadow-zinc-400'>
      <NavLink to='/'>
         <p className='font-bold'>
        Portfolio
        </p>
      </NavLink>
    
      <nav className='flex gap-x-8 text-gray-500 transition-all duration-75 items-center'>
        <NavLink to='/'>
            <p className=' hover:text-black'>
              Home
            </p>
        </NavLink>
        <NavLink to='/about'>               
            <p className=' hover:text-black'>
              About
            </p>
        </NavLink>
        <NavLink to='/skills'>
            <p className=' hover:text-black'>
              Skills
            </p>
        </NavLink>
        <NavLink to='/project'>
            <p className=' hover:text-black'>
              Projects
            </p>
        </NavLink>
        <NavLink to='/contact'>
            <button className='bg-black py-1 px-2 text-white rounded-md hover:bg-zinc-900'>
              Contact
            </button>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
