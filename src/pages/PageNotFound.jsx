import React from 'react'
import NotFound from '/404.gif'

const PageNotFound = () => {
  return (
    <div className='w-screen h-screen flex justify-center item-center bg-black mt-40'>
        <img className='object-cover' src={NotFound} alt="" />
    </div>
  )
}

export default PageNotFound
