import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/iamge'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg/png" layout="fill" alt="background"/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES WE DID! 
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        6325 Kennett  Place 
                        <br/> Mission, KS 
                        <br /> 913-944-6189
                    </p>
                </div>
                <div className={styles.card}></div>
            </div>
        </div>
    )
}

export default Footer
