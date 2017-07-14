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
  width: 100%;
  @media (min-width: 700px) {
    padding: 75px 20% 50px 20%;
    font-size: 24px;
  }
  @media (max-width: 700px) {
    padding: 75px 30px 50px 30px;
    font-size: 18px;
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