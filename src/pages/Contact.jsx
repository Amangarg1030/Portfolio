import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formdata,setFormData]=useState({name:'',lastname:'',email:'',subject:'',message:''})
  const navigate=useNavigate();
  function changeHandler(evt){
     const {name,value}=evt.target;
     setFormData((prevdata)=>(
           {
            ...prevdata,
            [name]:value,
           }
     ));
  }
  function submitHandler(evt){
    evt.preventDefault();
      for(let key in formdata){
        if(formdata[key]==[]){
                alert('data is not filled');   
        }
        else{
          
           navigate('/');
        }
      }
     console.log(formdata);
  }

  return (
    <div className='flex flex-col max-w[1160px] w-11/12 items-center mt-[25px] mx-auto space-y-6'>
      <div className='flex flex-col items-center gap-y-3'>
       <h1 className='text-lg font-serif font-md '>Let's Work Together</h1>
       <p className='text-sm text-slate-700'>Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
      </div>
      <div className='flex  w-[1100px] mx-auto justify-around  '>
        {/* get in touch section */}
        <div className='flex flex-col space-y-4 '>
          <p className='font-mono text-slate-500'>Get in touch</p>
          <div className='flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-3'>
              <div className='bg-slate-300 text-black py-3 px-3 rounded-md'>
               <MdOutlineEmail />
              </div>
              <div>
                <p className='text-slate-300'>email</p>
                <p className='text-sm cursor-pointer'>ag1011298@gmail.com</p>
              </div>
            </div>
             <div className='flex items-center gap-x-3'>
              <div className='bg-slate-300 text-black py-3 px-3 rounded-md'>
               <LuPhone />
              </div>
              <div>
                <p className='text-slate-300'>contact</p>
                <p  className='text-sm cursor-pointer'>+91 9109041543</p>
              </div>
            </div>
             <div className='flex items-center gap-x-3'>
              <div className='bg-slate-300 text-black py-3 px-3 rounded-md'>
               <CiLocationOn/>
              </div>
              <div>
                <p  className='text-slate-300'>location</p>
                <p className='text-sm cursor-pointer'>Sagar (M.p)</p>
              </div>
            </div>
            <p>Follow me</p>
            <div className='flex gap-x-3'>
              <button className='px-2 py-2 text-2xl  bg-slate-200 rounded-md hover:bg-black hover:text-white transition-all duration-75'> <FaGithub/></button>
              <button  className='px-2 py-2 text-2xl  bg-slate-200 rounded-md hover:bg-black hover:text-white transition-all duration-75'> <FiLinkedin/></button>
              <button  className='px-2 py-2 text-2xl  bg-slate-200 rounded-md hover:bg-black hover:text-white transition-all duration-75'> <CiTwitter/></button>
            </div>
          </div>
        </div>
        {/* Form section */}
        <div className='flex flex-col space-y-2 border-2 border-black rounded-md py-7 px-7'>
         <p>Send me a message</p>
         <p className='text-sm'>Fill out the form below and I'll get back to you as soon as possible.
          <form onSubmit={submitHandler}
           className='flex flex-col space-y-3'>
          <div className='flex gap-x-1 mt-2'>
            <label className='flex flex-col w-1/2'>
              First Name
              <input type='text' name='name' value={formdata.name}  
                 placeholder='Enter your name'
                 className=' bg-slate-300 text-black hover:shadow-sm cursor-pointer hover:shadow-gray-700 rounded-md py-1'
              onChange={changeHandler} />
            </label>
            <label className='flex flex-col w-1/2'>
              Last Name
              <input type='text' name='lastname' value={formdata.lastname}  
                 placeholder='Enter your last name'
                 className=' bg-slate-300 text-black hover:shadow-sm cursor-pointer hover:shadow-gray-700 rounded-md py-1'
              onChange={changeHandler} />
            </label>
          </div>
            <label className='flex flex-col'>
              Email
              <input type='email' name='email' value={formdata.email}  
                 placeholder='Enter email'
                 className=' bg-slate-300 text-black hover:shadow-sm cursor-pointer hover:shadow-gray-700 rounded-md py-1'
              onChange={changeHandler} />
            </label>
            <label className='flex flex-col'>
              Subject
              <input type='text' name='subject' value={formdata.subject}  
                 placeholder='Project discussion'
                  className=' bg-slate-300 text-black hover:shadow-sm cursor-pointer hover:shadow-gray-700 rounded-md py-1'
              onChange={changeHandler} />
            </label>
            <label className='flex flex-col leading-7'>
              message
              <textarea  name='message' value={formdata.message}  
                 placeholder='tell me about your project...'
                className=' bg-slate-300 h-[25vh] text-black hover:shadow-sm cursor-pointer hover:shadow-gray-700 rounded-md py-1'
              onChange={changeHandler} />
            </label>
            <button className='bg-black hover:bg-gray-600 hover:text-black text-white px-2 py-2 rounded-md mt-3 
            transition-all duration-75'>Send message</button>
          </form>
         </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
