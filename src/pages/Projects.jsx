import React from 'react'
import Card from '../components/Card'

const Projects = ({Data}) => {
  return (
    <div className='max-w-[1160px] w-11/12 mx-auto flex flex-col mt-5 space-y-3 transition-all duration-75 items-center mb-9' >
       <h1 className='text-xl  font-bold'>Featured Project</h1>
       <p className='text-md text-slate-500 '>A selection of projects that showcase my skills and passion for creating exceptional
         digital experiences</p>
         {/* Project card */}
        <div className='w-[1100px]  grid grid-cols-2 gap-x-[22px] gap-y-[15px]'>
          {
            Data.Projects.map((item)=>{
              return(<Card key={item.id} item={item}/>)
            })
          }
        </div>
        <button className='bg-slate-300 text-black py-2 px-2 hover:shadow-md  hover:shadow-zinc-600 rounded-md w-44  '>View all Projects</button>
    </div>
  )
}

export default Projects
