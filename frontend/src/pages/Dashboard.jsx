import React from 'react'
import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [user, setUser] = useState("");
  const [money,setMoney]=useState(0.000)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
        console.log(user)
      } catch (err) {
        console.error("Error fetching user data", err);
      }
    };

    const fetchBalance = async () => {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMoney(response.data.balance);
      } catch (err) {
        console.error("Error fetching user data", err);
      }
    };

    fetchBalance()
    fetchUser();

  }, []);



  return (
    <div>
      <AppBar user={user.firstName}/>
      <Balance value={money.toFixed(2)}/>
      <Users/>
      <div onClick={()=>{
        localStorage.removeItem("token");
        navigate('/')
      }} className='fixed bottom-0 right-0 bg-green-600 p-2 rounded-full cursor-pointer'>
        LogOut
      </div>
    </div>
  )
}

export default Dashboard