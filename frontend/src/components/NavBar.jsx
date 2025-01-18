import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from './Button'


const NavBar = () => {
    const navigate =useNavigate()
    const[istoken,setIstoken]=useState(false)
    const token=localStorage.getItem("token")
    console.log(token)
    useEffect(()=>{
        if(token){
         setIstoken(true)
         
        }
    },[])
    

  return (
    <div className='h-[80px] fixed top-0 w-screen justify-center items-center bg-slate-700 '>
        <div className='w-screen h-[70px] justify-center grid grid-cols-3 gap-2 ml-2 mb-2'>
            <div onClick={()=>{
                navigate("/")
            }} className='text-lg  cursor-pointer pt-3 h-[30px] w-[40px]  '>
                <span className='bg-green-600 text-2xl px-2 rounded-full  font-semibold'>E</span><span className='text-2xl'>Pay</span>
            </div>
            <div className="relative flex items-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute left-3 h-6 w-6 text-gray-300"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
                <input 
                    className="placeholder text-gray-200 bg-slate-600 outline-black px-10  py-1 border rounded w-full" 
                    type="text" 
                    placeholder="Search services/merchant by tags"/>
            </div>
            <div className='h-[50px] w-[40px] flex pt-3 items-center justify-center ml-60 gap-3 '>
                {istoken?<div></div>
                 :<button onClick={()=>{
                    navigate("/signup")
                }} className='text-lg bg-green-500 p-2 rounded-xl  border border-green-700 hover:bg-transparent hover:text-green-600 transition-all duration-300'>SignUp</button>}
                 {istoken?<button onClick={()=>{
                    localStorage.removeItem("token")
                    setIstoken(false)
                }} className='text-lg text-green-700 bg-transparent p-2 rounded-xl  border border-green-700 hover:bg-green-700 hover:text-black transition-all duration-300'>LogOut</button>:<button onClick={()=>{
                    navigate("/signin")
                }} className='text-lg text-green-700 bg-transparent p-2 rounded-xl  border border-green-700 hover:bg-green-700 hover:text-black transition-all duration-300'>SignIn</button>}
                
            </div>
        </div>
    </div>
  )
}

export default NavBar