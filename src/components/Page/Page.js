import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Page.propTypes = {
  children: PropTypes.node
}

export default function Page(props) {
  return (
    <Wrapper className={props.className}>
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  @media (min-width: 700px) {
    padding: 50px 20%;
  }
  @media (max-width: 700px) {
    padding: 50px 30px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;

  &:nth-child(odd) {
    background: ${props => props.theme.opposite};
    color: ${props => props.theme.primary};
  }
  &:nth-child(even) {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.opposite};
  }
`
