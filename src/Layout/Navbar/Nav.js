import React from 'react'
import styles from '../../styles/Layout/Navbar.module.css'
import { NavLinks } from './NavLinks'

export const Nav = () => {
  return (
    <nav className={styles.nav}>
          <NavLinks />     
    </nav>
  )
}
