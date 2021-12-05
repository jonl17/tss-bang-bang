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
      <Link
        to='/who-is-tss'
        className='absolute left-0 top-0 h-14 m-3'
      >
        <Icon
          className='text-green-300 fill-current h-full'
          type='questionMark'
        />
      </Link>
      <a
        href='https://open.spotify.com/artist/75WR8OP1SdDikvZdDqkjse?si=3JwOrCejRyqU018lefXnxg'
        target='_blank'
        className='absolute top-0 right-0 h-14 m-3'
      >
        <Icon
          className='text-green-300 fill-current h-full'
          type='musicStaff'
        />
      </a>
    </div>
  )
}

export default Home
