import {injectGlobal} from 'styled-components'
import {fontStack, defaultSize, defaultHeight} from 'styling/variables/text'
import {grayscale} from 'styling/variables/color'

export default () => injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: ${defaultSize}px;
    line-height: ${defaultHeight};
    font-family: ${fontStack};
    background-color: ${grayscale[0]};
    text-rendering: optimizeLegibility;
  }

  a,
  button {
    text-decoration: none;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    border: 0;
    background: none;
    cursor: pointer;
  }
`
