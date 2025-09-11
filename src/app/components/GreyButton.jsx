import React from 'react'

export default function GreyButton({ text }) {
    return (
        <button className='bg-neutral-700 rounded-lg border-1 border-white
        hover:border-gray-500 transition duration-300 cursor-pointer w-40 p-3'>
            {text}
        </button>
    )
}
