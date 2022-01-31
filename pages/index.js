import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList';
export default function Home({pizzaList}) {
  return (
    
    <div className={styles.container}>
   
          
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza in Sopetran" />
        <link rel="icon" href="/favicon.ico" />
      <Featured/>
      <PizzaList pizzaList ={pizzaList}/>
      </div>
  );
}


export const getServerSideProps = async () =>{
   const res = await axios.get("http://localhost:3000/api/products")
   return {
     props :{
        pizzaList : res.data
     }
   }
}