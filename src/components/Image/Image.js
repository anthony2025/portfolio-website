import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img.attrs({
  src: props => process.env.PUBLIC_URL + props.src
})`
  width: 100%;
  height: auto;
  border: 2px solid ${props => props.theme.accent};
  margin: 0 auto;
`

Image.propTypes = {
  src: PropTypes.string
}

export default Image
