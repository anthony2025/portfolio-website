import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img.attrs({
  src: props => props.src
})`
  width: 50%; // NOBUENO, children setting its own dimensions
  margin-bottom: 50px; // NOBUENO, children setting its own margin
  max-height: 400px;
  box-shadow: 2px 4px 8px rgba(0,0,0,.6);
  object-fit: cover;
  object-position: top;
  transition: 2.5s;
  &:hover,
  &:active {
    filter: grayscale(90%);
  }
`

Image.propTypes = {
  src: PropTypes.string
}

export default Image
