import React from 'react'
import Head from 'next/head'
import { Container, Aside } from '../styles/pages/Home'
import Profile from '../components/Profile'
import Main from '../components/Main'

const Home = function Home() {
  return (
    <div >
      <Head>
        <title>HomePage</title>
      </Head>

      <Container>
        <Aside>
          <Profile />
        </Aside>
        <Main />
      </Container>

    </div>
  )
}

export default Home
