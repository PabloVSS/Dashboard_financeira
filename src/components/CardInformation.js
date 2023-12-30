import React from 'react'
import styles from '../styles/components/CardInformation.module.css'

export const CardInformation = () => {
  return (
    <>
    <div className={styles.container_information}>
        <div className={styles.information}>
            <p>Salário</p>
        </div>
        <div className={styles.valor}>
            R$5000,00
        </div>

    </div>
    </>
  )
}
