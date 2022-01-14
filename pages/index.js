import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList';
export default function Home() {
  return (
    
    <div className={styles.container}>
    

        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza in Sopetran" />
        <link rel="icon" href="/favicon.ico" />
      <Featured/>
      <PizzaList/>
      </div>
  );
}
