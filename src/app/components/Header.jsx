import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from './Button';
import Image from 'next/image';
import GreyButton from './GreyButton';




export default function Header({ name }) {
    return (
        <div className='mx-10'>
            <h1 className='text-7xl text-center mt-15 font-serif font-bold uppercase'>{name}</h1>
            <div className='flex  mt-13 justify-between'>
                <div className='h-1 w-150 bg-orange-500'></div>
                <p className='max-w-[500px] '>Experienced creative designer and custom artist based in London, blending innovation with artistic flair. Crafting captivating visuals that leave a lasting impression.</p>
            </div>


            <div className='flex items-center gap-145 mt-15 '>
                <div className='flex items-center gap-5 text-xl'>
                    <FaInstagram />
                    <FaDribbble />
                    <FaBehance />
                </div>

                <Button text="Hire Me " />

            </div>


            <div className='flex flex-col items-center text-2xl my-5 justify-center '>
                <MdKeyboardArrowDown className='-mb-4' />
                <MdKeyboardArrowDown className='-mb-4 text-gray-400' />
                <MdKeyboardArrowDown className='-mb-4 text-gray-500' />
            </div>
            <div className='flex items-center gap-20 mb-20 justify-center'>
                <Image
                    src="/profile pic.png"
                    alt="my profile pic"
                    width={400} height={400}
                    className='rounded-4xl'
                />

                <div className='flex flex-col gap-y-10'>
                    <h2 className="text-8xl font-semibold">
                        Creating designs that <span className="text-orange-500">ignite</span> responses.</h2>
                    <h3 className=''>Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.</h3>
                    <GreyButton text="About Me" />
                </div>



            </div>
            
            <div className='text-5xl font-bold text-left ml-10'>
                <p>I provide artistic <span className='text-orange-500'>solutions</span> to</p>
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
