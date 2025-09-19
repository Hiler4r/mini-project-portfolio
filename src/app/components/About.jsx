import Image from 'next/image'
import React from 'react'
import GreyButton from './GreyButton'

export default function About
    () {
    return (
        <div id='about' className='px-5 sm:px-20'>
            <div className='flex flex-col sm:flex-row items-center gap-20 mb-20 justify-center'>
                <Image
                    src="/profile pic.png"
                    alt="my profile pic"
                    width={400} height={400}
                    className='rounded-4xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto'
                />

                <div className='flex flex-col gap-y-10'>
                    <h2 className="text-4xl sm:text-8xl font-semibold">
                        Creating designs that <span className="text-primary">ignite</span> responses.</h2>
                    <h3 className=''>Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.</h3>
                    <GreyButton text="About Me" />
                </div>



            </div>
        </div>
    )
}
