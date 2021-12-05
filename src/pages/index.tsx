import React from 'react'
import Circle from '@cmp/Circle'
import Logo from '@cmp/Logo'

export default function Home() {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-black to-gray-900'>
      <div className='grid place-items-center h-full w-full'>
        <div>
          <Logo />
        </div>
        <div className='absolute h-screen w-screen grid place-items-center'>
          <div>
            <Circle text='The Suburban Spaceman' />
          </div>
        </div>
      </div>
    </div>
  )
}
