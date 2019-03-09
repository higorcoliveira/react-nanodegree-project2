import React from 'react'
import styles from '../style/notfound.css'

const NotFound = () => (
  <div className={styles.errorBody}>
    <div className={styles.errorBg} />
    <div className={styles.errorMessage}>404</div>
  </div>
)

export default NotFound
