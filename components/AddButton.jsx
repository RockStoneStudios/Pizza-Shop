import styles from '../styles/Add.module.css'

export const AddButton = ({setClose}) => {
  return (
  <div onClick={()=>setClose(false)} className={styles.mainAddButton}>
      Add new Pizza

  </div>
  )
  
};
