import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import shake from 'styling/shakeAnimation'

Title.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  border: PropTypes.bool
}

Title.defaultProps = {
  border: true
}

export default function Title(props) {
  return (
    <Wrapper className={props.className} border={props.border}>
      <FirstTitle>
        {props.firstTitle}
      </FirstTitle>
      <SecondTitle>
        {props.secondTitle}
      </SecondTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  line-height: .8;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, .4);
  margin-bottom: 75px; // NOBUENO, children setting its own margin
  border-bottom: ${props => (props.border ? '3px' : '0')} solid
    ${props => props.theme.accent};

  animation: ${shake} 0.82s cubic-bezier(.36, .07, .19, .97) both;
  &:active {
    animation: none;
  }
`

const FirstTitle = styled.div`
  @media (min-width: 700px) {
    font-size: 50px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
  }
`

const SecondTitle = styled.div`
  @media (min-width: 700px) {
    font-size: 80px;
  }
  @media (max-width: 700px) {
    font-size: 60px;
  }
`
