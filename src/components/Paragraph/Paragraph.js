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

const Wrapper = styled.div`font-size: 24px;`
