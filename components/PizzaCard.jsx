import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image';


const PizzaCard = () => {
    return (
        <div className= {styles.container}>
          <Image src="/img/pizza.png" alt="" width = "500" height= "500" />
          <h1 className={styles.title}>PIZZA HAWAINA</h1>
          <span clasName={styles.price}>$19.90</span>
          <p className={styles.desc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, hic.
          </p>
        </div>
    )
}

export default PizzaCard