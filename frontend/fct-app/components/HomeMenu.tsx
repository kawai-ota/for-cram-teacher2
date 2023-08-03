import React from 'react'
import styles from '../styles/homemenu.module.css'

const HomeMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>左のカラム</div>
      <div className={`${styles.column} ${styles.centerColumn}`}>真ん中のカラム</div>
      <div className={styles.column}>右のカラム</div>
    </div>
  )
}

export default HomeMenu
