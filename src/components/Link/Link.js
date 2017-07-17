import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Link(props) {
  return (
    <Wrapper>
      <Label>Repository</Label>
      <A href={`https//github.com/anthony2025/${props.repo}`}>
        github.com/anthony2025/{props.repo}
      </A>
      <br />
      <Label>Live at</Label>
      <A href={`https://${props.demo}`}>
        https://{props.demo}
      </A>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: inherit;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 50px; // NOBUENO children setting its own margin
`

const Label = styled.a`color: ${props => props.theme.accent};`

const A = styled.a`
  display: block;
  &:hover {
    color: ${props => props.theme.accent};
  }
`

Link.propTypes = {
  href: PropTypes.string
}
