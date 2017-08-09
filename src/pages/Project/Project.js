import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Page from 'components/Page'
import Title from 'components/Title'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'
import ProjectLink from 'components/ProjectLink'
import Dual, {Left, Right} from 'components/Dual'

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired
}

export default function Project(props) {
  return (
    <Page>
      <Title smallTitle={props.title} border={false} />
      <StyledDual>
        <Left>
          <Paragraph content={props.content} />
          <ProjectLink repo={props.repo} demo={props.demo} />
        </Left>
        <Right>
          <Image src={props.image} />
        </Right>
      </StyledDual>
    </Page>
  )
}
const StyledDual = styled(Dual)`
  width: 80%;
`
