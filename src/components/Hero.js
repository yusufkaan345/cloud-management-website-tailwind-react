
import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'
import bgImage from '../assets/cyber-bg.png'

function Hero() {
    return (
        <div className='w-100 h-screen bg-zinc-300 flex flex-col justify-between' >
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8' >
                    <p className='text-2xl'>Unique Sequencing & Production</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-2xl'>This is our Tech brand.</p>
                    <button className='button py-3 px-12 mt-4 sm:w-[60%] duration-300'>Get Started</button>
                </div>
                <div>
                    <img className='w-full ' src={bgImage} alt="" />
                </div>
                <div className='absolute flex flex-col py-8 w-[480px] md:min-w-[760px] bottom-[4%]
                 mx-1 md:left-1/3 transform md:traslate-x-1/2 bg-zinc-200 border border-slate-300
                 rounded-xl text-center shadow-xl
                '>
                    <h5>Data Services</h5>
                    <div className='flex justify-between items-center flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-600 '><CloudUploadIcon className='h-6 text-indigo-600' />App Security</p>
                        <p className='flex px-4 py-2 text-slate-600'><DatabaseIcon className='h-6 text-indigo-600' />Dashboard Design</p>
                        <p className='flex px-4 py-2 text-slate-600'><PaperAirplaneIcon className='h-6 text-indigo-600' />Cloud Data</p>
                        <p className='flex px-4 py-2 text-slate-600'><ServerIcon className='h-6 text-indigo-600' />API</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero