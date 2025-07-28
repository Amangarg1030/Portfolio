import React from 'react'
import profile from '../assests/profile.png'

const Home = () => {
  return (
    <div>
      <div className='max-w-[1160px] w-11/12 mx-auto flex items-center h-[80vh] justify-between transition-all duration-100'>
        {/* basic details */}
        <div className='w-1/2 space-y-3 '>
          <p className='text-[10px] bg-slate-300 font-bold w-[95px] rounded-md py-1 px-1 text-black'>Available for work</p>
          <div>
              <h3>Hi,I am Aman Garg</h3>
              <h3>Full Stack Developer</h3>
          </div>

          <p className='text-sm text-slate-400 leading-5'>I’m a Web Developer with a strong focus on creating clean, efficient, and user-friendly
            websites and web applications. With a solid foundation in both front-end and back-end technologies,
            I enjoy building responsive interfaces, integrating APIs, and developing full-featured web solutions.
            I’m passionate about writing clean code, solving problems, and continuously learning
            new tools and technologies to stay current in the fast-evolving world of web development.
          </p>
          {/* button view mye work and get in touch */}
          <div className='flex gap-x-2 mt-5'>
               <button className='bg-black text-white py-1 px-3 rounded-md hover:bg-zinc-900'>View my work</button>
               <button className='bg-white text-black py-1 px-3 rounded-md hover:bg-orange-100 border-2 border-slate-200'>
                Get in Touch</button>
          </div>
        </div>

        {/* profile image */}
        <div className='w-1/3'>
            <div className=' rounded-full w-72 h-72 bg-gray-200 relative hover:shadow-lg  hover:shadow-slate-600 '>
               <div className='rounded-full w-64 h-64 absolute left-4 top-4 bg-white'>
              </div>
                <img src={profile} className='rounded-full w-60 h-60 absolute left-6 top-6 '/>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
