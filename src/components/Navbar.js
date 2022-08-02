import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
function Navbar() {
    const [nav, setNav] = useState(false)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-sm '>
            <div className="px-2 flex justify-between items-center w-full h-full ">
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-3 sm:text-4xl'>BRAND.</h1>
                    <ul className='hidden md:flex '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Prices</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className=' border-none bg-transparent text-black  mr-4 duration-300 hover:text-indigo-600 active:duration-100 active:scale-[0.9]'>Sign In</button>
                    <button className=' button px-4 py-3  duration-300'>Sign Up</button>
                </div>
                <div className="md:hidden">
                    {!nav ? <MenuIcon onClick={() => { setNav(!nav) }} className='w-8 cursor-pointer hover:scale-[1.1] duration-200' />
                        : <XIcon onClick={() => { setNav(!nav) }} className='w-8 cursor-pointer hover:scale-[1.1] duration-200' />
                    }
                </div>
            </div>
            {nav && <ul className="absolute bg-zinc-200 w-full px-8 md:hidden ">
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Prices</li>
                <div className='flex flex-col my-4'>
                    <button className=' hover:bg-gray-400 hover:text-white bg-transparent text-indigo-600  px-8 py-3 mb-4 duration-300'>Sign In</button>
                    <button className=' px-8 py-3  duration-300'>Sign Up</button>
                </div>
            </ul>}

            <div >


            </div>


        </div>
    )
}

export default Navbar