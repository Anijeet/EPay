import { useNavigate } from "react-router-dom";


export const AppBar=({user})=>{
    const navigate = useNavigate()


    return (
        <div  className="shadow h-14 flex justify-between">
            <div onClick={()=>{
                navigate('/')
            }} className="flex flex-col cursor-pointer bg-green-500 justify-center h-[90%] mt-1 font-bold text-lg rounded-lg p-3 w-[70px] ml-4">
                E_Pay
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-3">
                    Hello,
                </div>
                <div className="rounded h-12 w-20 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user}
                    </div>
                </div>
            </div>
        </div>
    )
}