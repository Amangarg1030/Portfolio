import React from 'react'
import { GoDotFill } from "react-icons/go";

const Skills = ({ Data }) => {
  return (
    <div className='flex flex-col max-w-[1160px] w-11/12  mx-auto mt-2'>
      <h1 className='text-center font-bold text-lg mt-5'>Skills and Technologies</h1>
      <h3 className='text-center font-sm text-slate-400 mt-3'>A comprehensive toolkit for building modern web applications</h3>
      {/* skillls section */}
     <div className='flex justify-around mt-[35px] mb-[30px]'>
        <div className='flex flex-col text-md border-2 border-slate-200 h-[18vh] w-[22vw] rounded-lg px-6 
        justify-evenly hover:shadow-sm hover:shadow-gray-600 transition-all duration-100'>
          <p>Forntend</p>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {
              Data.frontend.map((item) => (
                <p key={item.index}
               
                 className='bg-slate-200 text-black text-xs font-sans py-1 px-1  rounded-lg '

                >{item.title}</p>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col text-md border-2 border-slate-200 h-[18vh] w-[22vw] rounded-lg px-6 
        justify-evenly hover:shadow-sm hover:shadow-gray-600 transition-all duration-100'>
          <p>Backend</p>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {
              Data.backend.map((item) => (
                <p key={item.index}
                 className='bg-slate-200 text-black text-xs font-sans py-1 px-1 rounded-lg '
                >{item.title}</p>
              ))
            }
          </div>

        </div>
        <div className='flex flex-col text-md border-2 border-slate-200 h-[18vh] w-[22vw] rounded-lg px-6 
        justify-evenly hover:shadow-sm hover:shadow-gray-600 transition-all duration-100'>
          <p>Tools and Others</p>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {
              Data.Tools.map((item) => (
                <p key={item.index}
                 className='bg-slate-200 text-black text-xs font-sans py-1 px-1 rounded-lg '
                >{item.title}</p>
              ))
            }
          </div>
        </div>
      </div>
      {/* Strengths section */}
      <div className='bg-slate-100 rounded-lg flex flex-col border-1 justify-evenly w-[1110px] mx-auto
      h-[20vh] gap-y-3 mt-7'>
        <h2 className='text-center font-sm'>Key Strengths</h2>
        <div className='grid grid-cols-3 px-7'>
          {
            Data.Strength.map((item)=>(
            <div className=' flex items-center gap-x-2 text-gray-600'>
              <span className='text-black'><GoDotFill /></span>
              {item.title}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
