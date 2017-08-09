import React from 'react'
import styled from 'styled-components'

import Page from 'components/Page'
import Title from 'components/Title'
import Paragraph from 'components/Paragraph'

import * as skills from 'content/skills'

export default function Skills(props) {
  return (
    <Page id="skills">
      <Title largeTitle="Skills" border={false} />
      <div>
        <Label>FRONTEND</Label>
        <Paragraph content={skills.frontend} />
      </div>
      <div>
        <Label>BACKEND</Label>
        <Paragraph content={skills.backend} />
      </div>
      <div>
        <Label>GENERAL</Label>
        <Paragraph content={skills.general} />
      </div>
    </Page>
  )
}

const Label = styled.span`color: ${({theme}) => theme.color.accent};`
