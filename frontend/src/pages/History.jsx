import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const History = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const amount = searchParams.get("amount");
  const [username, setUsername] = useState("");
  const navigate=useNavigate()


  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/get-username/${id}`)
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error("Error fetching username:", error);
      });
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



  return (
    <div className="h-screen  w-screen justify-center items-center">
      <div className="flex justify-between ">
        <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-2 ml-2 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              {name[0].toUpperCase()}
            </div>
          </div>
          <div className="text-3xl mt-3 font-semibold">
            {name.toUpperCase()}
          </div>
        </div>
        <div className="text-lg mr-6 mt-3">{username}</div>
      </div>

      <hr className="mt-3 border-t-4 border-gray-800" />
    <div className="  flex w-screen justify-center ">
      <div className="m-2 text-lg underline">
        {date}
      </div>
    </div>
      <div className="flex w-[98%] justify-between">
        <div className="ml-3">
            
        </div>
        <div className="p-3 m-2  bg-slate-300 items-center justify-center h-[150px] w-[280px] rounded-3xl ">
            <div className="text-lg mr-10 p-4">Payment to {name}</div>
            <div className="text-2xl font-semibold mr-10 px-4 ">Rs {amount}</div>
            <div className="ml-52 cursor-pointer opacity-55"><img src="https://openclipart.org/image/2400px/svg_to_png/191324/cyberscooty-fleche-verte.png" alt="" width={25} /></div>
        </div>
      </div>
      <div className="fixed flex bottom-3 right-3">

        <div>
          <button onClick={()=>{
              navigate("/send?id=" + id + "&name=" + name);
          }} className="pl-4 text-lg bg-green-600 pr-4 pt-1 pb-[12px] rounded-lg font-semibold border-2px">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default History;
