import React from 'react'
import Link from 'next/link'

export default function FooterLink({li, link, className = ""}) {
    return (
        <li className="mb-2">
            <Link href={link} className={`text-gray-300 hover:text-blue-400 transition-colors duration-200 ${className}`}>{li}</Link>
        </li>
    )
}
