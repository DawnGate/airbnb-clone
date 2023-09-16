import React from 'react'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

function Box(props: BoxProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...props} />
}

export default Box
