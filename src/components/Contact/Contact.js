import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Contact.propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      action: PropTypes.oneOf(['redirect', 'mailto', 'download', 'none']),
      data: PropTypes.string
    })
  )
}

export default function Contact(props) {
  return (
    <Wrapper className={props.className}>
      {Object.keys(props.fields).map(key => {
        let value = props.fields[key]
        return (
          <Field key={key}>
            <Label>
              {key.toUpperCase()}
            </Label>
            <Link action={value.action} data={value.data}>
              {value.action === 'download'
                ? 'click to download PDF'
                : value.data}
            </Link>
          </Field>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  line-height: 1.5;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Field = styled.div`margin-bottom: 25px;`

const Label = styled.div`
  color: ${props => props.theme.accent};
  margin-right: 50px;
`

// If email we need to add a mailto to the href or the browser will just refresh
// If url/download we need to add https else browser will look in the same domain
// But if action is none we must leave the href unset (undefined) else the
// page will be refreshed when clicked
// Afterwards we make sure our cursor and hover color is appropiate for the action
const Link = styled.a.attrs({
  href: props => {
    switch (props.action) {
      case 'redirect':
      case 'download':
        return `https://${props.data}`
      case 'mailto':
        return `mailto:${props.data}`
      default:
        return
    }
  }
})`
  cursor: ${props => (props.action !== 'none' ? 'pointer' : 'default')};
  &:hover {
    color: ${props =>
      props.action !== 'none' ? props.theme.accent : 'inherit'};
  }
`
