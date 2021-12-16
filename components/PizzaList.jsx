import React from 'react'
import styles from '../styles.PizzaList.module.css'
import PizzaCard from './PizzaCard'

function PizzaList() {
    return (
        <div className={styles.container}>
            <h1> The Best Pizza in Town!!</h1>
            <p className={styles.desc}>
                Dolor tempor laborum reprehenderit commodo nisi magna aute labore dolore laboris fugiat ex. Commodo qui esse ut do nulla sit nostrud. Dolore eiusmod laboris consequat ut nisi in do. Est culpa non non est laboris irure aliquip id ullamco duis incididunt exercitationd.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>    
                <PizzaCard/>    
                <PizzaCard/>    
                <PizzaCard/>    
                <PizzaCard/>    
            </div>
        </div>
    )
}


export default PizzaList
