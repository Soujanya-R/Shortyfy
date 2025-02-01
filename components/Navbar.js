import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='bg-green-400 text-black p-2 justify-between flex items-center'>
      <div className='font-bold flex text-2xl font-serif ' >
        <Link href="/"> <h1 className='flex pl-8 justify-center items-center'>Shortyfy<Image alt="" src="/scissors.gif" width={50} height={50} className='mix-blend-darken fill-black' /> </h1></Link>
      </div>

      <div className='flex items-center justify-center px-6 py-2 rounded-full  text-lg font-medium text-gray-900 italic group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300'>
        Compact Links, Expanded Reach!
      </div>

      <div className='flex items-center  '>
        <ul className='flex items-center px-2 '>
          <Link href="/" className='hover:bg-green-800 hover:text-white rounded-full px-2 py-1'>
            <li>Home</li>
          </Link>

          <Link href="/about" className='hover:bg-green-800 hover:text-white rounded-full px-2 py-1'>
            <li>About</li>
          </Link>

          <Link href="/contact" className='hover:bg-green-800 hover:text-white rounded-full px-2 py-1'>
            <li>Contact</li>
          </Link>
        </ul>
        <Link target='_blank' href={"https://github.com/"}>
          <div>
            <button className="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white border-2 border-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                GitHub
              </span>
            </button>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
