import React from 'react'
import styles from '../../styles/Layout/Navbar.module.css'
import {linksData} from '../../bd/LinksData'
import { Nav } from './Nav'
import { Logo } from './Logo'
import { Criador } from './Criador'

export const Navbar = () => {
  return (
    <>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.navbar}>
        <Nav />
      </div>
    </>
  )
}
