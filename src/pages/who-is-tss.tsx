import React from 'react'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Link to='/'>
      <div className='min-h-screen h-full w-screen bg-yellow-200  grid place-items-center'>
        <p className='text-green-400 text-7xl desktop:text-8xl p-5 max-w-lg'>
          TSS: An artist from Iceland. Music, drawings,
          internet art and more?
        </p>
      </div>
    </Link>
  )
}

export default About
