import React from 'react'
import Link from 'next/link'
import FooterLink from './FooterLink'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
            <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1 flex items-center justify-center md:justify-start">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        height={120}
                        width={90}
                        className="filter brightness-0 invert"
                        sizes="(max-width: 768px) 90px, 150px"
                    />
                </div>
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <ul>
                        <h3 className="font-bold text-lg mb-4 text-blue-400">Sitemap</h3>
                        <FooterLink li="Home" link="/" />
                        <FooterLink li="About" link="#about" />
                        <FooterLink li="Project" link="#projects" />
                        <FooterLink li="Contact" link="#contact" />
                    </ul>
                    <ul>
                        <h3 className="font-bold text-lg mb-4 text-blue-400">Resources</h3>
                        <FooterLink li="Styleguide" link="/styleguide" />
                        <FooterLink li="Changelog" link="/changelog" />
                        <FooterLink li="Licenses" link="/licenses" />
                        <FooterLink li="404" link="/404" />
                    </ul>
                    <ul>
                        <h3 className="font-bold text-lg mb-4 text-blue-400">Socials</h3>
                        <FooterLink li="Facebook" link="/facebook" />
                        <FooterLink li="Twitter" link="/twitter" />
                        <FooterLink li="Instagram" link="/instagram" />
                        <FooterLink li="LinkedIn" link="/linkedin" />
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-400">&copy; The Anuoluwapo Oyedele. All rights reserved</p>
            </div>
        </footer>
    )
}
