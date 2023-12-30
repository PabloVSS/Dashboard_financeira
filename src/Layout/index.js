import React from 'react'
import styles from '../styles/Layout/Layout.module.css'
import { Navbar } from './Navbar/Navbar'

export const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
        <div className={styles.container_header}>
          <Navbar />
        </div>
        <div className={styles.container_main}>
          <main>{children}</main>      
            </div> 
  </div>
  )
}
