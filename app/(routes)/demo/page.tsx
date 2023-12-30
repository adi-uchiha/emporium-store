'use client'
import React from 'react'
import { useRouter } from "next/navigation";


function Demo() {
  const router = useRouter();

  const handleClick2 = (e:any) => {
    e.preventDefault();
    window.open("https://emporium-henna.vercel.app", '_blank')
  }
  const handleClick1 = (e:any) => {
    e.preventDefault();
    router.push("/")
  }
  return (
    <>
      <div className='flex justify-center pt-16'>
        <div className='text-6xl'>Welcome to Emporium</div>
      </div>
      <div className='w-80 lg:w-4/5 lg:max-w-4xl mx-auto text-center pt-12 flex flex-col text-lg'>
        <span className='text-red-500 font-extrabold'>Admin login</span> 
        <span>Email: contact.aditya.dev@gmail.com</span>
        <span>Password: Emporium@temp</span>
      </div>


      <div className="buttonContainer flex justify-center space-x-10 pt-16">
      <button className='rounded-md p-3 bg-purple-400 text-black 
        hover:bg-purple-500 transition-all ease-in-out'>
          <a href={''} onClick={handleClick1}>
          Visit the Store ↗
          </a>
        </button>

        <button className='rounded-md p-3 bg-purple-400 text-black
        hover:bg-purple-500 transition-all ease-in-out'>
          <a href={''} onClick={handleClick2}>
          Login as Admin ↗
          </a>
        </button>
      </div>

      <div className='w-80 lg:w-4/5 lg:max-w-4xl mx-auto text-center pt-12 text-sm'>
        - - -
      </div>
      <div className="buttonContainer flex justify-center space-x-10 pt-16">
      </div>
    </>
  )
}

export default Demo