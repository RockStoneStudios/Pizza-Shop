import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className = {styles.item}>
                <Image src= "/img/bg.png" layout='fill'/>
            </div>
            <div className = {styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                   <p className={styles.text}>
                       Crr 9 clla 10A 
                       <br/> Sopetran Antioquia
                       <br/> 854 17-90
                   </p>
                   <p className={styles.text}>
                       Crr 9 clla 10A 
                       <br/> Sanjeronimo Antioquia
                       <br/> 854 17-90
                   </p>
                   <p className={styles.text}>
                       Crr 9 clla 10A 
                       <br/> Santa fe de Antioquia
                       <br/> 854 17-90
                   </p>
                   <p className={styles.text}>
                       Crr 9 clla 10A 
                       <br/> Liborina Antioquia
                       <br/> 854 17-90
                   </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br/> 9:00 -22:00
                    </p>
                    <p className={styles.text}>
                         SATURDAY - SUNDAY
                        <br/> 13:00 -23:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
