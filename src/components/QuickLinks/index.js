import QuickLinks from './QuickLinks'
import injectProps from 'utils/injectProps'
import contactInfo from 'content/contactInfo'

const mapToProps = {
  github: `https://${contactInfo.github}`,
  email: `mailto:${contactInfo.email}`,
  resume: `https://${contactInfo.resume}`
}

export default injectProps(mapToProps)(QuickLinks)
