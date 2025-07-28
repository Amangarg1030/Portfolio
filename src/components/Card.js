import React from 'react'
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";


const Card = ({item}) => {
  return (
    <div className='flex flex-col max-w-[525px] border-2 border-zinc-400 rounded-xl h-[50vh] hover:shadow-md hover:shadow-neutral-700
    transition-all duration-75 '>
      <img src={item.img} className=' w-full h-[24vh] rounded-t-xl hover:object-scale-down'/>
      <div className='flex flex-col flex-wrap px-2 mt-4'>
           <p className='text-lg font-serif font-md  '>{item.title}</p>
           <p className='text-sm text-slate-500'>{item.description .split(' ').splice(0,20).join(' ')}....</p>
          
           <div className='flex flex-wrap gap-x-5 px-4 mt-3' >
             {
               item.language.map((data)=>(
                 <div key={data.id}
                  className='bg-slate-300 text-black text-xs py-1 px-2 rounded-md'
                 >{data.lan}</div>
               ))
             }
           </div>
           <div className='flex items-center w-1/2 justify-around mt-3 mb-2'>
            <button className='flex items-center border-2 rounded-md px-2 py-1text-sm border-black'><span><FaRegShareFromSquare /></span>Live demo</button>
            <button className='flex items-center border-2 rounded-md px-2 py-1 text-sm border-black'><span><IoLogoGithub /></span>Code</button>
           </div>
      </div>
    </div>
  )
}

export default Card

