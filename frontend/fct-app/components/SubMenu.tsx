import React from 'react'
import styles from '../styles/submenu.module.css'

const SubMenu = () => {

    return (
        <div className={styles.container}>
          <div className={styles.column}>左のカラム</div>
          <div className={`${styles.column} ${styles.centerColumn}`}>真ん中のカラム</div>
        </div>
      )
}

export default SubMenu