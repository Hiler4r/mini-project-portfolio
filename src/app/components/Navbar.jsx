import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='px-10'>
      <ul className='flex items-center gap-15 justify-between mx-10 my-8 font-bold text-lg'>
        <div className='flex items-center gap-5'>
          <li className='hover:text-primary text-color-primary'>
            <Link href="/">Home</Link>
          </li>
          <li className='active:text-primary hover:text-primary'>
            <Link href="#about">About</Link>
          </li>
          <li className='hover:text-primary'>
            <Link href="#projects">Projects</Link>
          </li >
        </div>


        <div>
        <li>
        <Image
          src="/logo.png"
          alt="Logo"
          height={50}
          width={150}
          className=''
/>
          {/* <Link href="/logo">Logo</Link> */}
        </li>
        </div>



        <div className='flex items-center gap-5'>
          {/* <li className='hover:text-orange-500'>
            <Link href="/blog">Blog</Link>
          </li> */}
          <li className='hover:text-primary'>
            <Link href="#contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
