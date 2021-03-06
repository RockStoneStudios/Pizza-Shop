import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList';
import { useState } from 'react';
import { Add } from '../components/Add';
import { AddButton } from '../components/AddButton';

export default function Home({pizzaList, admin}) {
  const [close,setClose] = useState(false);
  return (
    
    <div className={styles.container}>
   
          
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza in Sopetran" />
        <link rel="icon" href="/favicon.ico" />
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList ={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
      </div>
  );
}


export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if(myCookie.token === process.env.TOKEN){
    admin = true
  }
   const res = await axios.get("http://localhost:3000/api/products")
   return {
     props :{
        pizzaList : res.data,
        admin
     }
   }
}