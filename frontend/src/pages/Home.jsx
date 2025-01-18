import React from 'react'
import NavBar from '../components/NavBar'
import PostNavbar from '../components/PostNavbar'
import PopularServices from '../components/PopularServices'


const Home = () => {
  return (
    <div className='h-screen w-screen bg-slate-200'>
        <div><NavBar/></div>
        <div><PostNavbar/></div>
        <div><PopularServices/></div>
        <div className='w-[100%] ml- flex  justify-center'>
            <div>
            <h1 className='text-3xl p-3 font-semibold'>Money made simple, by EPay</h1>
            </div>
        </div>
        <div className='w-[50%] ml-[400px] mt-3 flex  justify-center'>
            <div>
            <h1 className='text-md p-3 font-normal'>Built for India with all the features and rewards you love, plus much more.Google Pay is the simplest way to send money home to your family, recharge your mobile, or pay the neighbourhood chaiwala.</h1>
            </div>
        </div>
        <div className='w-[100%] m-3 flex  justify-center'>
            <div className='h-[100px] w-[150px]'>
            <img src="https://webstockreview.net/images/fingerprint-clipart-green-1.png" alt="" />
            </div>
        </div>
        {/* <div><Footer/></div> */}
    </div>
  )
}

export default Home