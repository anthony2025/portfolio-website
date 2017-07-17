import PropTypes from 'prop-types'
import styled from 'styled-components'

const Footer = styled.img.attrs({
  src: props => props.src
})`
  width: 100%; // NOBUENO, children setting its own dimensions
  max-height: 500px; // NOBUENO, children setting its own dimensions
  object-fit: cover;
  object-position: bottom;
  transition: 2s;
  &:hover,
  &:active {
    filter: grayscale(90%);
  }
`

Footer.propTypes = {
  src: PropTypes.string
}

export default Footer
