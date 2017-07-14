import React from 'react'
// HTML eats away implicit whitespace and newlines, this forces them back

export default text =>
  text.split('\n').map((item, key) =>
    <span key={key}>
      {item}
      <br />
    </span>
  )
