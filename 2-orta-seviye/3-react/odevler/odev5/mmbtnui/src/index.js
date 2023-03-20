import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const { type, href, children } = props

  const getButton = () => {
    return (
      <button className={styles[type]} {...props}>
        {children}
      </button>
    )
  }

  return (
    <div className={styles['b-btn']}>
      {type == 'b-link' ? <a href={href}>{getButton()}</a> : getButton()}
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.element
}

Button.defaultProps = {
  type: 'b-default',
  href: '#',
  children: 'Button'
}