import React from 'react'
import { Helmet } from 'react-helmet'

const MainLayout: React.FC = ({ children }) => {
  return (
    <main>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <title>TSS | earth citizen</title>
        <meta
          property='description'
          content='An artist from Iceland. Music, drawings, programming and more?'
        />
        <meta
          property='og:description'
          content='An artist from Iceland. Music, drawings, programming and more?'
        />
      </Helmet>
      {children}
    </main>
  )
}

export default MainLayout
