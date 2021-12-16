import React from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'


function Featured() {

    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}}>
            <Image src="/img/arrowl.png" alt="" layout="fill" />
            </div>
            <div className={styles.wrapper}>
                    {images.map((img, i) => (
                        <div key={i}  className={styles.imgContainer}>
                            <Image src={img} layout="fill" objectFit="contain"/>
                        </div>
                    ))}
                
            </div>
            <div className={styles.arrowContainer} style={{right:0}}>
                <Image src="/img/arrowr.png" layout='fill' alt ="" />
            </div>
        </div>
    )
}

export default Featured
