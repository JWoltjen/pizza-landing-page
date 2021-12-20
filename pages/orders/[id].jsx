import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                <table className={styles.table}>
                    <tr classname={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <span className={styles.id}>190879</span>
                        </td>
                        <td>
                            <span className={styles.name}>
                               John Doe
                            </span>
                        </td>
                        <td>
                            <span className={styles.address}>350 Broadway Ave. Kansas City</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.88</span>
                        </td>
                    </tr>
                    
                </table>
                </div>
                <div className={styles.row}>
                    <div className={styles.status}>
                        <Image src="/img/paid.png" width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image src="/img/bake.png" width={30} height={30} alt="" />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image src="/img/bike.png" width={30} height={30} alt="" />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image src="/img/delivered.png" width={30} height={30} alt="" />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                </div>
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
                        <button disabled className={styles.button}>Paid</button>
                </div>
            </div>
        </div>
    )
}

export default Order