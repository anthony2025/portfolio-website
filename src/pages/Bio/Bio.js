import React from 'react'
import styled from 'styled-components'

import Page from 'components/Page'
import Title from 'components/Title'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'

import biography from 'content/biography'
import images from 'content/images'

export default function Bio(props) {
  return (
    <Page id="bio">
      <Title largeTitle="About" border={false} />
      <Paragraph content={biography} />
      <StyledImage src={images.mom} />
    </Page>
  )
}

const StyledImage = styled(Image)`
  width: 50%;
`
