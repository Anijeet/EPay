import React from 'react'

const PostNavbar = () => {
  return (
    <div className='mt-[80px] w-[99%]'>
        <div className='grid grid-cols-8 pl-52 pt-3 pb-3 bg-green-500 '>
            <div className='cursor-pointer hover:text-gray-600 text-lg'>TopUp</div>
            <div className='cursor-pointer hover:text-gray-600 text-lg'>Transport</div>
            <div className='cursor-pointer hover:text-gray-600 text-lg'>Internet Bill</div>
            <div className='cursor-pointer hover:text-gray-600 text-lg'>Loan</div>
        </div>
    </div>
  )
}

export default PostNavbar