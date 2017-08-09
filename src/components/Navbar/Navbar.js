import React from 'react'
import styled from 'styled-components'

export default function Navbar(props) {
  return (
    <Wrapper>
      <Item href="#home">Home</Item>
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

  background: ${({theme}) => theme.color.darkerPrimary};
  box-shadow: 1px 2px 3px rgba(0, 0, 0, .4);

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: ${({theme}) => theme.text.size.sm};
  padding: 10px 50px 10px 0;
`

const Item = styled.a`
  color: ${({theme}) => theme.color.white};
  &:hover {
    color: ${({theme}) => theme.color.accent};
  }
`
