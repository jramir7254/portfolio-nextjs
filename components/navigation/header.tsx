import React from 'react'

export function Header() {
    return (
        <header className='border-b font-monts  h-16 fixed w-full flex items-center justify-between px-20 bg-black/20 z-999 backdrop-blur-md  '>
            <div>
                <h3 className=''>Jesus Ramirez</h3>
            </div>

            <nav className='space-x-5'>
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </nav>
        </header>
    )
}
