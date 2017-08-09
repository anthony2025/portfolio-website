// Will fire animation when the page loads, but also on click/tap

export default (keyframe, duration, timing, options) => `
  animation: ${keyframe} ${duration} ${timing} ${options};
  &:active {
    animation: none;
  }
`
