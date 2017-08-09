import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ProjectLink.propTypes = {
  repo: PropTypes.string,
  demo: PropTypes.string
}

export default function ProjectLink(props) {
  return (
    <Wrapper>
      <Label>Repository</Label>
      <A href={props.repo}>
        {props.repo}
      </A>
      <br />
      <Label>Live at</Label>
      <A href={props.demo}>
        {props.demo}
      </A>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: inherit;
  margin-bottom: ${({theme}) => theme.space.md};
`

const Label = styled.a`
  font-size: ${({theme}) => theme.text.size.md};
  color: ${({theme}) => theme.color.accent};
`

const A = styled.a`
  display: block;
  color: inherit;
  transition: .1s;
  font-size: ${({theme}) => theme.text.size.sm};
  &:hover {
    color: ${({theme}) => theme.color.accent};
  }
`
