import styles from "../styles/Cart.module.css"
import Image from 'next/image'; 

function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr classname={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/pizza.png" 
                                    height='100'
                                    width='100'
                                    objectFit="cover" 
                                    alt="pizza"
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>SUPREME</span>
                        </td>
                        <td>
                            <span className={styles.extra}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.91</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.88</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextFile}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div classname={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total</b>$79.60
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
