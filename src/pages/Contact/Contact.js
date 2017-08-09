import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Page from 'components/Page'
import Title from 'components/Title'
import Paragraph from 'components/Paragraph'

import contact from 'content/contactMe'

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
    <Page id="contact">
      <Title largeTitle="Contact" border={false} />
      <Paragraph content={contact} />
      <ContactList {...props} />
    </Page>
  )
}

function ContactList(props) {
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

const Wrapper = styled.div`line-height: ${({theme}) => theme.text.height.md};`

const Field = styled.div`
  margin-bottom: ${({theme}) => theme.space.xs};
  font-size: ${({theme}) => theme.text.size.sm};
  display: flex;
  align-items: baseline;
`

const Label = styled.div`
  color: ${({theme}) => theme.color.accent};
  font-size: ${({theme}) => theme.text.size.md};
  margin-right: ${({theme}) => theme.space.xxs};
`

// If email we need to add a mailto to the href or the browser will just refresh
// But if action is none we must leave the href unset (undefined) else the page
// will be refreshed when clicked. Afterwards we make sure our cursor and hover
// color is appropiate for the action
const Link = styled.a.attrs({
  href: props => {
    switch (props.action) {
      case 'mailto':
        return `mailto:${props.data}`
      case 'redirect':
      case 'download':
        return props.data
      default:
    }
  }
})`
  cursor: ${props => (props.action === 'none' ? 'default' : 'pointer')};
  &:hover {
    color: ${props =>
      props.action === 'none' ? 'inherit' : props.theme.color.accent};
  }
`
