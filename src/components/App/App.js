import React from 'react'

import GithubCorner from 'components/GithubCorner'
import Navbar from 'components/Navbar'
import Page from 'components/Page'
import Title from 'components/Title'
import QuickLinks from 'components/QuickLinks'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'
import ProjectLink from 'components/ProjectLink'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

import images from 'content/images'
import introduction from 'content/introduction'
import skills from 'content/skills'
import roses from 'content/roses'
import mxmaps from 'content/mxmaps'
import simon from 'content/simon'
import biography from 'content/biography'
import contact from 'content/contact'

export default function App(props) {
  return (
    <div>
      <GithubCorner />
      <Navbar />

      <Page>
        <Title firstTitle="Anthony" secondTitle="Ascencio" />
        <Paragraph content={introduction} />
        <QuickLinks />
      </Page>

      <Page id="skills">
        <Title firstTitle="What tech I work with?" />
        <Paragraph content={skills} />
      </Page>

      <Page id="projects">
        <Image src={images.roses} />
        <Title firstTitle="Rose's Daycare" />
        <Paragraph content={roses} />
        <ProjectLink repo="roses-daycare" demo="rosesdaycare.center" />
      </Page>

      <Page>
        <Image src={images.mxmaps} />
        <Title firstTitle="React MX Maps" />
        <Paragraph content={mxmaps} />
        <ProjectLink repo="react-mxmaps" demo="mxmaps.anthonyascencio.me" />
      </Page>

      <Page>
        <Image src={images.simon} />
        <Title firstTitle="React Simon" />
        <Paragraph content={simon} />
        <ProjectLink repo="react-simon" demo="simon.anthonyascencio.me" />
      </Page>

      <Page id="bio">
        <Title firstTitle="Where do I come from?" />
        <Paragraph content={biography} />
        <Image src={images.mom} />
      </Page>

      <Page id="contact">
        <Title firstTitle="Are you hiring?" />
        <Paragraph content={contact} />
        <Contact />
      </Page>

      <Footer src={images.lima} />
    </div>
  )
}
