import { useState } from 'react';
import styles from '../styles/OrderDetaild.module.css';

const OrderDetail = ({total,createOrder}) => {
    const [customer,setCustomer] = useState("");
    const [address,setAddress] = useState("");

const handleClick = ()=>{
  createOrder({customer,address,total,method :0});
}


  return (
  <div className={styles.container}>
      <div className={styles.wrapper}>
          <h1 className={styles.title}>You will pay $12 after delivery</h1>
          <div className={styles.item}>
              <label className={styles.label}>Name Surname</label>
              <input placeholder="John Doe" type= "text" className={styles.input} onChange ={(e)=> setCustomer(e.target.value)}/> 
          </div>
          <div className={styles.item}>
              <label className={styles.label}>Phone</label>
              <input placeholder="John Doe" type= "text" className={styles.input} onChange ={(e)=> setCustomer(e.target.value)}/>
        </div>
          <div className={styles.item}>
              <label className={styles.label}>Address</label>
              <input  placeholder="John Doe" type= "text" className={styles.input} onChange ={(e)=> setAddress(e.target.value)}/>
          </div>
          <button type= 'submit' className={styles.button} onClick={handleClick}>Enviar</button>
      </div>


  </div>
  )
};

export default OrderDetail;
