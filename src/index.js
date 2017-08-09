import React from 'react'
import {render} from 'react-snapshot'
import App from 'components/App'

import registerServiceWorker from 'utils/offline'
import Raven from 'raven-js'

import injectResetCSS from 'styling/reset.js'
import {ThemeProvider} from 'styled-components'
import theme from 'styling/theme'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

injectResetCSS()
registerServiceWorker()
Raven.config(process.env.REACT_APP_RAVEN_URL).install()
