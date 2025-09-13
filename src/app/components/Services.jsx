import Image from 'next/image'
import React from 'react'

export default function Services() {
    return (
        <div>
            <div className='text-5xl font-bold text-left ml-10  px-10'>
                <p>I provide artistic <span className='text-primary'>solutions</span> to</p>
                <p>meet your business </p>
                <p>requirements. </p>
            </div>

            <div>
                <div className='flex flex-col gap-y-10 text-xl '>
                    <Image
                        src="/reference1.png"
                        alt="design"
                        width={550} height={550}
                        className='rounded-4xl mt-10'
                    />
                    <p>My services blend creativity and strategy to bring your vision <br /> to life, leaving a lasting impact.</p>
                </div>
            </div>
        </div>
    )
}
