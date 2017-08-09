import animateWithReset from 'styling/animation/helpers/animateWithReset'
import shakeKeyframe from 'styling/animation/keyframes/shake'
import appearKeyframe from 'styling/animation/keyframes/appear'

const duration = {
  sm: '.1s',
  md: '.3s',
  lg: '1s'
}

export const fade = () => `
  transition: ${duration.lg};
  &:hover {
    filter: grayscale(90%);
  }
`

export const shake = () =>
  animateWithReset(
    shakeKeyframe,
    duration.lg,
    'cubic-bezier(.36, .07, .19, .97)',
    'both'
  )

export const appear = () =>
  animateWithReset(appearKeyframe, duration.lg, 'linear')

// TODO: not working
export const hoverColor = color => `
  transition: ${duration.sm};
  &:hover {
    color: ${color};
  }
  `
