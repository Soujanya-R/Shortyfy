import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-2 '>
      <h1 className='font-semibold text-4xl italic'>Reach us out!!</h1>
        <input placeholder='Name' input='text' className='w-[80vh] px-2 items-center rounded-full' />
        <input placeholder='Email' input='text' className='w-[80vh] rounded-full px-2 items-center' />
        <input placeholder='Message' input='Message' className='w-[80vh] rounded-full px-2 items-center' />
        <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 animate-gradient">Send</button>

    </div>
  )
}

export default page
