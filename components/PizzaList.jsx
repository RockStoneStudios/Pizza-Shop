
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard'
const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
             <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex accusamus, animi eveniet amet est! Exercitationem dicta placeat deleniti corporis architecto! Ea illum aut ut? Aperiam nihil inventore quae amet, optio, deserunt maxime numquam sit eius accusantium dolorem, non eum.</p>
        <div className={styles.wrapper}>
         <PizzaCard/>
         <PizzaCard/>
         <PizzaCard/>
         <PizzaCard/>
         <PizzaCard/>
         <PizzaCard/>
         <PizzaCard/>
         <PizzaCard/>

        </div>
        </div>
    )
}

export default PizzaList
