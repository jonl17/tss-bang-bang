import React from 'react'
import Circle from '@cmp/Circle'
import Icon from '@cmp/Icon'
import { Link } from 'gatsby'

const Home = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-black to-gray-900 relative'>
      <div className='grid place-items-center h-full w-full'>
        <div>
          <Icon
            className='text-green-300 fill-current'
            type='logo-main'
          />
        </div>
        <div className='absolute h-screen w-screen grid place-items-center'>
          <div>
            <Circle text='The Suburban Spaceman' />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 p-5 h-24'>
        <Link to='/who-is-tss'>
          <Icon
            className='text-green-300 fill-current h-full'
            type='questionMark'
          />
        </Link>
      </div>
    </div>
  )
}

export default Home
