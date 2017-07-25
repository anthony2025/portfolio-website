import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img.attrs({
  src: props => props.src
})`
  width: 70%;
  max-height: 600px;
  margin-bottom: 50px; // NOBUENO, children setting its own margin-bottom
  box-shadow: 2px 4px 10px rgba(0,0,0,.6);
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  &:hover,
  &:active {
    transition: .3s;
    transform: scale(1.05);
  }
`

Image.propTypes = {
  src: PropTypes.string
}

export default Image
