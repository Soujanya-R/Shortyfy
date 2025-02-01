"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

const Page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
          seturl(""); // Clear URL
          setshorturl(""); // Clear short URL
          toast.success(result.message); // Show success toast
        } else {
          toast.error(result.message); // Show error toast if something went wrong
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again."); // Show error toast for fetch issues
      });
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4 pt-20'>
        <h2 className='font-semibold text-3xl italic'>
          Generate your URL here
        </h2>

        <input
          placeholder='Paste your URL here'
          value={url} // Add value binding
          onChange={(e) => seturl(e.target.value)}
          type='text'
          className='w-[80vh] px-2 items-center rounded-2xl h-10'
        />

        <input
          placeholder='Enter the name of new URL'
          value={shorturl} // Add value binding
          onChange={(e) => setshorturl(e.target.value)}
          type='text'
          className='w-[80vh] rounded-2xl h-10 px-2 items-center'
        />

        <button
          onClick={generate}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 animate-gradient"
        >
          Generate
        </button>

        <div>
          {generated && (
            <div className='bg-gray-200 p-4 rounded-lg'>
              <Link href={generated} target='_blank'>
                Your new Link : {generated}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Toast container to render toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};

export default Page;
