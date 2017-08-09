// 18px - 22px desktop, 16px mobile
export const defaultSize = 19
export const defaultHeight = 1.5

export const size = {
  xs: defaultSize * 0.618 + 'px',
  sm: defaultSize * 1 + 'px',
  md: defaultSize * 1.618 + 'px',
  lg: defaultSize * 2.618 + 'px',
  xl: defaultSize * 4.236 + 'px'
}

export const height = {
  xs: '.8',
  sm: '1.2', // 1 - 1.2, headings
  md: '1.6' // 1.4 - 1.6, body
}

export const weight = {
  light: 300,
  regular: 400, // default: 400
  bold: 500
}

export const fontStack = 'Garamond, Roboto, Open Sans, Helvetica, serif'
