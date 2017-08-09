import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {shake} from 'styling/animation'

Title.propTypes = {
  smallTitle: PropTypes.string,
  largeTitle: PropTypes.string,
  border: PropTypes.bool,
  shake: PropTypes.bool
}

Title.defaultProps = {
  border: true,
  shake: false
}

export default function Title(props) {
  return (
    <Wrapper
      className={props.className}
      border={props.border}
      shake={props.shake}
    >
      <SmallTitle>
        {props.smallTitle}
      </SmallTitle>
      <LargeTitle>
        {props.largeTitle}
      </LargeTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: ${({theme}) => theme.space.sm};
  line-height: ${({theme}) => theme.text.height.xs};
  text-shadow: 1px 1px 1px rgba(255, 255, 255, .4);
  padding-bottom: 2px;
  cursor: pointer;

  // if props.border is true apply underline
  ${props =>
    props.border &&
    css`border-bottom: ${props.theme.border.lg} solid ${props.theme.color
      .accent}`};

  // if props.shake apply shake animation
  ${props => props.shake && shake()};
`

const SmallTitle = styled.div`font-size: ${({theme}) => theme.text.size.lg};`
const LargeTitle = styled.div`font-size: ${({theme}) => theme.text.size.xl};`
