import React, { Fragment } from 'react'

function Text({ styles, classes, children }) {
  return (
    <Fragment style={{ ...styles }} className={classes}>
      <p>{children}</p>
    </Fragment>
  )
}

export default Text
