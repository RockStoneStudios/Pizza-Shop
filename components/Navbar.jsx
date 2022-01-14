import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
    <div className={styles.container}>
        <div className={styles.item}>
           <div className={styles.callButton}>
             <Image src= "/img/telephone.png" alt= "" width= "32px" height="32px"/>
         </div>
          <div className={styles.texts}>
              <div className= {styles.text}>Order Now</div>
              <div className= {styles.text}>3508436568</div>
          </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <Link href= "/" passHref>

                <li className={styles.listItem}>HomePage</li>
                </Link>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <Image src= "/img/logo.png" alt= "" width= "160px" height="69px"/>
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <Link href= "/cart" as={`/cart`} passHref>

        <div className={styles.item}>
             <div className={styles.cart}>
             <Image src= "/img/cart.png" alt= "" width= "30px" height="30px"/>
              <div className={styles.counter}>2</div>
             </div>
        </div>
        </Link>
      
        </div>
    )
}

export default Navbar
