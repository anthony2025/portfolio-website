import Contact from './Contact'
import injectProps from 'utils/injectProps'
import contactInfo from 'content/contactInfo'

const mapToProps = {
  fields: {
    github: {action: 'redirect', data: contactInfo.github},
    linkedin: {action: 'redirect', data: contactInfo.linkedin},
    email: {action: 'mailto', data: contactInfo.email},
    phone: {action: 'none', data: contactInfo.phone},
    location: {action: 'none', data: contactInfo.location},
    resume: {action: 'download', data: contactInfo.resume}
  }
}

export default injectProps(mapToProps)(Contact)
