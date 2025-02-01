import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold">Welcome to Shortyfy</h1>
        <p className="text-lg italic font-semibold mb-4 ">
          Effortless Link Compression, Infinite Possibilities!
        </p>
        <div className="flex flex-col items-center  justify-center w-2/3 text-center bg-gradient-to-r from-lime-400 via-green-500 to-red-500 p-6 rounded-full shadow-lg">
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed tracking-wide rounded-full">
            The ultimate tool to simplify your links and amplify your reach! Our fast, secure, and user-friendly platform transforms lengthy URLs into sleek, shareable links in seconds. <span className="font-bold">No sign-ups, no logins</span> – just hassle-free link shortening. Track clicks, analyze performance, and make every link count effortlessly!
          </p>

          <div className="pt-8">
            <Link href="/shortner" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 animate-gradient">
              Click here to get started!

            </Link>
          </div>



        </div>

      </div>
    </div>
  );
}
