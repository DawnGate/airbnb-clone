import React, { CSSProperties, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Text.module.scss'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

type Weight = 'normal' | 'medium' | 'semibold' | 'bold'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Align = 'left' | 'center' | 'right'

type Casing = 'uppercase' | 'lowercase' | 'capitalize' | 'none'

type Spacing = 'normal' | 'wide'

interface TextProps {
  as?: Variant
  fontSize?: Size
  fontWeight?: Weight
  letterSpacing?: Spacing
  align?: Align
  casing?: Casing
  className?: string
  children?: ReactNode | string
  style?: CSSProperties
}

function Text(props: TextProps) {
  const {
    as: Tag = 'p',
    fontSize = 'md',
    fontWeight = 'normal',
    letterSpacing = 'normal',
    align = 'left',
    casing = 'none',
    className,
    children = 'Text',
    style = {},
  } = props

  const textClassName = clsx(
    styles.text,
    {
      // size
      [styles['size-xs']]: fontSize === 'xs',
      [styles['size-sm']]: fontSize === 'sm',
      [styles['size-md']]: fontSize === 'md',
      [styles['size-lg']]: fontSize === 'lg',
      [styles['size-xl']]: fontSize === 'xl',
      [styles['size-2xl']]: fontSize === '2xl',
      [styles['size-3xl']]: fontSize === '3xl',
      [styles['size-4xl']]: fontSize === '4xl',
      // weight
      [styles['font-weight-normal']]: fontWeight === 'normal',
      [styles['font-weight-medium']]: fontWeight === 'medium',
      [styles['font-weight-semibold']]: fontWeight === 'semibold',
      [styles['font-weight-bold']]: fontWeight === 'bold',
      // letter spacing
      [styles['letter-spacing-normal']]: letterSpacing === 'normal',
      [styles['letter-spacing-wide']]: letterSpacing === 'wide',
      // align
      [styles['align-left']]: align === 'left',
      [styles['align-center']]: align === 'center',
      [styles['align-right']]: align === 'right',
      // casing
      [styles['casing-none']]: casing === 'none',
      [styles['casing-uppercase']]: casing === 'uppercase',
      [styles['casing-lowercase']]: casing === 'lowercase',
      [styles['casing-capitalize']]: casing === 'capitalize',
    },
    className
  )
  return (
    <Tag className={textClassName} style={style}>
      {children}
    </Tag>
  )
}
export default Text
