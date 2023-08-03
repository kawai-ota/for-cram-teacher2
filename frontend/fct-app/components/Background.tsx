import React,{ReactNode} from 'react'
import styles from '../styles/background.module.css'

interface BackgroundProps {
  children:ReactNode;
}

const Background = ({children}:BackgroundProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Background