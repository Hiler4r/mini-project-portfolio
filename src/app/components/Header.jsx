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
            <h1 className='md:text-7xl text-3xl text-center mt-15 font-serif font-bold uppercase'>{name}</h1>
            <div className='flex flex-col md:flex-row gap-2 mt-13 justify-between'>
                <div className='h-1 md:w-150 bg-primary'></div>
                <p className='max-w-[500px]  '>Experienced creative designer and custom artist based in London, blending innovation with artistic flair. Crafting captivating visuals that leave a lasting impression.</p>
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


            
            
        </div>


    )
}
