import React from 'react'
import styles from '../../styles/Product.module.css';
import Image from 'next/image'; 


function Product () {
    const pizza = {
        id: 1, 
        img: "/img/pizza.png", 
        name: "PEPPERONI", 
        price: [19.99, 23.99, 27.99], 
        desc: "Adipisicing enim esse adipisicing adipisicing culpa laborum fugiat irure. Sint duis non magna et irure."
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image alt="" src={pizza.img} layout="fill"/>
                </div>
            </div>
            <div className={styles.right}></div>

        </div>
    )
}

export default Product 
