import React from 'react'

export const Button = (props) => {
  return <button {...props}>{props.text}</button>
}

export const Paragraph = (props) => {
  return <p {...props}>{props.text}</p>
}
