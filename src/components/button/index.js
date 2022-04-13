import React from 'react'
import styles from './index.module.css'

export const Button = ({value, children, onClick}) => {

  const clickHandler = () => {
    typeof onClick === 'function' && onClick()
  }

  return (
      <button className={styles['button-base']} onClick={clickHandler}>
        {children}
      </button>
  )
}