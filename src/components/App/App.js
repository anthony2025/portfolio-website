import React from 'react'
import styled from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Page from 'components/Page'
import Title from 'components/Title'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

import introduction from 'content/introduction'
import biography from 'content/biography'
import images from 'content/images'

export default function App(props) {
  return (
    <div>
      <GithubCorner />
      <Page>
        <Title firstTitle="Anthony" secondTitle="Ascencio" />
        <Paragraph content={introduction} />
      </Page>

      <Page>
        <Title secondTitle="My Story" />
        <Paragraph content={biography} />
        <Image src={images.uva} />
      </Page>

      <Page>
        <Title secondTitle="Hiring?" />
        <Contact />
      </Page>

      <Footer src={images.lima} />
    </div>
  )
}
