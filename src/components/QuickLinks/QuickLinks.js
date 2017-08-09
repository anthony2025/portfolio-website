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
        <Label href={`mailto:${props.email}`}>Email</Label>
      </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
  color: ${({theme}) => theme.color.darkerPrimary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: ${({theme}) => theme.color.accent};
  }
`

const Label = styled.a`
  margin-left: ${({theme}) => theme.space.xxs};
  font-size: ${({theme}) => theme.text.size.md};
`

const Icon = styled.img`
  height: 20px;
  width: 20px;
`
