import React from 'react'
import loader from '/loader.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center item-center bg-black'>
      <img className='object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading
