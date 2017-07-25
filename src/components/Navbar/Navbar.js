import React from 'react'
import styled from 'styled-components'

export default function Navbar(props) {
  return (
    <Wrapper>
      <Item href="#skills">Skills</Item>
      <Item href="#projects">Projects</Item>
      <Item href="#bio">Bio</Item>
      <Item href="#contact">Contact</Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;

  background: ${props => props.theme.darkerPrimary};
  box-shadow: 1px 2px 3px rgba(0, 0, 0, .4);
  color: white;

  font-size: 16px;
  display: flex;
  padding: 10px 50px 10px 0;
  justify-content: space-around;
  align-items: center;
`

const Item = styled.a`
  &:hover {
    color: ${props => props.theme.accent};
  }
`
