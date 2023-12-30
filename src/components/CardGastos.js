import React from 'react'
import styles from '../styles/components/CardGastos.module.css'

export const CardGastos = () => {
  return (
    <div className={styles.cardGastos}>
      <h3>Gastos do Mês</h3>
      <div className={styles.container_contas}>
        <p>Compras</p><p>R$ 2500</p>
      </div>
      </div>
  )
}
