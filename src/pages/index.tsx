import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Circle from '@cmp/Circle'

type Props = {
  data: {
    imageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export default function Home({ data: { imageSharp } }: Props) {
  return (
    <div className='h-screen w-full bg-gray-50'>
      <div className='grid place-items-center h-full w-full'>
        <h1 className='text-8xl text-gray-800'>TSS</h1>
        <div className='absolute h-screen w-screen grid place-items-center'>
          <div>
            <Circle text='The Suburban Spaceman' />
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    imageSharp(original: { src: { regex: "/my-life/" } }) {
      gatsbyImageData
    }
  }
`
