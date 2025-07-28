import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-100 w-full h-[80vh] mt-2'>
      <div className='flex flex-col'>
          <h1 className='text-center mt-[60px] '>About Me</h1>
    <div className=' max-w-[1160px]  flex mx-auto mt-7 gap-x-2 '>
  
        {/* Description  */}
        <div className='w-1/2 space-y-4'>
          <p className='text-gray-500 text-sm leading-6'> className='text-gray-400 text-sm leading-6'I'm a passionate web developer specializing in creating modern, responsive, and user-focused
             websites and applications. With a strong foundation in HTML, CSS, JavaScript, and frameworks like 
            Reactand Node.js, I bring ideas to life through clean code and thoughtful design.
            Explore my projects to see how I blend creativity with functionality—whether it's building intuitive
            user interfaces, developing full-stack applications, or optimizing performance for the best user 
            experience.Let’s build something great together.
          </p>
          <p className='text-gray-500 text-sm leading-6'>
            I work with technologies like HTML, CSS, JavaScript, React, Node.js, and more to create solutions that 
            are not only functional but also thoughtfully designed. Whether it's building a brand-new site from 
            scratch or improving an existing one, I focus on writing clean code, improving performance, and
             delivering results.
          </p>
          <p className='text-gray-500 text-sm leading-6'>
            I’m always eager to learn new tools, tackle challenges, and collaborate on meaningful projects. When 
            I’m not coding, you’ll find me [something personal or fun – e.g., exploring new tech, contributing to 
            open source, or enjoying coffee and design podcasts].
          </p>
        </div>
        {/* Experience section */}
        <div className='flex flex-wrap w-1/3 gap-x-3 mx-auto'>
          <div className='flex flex-col justify-around items-center bg-white  w-44 h-32 rounded-lg'>
            <p>
              FRESHER 
            </p>
            <p className='text-gray-600'>
              Years of Experience
            </p>
          </div>
          <div  className='flex flex-col justify-around items-center bg-white  w-44 h-32 rounded-lg'>
            <p>
              5+
            </p>
            <p className='text-gray-600'>
              Projected Completed
            </p>
          </div>
          <div  className='flex flex-col justify-around items-center bg-white  w-44 h-32 rounded-lg'>
             <p>
              1+
            </p>
            <p className='text-gray-600'>
              Happy Client
            </p>
          </div>
          <div  className='flex flex-col justify-around items-center bg-white  w-44 h-32 rounded-lg'>
             <p>
              100%
            </p>
            <p className='text-gray-600'>
              Satisfaction Rate
            </p>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default About
