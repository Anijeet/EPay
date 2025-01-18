import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { ButtonWarning } from '../components/ButtonWarning'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function responseError(error){
    if(error){
        return alert("Invalid Inputs")
    }
}


const Signin = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()

  return (
    <div className='h-screen bg-slate-300 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-[400px] shadow-lg shadow-black text-center p-2 h-max px-4'>
            <div onClick={()=>{
                 navigate("/")
                }} className="w-8 cursor-pointer fixed top-15 right-[580px]">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/129/893/original/cross-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="cross" />
            </div>
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter the credentials"}/>
                <InputBox onChange={(e)=>{
                    setUsername(e.target.value)
                }} 
                label={"Email"} placeholder={"mail@gmail.com"}/>
                <InputBox onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                 label={"Password"} placeholder={"password"}/>
                <Button onClick={async()=>{
                    try{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    });
                    localStorage.setItem("token",response.data.token)
                    navigate('/dashboard')
                }catch(e){
                    console.log("error response", e.response)
                    responseError(e)
                }
                    
                }} label={"Sign In"}/>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
  )
}

export default Signin