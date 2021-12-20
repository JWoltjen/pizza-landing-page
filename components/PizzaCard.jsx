import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src='/img/pizza.png' alt="pizza" width="500" height="500"/>
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.desc}>
                Tempor in ut ad sint fugiat. Tempor ea aliquip aliquip velit dolore culpa deserunt cillum laboris consequat qui.  
            </p>
        </div>
    )
}

export default PizzaCard
