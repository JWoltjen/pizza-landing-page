import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="an icon of a telephone"  width="32" height="32"/>
                </div>
                <div className={styles.text}>Order Now!</div>
                <div className={styles.text}>012 334 5566</div>
            </div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
        </div>
    ); 
}; 

export default Navbar
