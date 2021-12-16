import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

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
                    <p className={styles.text}>
                        2601 W 64th St. 
                        <br/> Mission Hills, KS 
                        <br /> 913-262-3141
                    </p>
                    <p className={styles.text}>
                        800 W 9th St. 
                        <br/> Merriam, KS 
                        <br /> 913-963-6189
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY THROUGH FRIDAY
                        <br /> 9:00 - 9:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY AND SUNDAY
                        <br /> 12:00 - 12:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
