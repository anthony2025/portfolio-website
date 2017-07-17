import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import nlToBr from 'utils/nlToBr'

Paragraph.propTypes = {
  content: PropTypes.string
}

export default function Paragraph(props) {
  return (
    <Wrapper className={props.className}>
      {nlToBr(props.content)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 50px; // NOBUENO, children setting its own margin
  @media (min-width: 700px) {
    padding-left: 15px;
    border-left: 2px dotted ${props => props.theme.accent};
  }
`
