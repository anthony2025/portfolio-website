import React from 'react'

import GithubCorner from 'components/GithubCorner'
import Page from 'components/Page'
import Title from 'components/Title'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'
import Link from 'components/Link'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

import images from 'content/images'
import introduction from 'content/introduction'
import roses from 'content/roses'
import simon from 'content/simon'
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
        <Title secondTitle="Rose's Daycare" />
        <Paragraph content={roses} />
        <Link repo="roses-daycare" demo="rosesdaycare.center" />
        <Image src={images.roses} />
      </Page>

      <Page>
        <Title secondTitle="React-Simon" />
        <Paragraph content={simon} />
        <Link repo="react-simon" demo="simon.anthonyascencio.me" />
        <Image src={images.simon} />
      </Page>

      <Page>
        <Title secondTitle="Journey" />
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
