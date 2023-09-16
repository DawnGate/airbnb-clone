import React from 'react'

// third party
import clsx from 'clsx'

// styles
import styles from './Button.module.scss'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  label: string
  onClick?: () => void
}

function Button({ variant = 'primary', label, onClick }: ButtonProps) {
  const buttonClass = clsx(styles.button, styles[variant])

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
