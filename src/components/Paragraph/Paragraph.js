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
  margin-bottom: ${({theme}) => theme.space.md};
  max-width: 600px;
  font-size: ${({theme}) => theme.text.size.sm};
  line-height: ${({theme}) => theme.text.height.md};

  @media (min-width: 700px) {
    padding-left: 15px;
    border-left: ${({theme}) => theme.border.size.lg} dotted
      ${({theme}) => theme.color.accent};
  }
`
