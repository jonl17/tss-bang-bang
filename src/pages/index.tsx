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
    <div className='h-screen w-full bg-blue-300'>
      <div className='grid place-items-center h-full w-full'>
        <GatsbyImage
          objectFit='contain'
          image={imageSharp.gatsbyImageData}
          alt='My life is good'
        />
        <div className='absolute'>
          <Circle text='The Suburban Spaceman' />
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
