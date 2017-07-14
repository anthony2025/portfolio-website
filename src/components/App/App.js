import React from 'react'
import styled from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Page from 'components/Page'
import Title from 'components/Title'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'
import Contact from 'components/Contact'

import introduction from 'content/introduction'
import biography from 'content/biography'

export default function App(props) {
  return (
    <div>
      <GithubCorner />
      <Page>
        <Title firstTitle="Anthony" secondTitle="Ascencio" />
        <Paragraph content={introduction} />
      </Page>

      <Page>
        <Title firstTitle="My Story" />
        {/*  <Image />  */}
        <Paragraph content={biography} />
      </Page>

      <Page>
        <Title firstTitle="Hiring?" />
        <Contact />
      </Page>
    </div>
  )
}
