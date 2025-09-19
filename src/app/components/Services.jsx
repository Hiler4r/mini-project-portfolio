import Image from 'next/image'
import React from 'react'

export default function Services() {
    return (
        <div>
            <div className='md:text-5xl text-3xl font-bold text-left md:ml-10 ml-0  md:px-10 px-5'>
                <p>I provide artistic <span className='text-primary'>solutions</span> to</p>
                <p>meet your business </p>
                <p>requirements. </p>
            </div>

            <div>
                <div className='flex flex-col gap-y-10 text-xl mx-15 '>
                    <Image
                        src="/reference1.png"
                        alt="design"
                        width={550} height={550}
                        className='rounded-4xl mx-2 mt-10 w-full max-w-sm md:max-w-md lg:max-w-lg h-auto'
                    />
                    <p>My services blend creativity and strategy to bring your vision <br /> to life, leaving a lasting impact.</p>
                </div>
            </div>
        </div>
    )
}
