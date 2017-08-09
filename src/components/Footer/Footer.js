import PropTypes from 'prop-types'
import styled from 'styled-components'
import {fade} from 'styling/animation'

const Footer = styled.img.attrs({
  src: props => props.src
})`
  width: 100%;
  max-height: 500px;
  object-position: bottom;
  ${fade()};
`

Footer.propTypes = {
  src: PropTypes.string
}

export default Footer
