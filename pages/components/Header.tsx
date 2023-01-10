import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[500px] relative ' >
        <div className='w-full h-full '>
            <div className='w-full h-full absolute top-0 z-20 right-0 bg-[rgba(0,0,0,0.6)]'/>
            <Image src='/assets/heading.jpg' layout='fill' objectFit='cover' />
            <div className='w-full h-32 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-gray-900'/>
        </div>
    </header>
  )
}

export default Header