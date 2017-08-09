import React from 'react'

import Page from 'components/Page'
import Title from 'components/Title'
import Paragraph from 'components/Paragraph'
import QuickLinks from 'components/QuickLinks'

import introduction from 'content/introduction'

export default function Home(props) {
  return (
    <Page>
      <Title smallTitle="Anthony" largeTitle="Ascencio" shake id="home" />
      <Paragraph content={introduction} />
      <QuickLinks />
    </Page>
  )
}
