import React from 'react'

const Bills = ({link,name}) => {
  return (
    <div className='w-[50px] flex flex-col justify-center items-center m-3 cursor-pointer ml-24'>
      <div>
        <img className='rounded-full' src={link} alt="" />
      </div>
      <div>
        <h2 className=' text-md'>{name}</h2>
      </div>
    </div>
  )
}

export default Bills