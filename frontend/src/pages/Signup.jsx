import { useState } from "react"
import { ButtonWarning } from "../components/ButtonWarning"
import {Button} from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

function responseError(error){
    if(error){
        return alert("Invalid Inputs")
    }
}

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkpass, setCheckpass]= useState(false)
    const [checkemail, setCheckemail]= useState(false)
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-[400px] shadow-lg shadow-black text-center p-2 h-max px-4">
      <div onClick={()=>{
        navigate("/")
      }} className="w-8 cursor-pointer fixed top-15 right-[580px]">
    <img src="https://static.vecteezy.com/system/resources/previews/005/129/893/original/cross-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="cross" />
    </div>
        <Heading label={"Sign up"} /> 
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="Bagadur" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Rai" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="anijeet@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            try{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });

            
            if(password.length < 6){
              setCheckpass(true)
            }
            else{        
            localStorage.setItem("token", response.data.token)
              navigate('/dashboard')
            }

        }catch(e){
            console.log("error response", e.response);
            if(response.data.message=="Email already taken"){
              setCheckemail(true)
              return;
            }

        }
        
          }} label={"Sign up"} />
        </div>
        {checkpass? <div className="text-red-700 text-sm">*minimum 6 letter or number required </div> : <div></div>}
        {checkemail? <div className="text-red-700 text-sm">*Email already exist </div> : <div></div>}
        <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
      
    </div>
   
  </div>
}