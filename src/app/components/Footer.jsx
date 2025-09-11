import React from 'react'
import Link from 'next/link'
import FooterLink from './FooterLink'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='mx-20'>
            <div className='flex items-start'>
                <div>

                    
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            height={200}
                            width={150}
                        />
                </div>

                <div className='flex  gap-20 ml-[600px]'>
                    <ul>
                        <h2 className='font-bold mb-4'>Sitemap</h2>
                        {/* <FooterLink li="Sitemap" link="/sitemap" /> */}
                        <FooterLink li="Home" link="/" />
                        <FooterLink li="Works" link="/works" />
                        <FooterLink li="About" link="/about" />
                        <FooterLink li="Blog" link="/blog" />
                    </ul>
                    <ul>
                        <h2 className='font-bold mb-4'>Resources</h2>
                        {/* <FooterLink li="Resources" link="/resources" /> */}
                        <FooterLink li="Styleguide" link="/styleguide" />
                        <FooterLink li="Changelog" link="/changelog" />
                        <FooterLink li="Licences" link="/licences" />
                        <FooterLink li="404" link="/404" />
                    </ul>
                    <ul>
                        <h2 className='font-bold mb-4'>Socials</h2>
                        {/* <FooterLink li="Sitemap" link="/sitemap" /> */}
                        <FooterLink li="Facebook" link="/facebook" />
                        <FooterLink li="Twitter" link="/twitter" />
                        <FooterLink li="Instagram" link="/instagram" />
                        <FooterLink li="LinkedIn" link="/linkedin" />
                    </ul>

                </div>
            </div>
            <div className='mb-10'>
                <p>&copy;The Anuoluwapo Oyedele. All rights reserved</p>
            </div>
        </footer>
    )
}
