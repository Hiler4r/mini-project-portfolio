import React from 'react'

export default function Button({ text }) {
    return (
        <button className='px-5 py-2 bg-primary rounded-md hover:bg-primary/80 transition-colors duration-300'>{text}</button>
    )
}
