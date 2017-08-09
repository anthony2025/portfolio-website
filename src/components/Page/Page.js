import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Page.propTypes = {
  children: PropTypes.node,
  horizontal: PropTypes.bool,
  padding: PropTypes.bool
}

Page.defaultProps = {
  horizontal: false,
  padding: true
}

export default function Page(props) {
  return (
    <Wrapper
      className={props.className}
      horizontal={props.horizontal}
      padding={props.padding}
      id={props.id}
    >
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${({horizontal}) => (horizontal ? 'row' : 'column')};
  padding-top: ${props => props.padding && props.theme.space.lg};
  padding-bottom: ${props => props.padding && props.theme.space.sm};

  &:nth-child(odd) {
    color: ${({theme}) => theme.color.primary};
    background: ${({theme}) => theme.color.white};
  }
  &:nth-child(even) {
    color: ${({theme}) => theme.color.white};
    background: ${({theme}) => theme.color.primary};
  }
`
