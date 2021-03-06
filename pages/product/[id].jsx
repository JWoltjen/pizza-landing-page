import React, {useState} from 'react'
import styles from '../../styles/Product.module.css';
import Image from 'next/image'; 


function Product () {
    const [size, setSize] = useState(0)
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
                    <Image alt="" src={pizza.img} layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose your size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose Additional Ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name="double" className={styles.checkbox}/>
                        <label htmlFor="double">
                            Double Ingredients
                        </label>
                    </div>
                    <div className={styles.option}>
                        <input
                        className={styles.checkbox}
                        type="checkbox"
                        id="cheese"
                        name="cheese"
                        />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input
                        className={styles.checkbox}
                        type="checkbox"
                        id="spicy"
                        name="spicy"
                        />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input
                        className={styles.checkbox}
                        type="checkbox"
                        id="garlic"
                        name="garlic"
                        />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.buttonrrrrr}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product 
