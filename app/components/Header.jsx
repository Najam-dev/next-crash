import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link href="/">Techno Spot</Link>
                </div>
                <div className='links'>
                    <Link href='/about'>About</Link>
                    <Link href='/about/team'>Team</Link>
                    <Link href='/code/repos'>Code</Link>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header