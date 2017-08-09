import QuickLinks from './QuickLinks'
import injectProps from 'utils/injectProps'
import contactInfo from 'content/contactInfo'

const mapToProps = {
  github: contactInfo.github,
  email: contactInfo.email,
  resume: contactInfo.resume
}

export default injectProps(mapToProps)(QuickLinks)
