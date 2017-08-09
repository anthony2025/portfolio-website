import React from 'react'

import GithubCorner from 'components/GithubCorner'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import Home from 'pages/Home'
import Skills from 'pages/Skills'
import Project from 'pages/Project'
import Bio from 'pages/Bio'
import Contact from 'pages/Contact'

import images from 'content/images'
import roses from 'content/roses'
import mxmaps from 'content/mxmaps'
import simon from 'content/simon'

export default function App(props) {
  return (
    <div>
      <GithubCorner />
      <Navbar />
      <Home id="home" />
      <Skills id="skills" />

      <Project
        id="projects"
        title="Rose's Daycare LLC"
        image={images.roses}
        repo="https://github.com/anthony2025/roses-daycare"
        demo="https://rosesdaycare.center"
        content={roses}
      />
      <Project
        title="React MX Maps"
        image={images.mxmaps}
        repo="https://github.com/anthony2025/react-mxmaps"
        demo="https://mxmaps.anthonyascencio.me"
        content={mxmaps}
      />
      <Project
        title="React Simon"
        image={images.simon}
        repo="https://github.com/anthony2025/react-simon"
        demo="https://simon.anthonyascencio.me"
        content={simon}
      />

      <Bio id="bio" />
      <Contact id="contact" />
      <Footer src={images.lima} />
    </div>
  )
}
