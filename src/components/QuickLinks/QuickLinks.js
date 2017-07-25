import React from 'react'
import styled from 'styled-components'

import githubIcon from './icons/github.svg'
import resumeIcon from './icons/resume.svg'
import emailIcon from './icons/email.svg'

export default function QuickLinks(props) {
  return (
    <Wrapper>
      <Item>
        <Icon src={githubIcon} />
        <Label href={props.github}>Github</Label>
      </Item>
      <Item>
        <Icon src={resumeIcon} />
        <Label href={props.resume}>Resume</Label>
      </Item>
      <Item>
        <Icon src={emailIcon} />
        <Label href={props.email}>Email</Label>
      </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  color: ${props => props.theme.darkerPrimary};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.a`
  &:hover {
    color: ${props => props.theme.accent};
  }
  margin-left: 10px;
`

const Icon = styled.img`
  height: 20px;
  width: 20px;
`
