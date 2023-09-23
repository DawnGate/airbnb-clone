'use client'

import React, { ButtonHTMLAttributes } from 'react'

// third party
import clsx from 'clsx'

// styles
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardRef) => {
    const { variant = 'primary', className, ...buttonProps } = props

    const buttonClass = clsx(styles.button, styles[variant], className)

    return (
      <button
        type="button"
        ref={forwardRef}
        className={buttonClass}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...buttonProps}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
