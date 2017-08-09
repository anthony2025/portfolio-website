import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img.attrs({
  src: props => props.src
})`
  max-width: 100%;
  height: auto;
  box-shadow: 2px 4px 10px rgba(0,0,0,.6);
  object-fit: cover;
  object-position: top;
  border-radius: ${({theme}) => theme.border.radius.lg};
`

Image.propTypes = {
  src: PropTypes.string
}

export default Image
