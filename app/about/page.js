import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <section className="bg-slate-200 py-16 px-6">
  <div className="container mx-auto flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
    <p className="text-lg text-gray-600 max-w-3xl mb-8 leading-relaxed">
      At <span className="font-semibold text-indigo-500 italic">Shortyfy</span>, we believe in making sharing effortless and efficient. Our platform transforms long, cluttered URLs into sleek, memorable links in seconds. With a focus on speed, security, and simplicity, we ensure you get the best experience without the hassle of logging in. Track your clicks and unlock the power of smart sharing today!
    </p>
    <div className="pt-8">
            <Link href="/shortner" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 animate-gradient">
              Click here to Get started!

            </Link>
          </div>
  </div>
</section>


    </div>
  )
}

export default page
