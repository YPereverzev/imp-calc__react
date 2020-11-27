import React from 'react';
import styles from './choice.module.css';


type ChoiceProps = {
  setComponent: (setComponent: string) => string;
}


const Choice: React.FC<ChoiceProps> = ({ setComponent }) => {
  debugger
  return (
    <div className={styles.choice}>
      <button className={styles.button} onClick={() =>  setComponent('Products')}>
        Товары
      </button>

      <button className={styles.button} onClick={() => setComponent('AddProduct')}>
        Добавить товар
      </button>

      <button className={styles.button} onClick={() => setComponent('AddExporter')}>
        Добавить экпортера
      </button>

      <button title='в разработке' className={styles.button} onClick={() => setComponent('Feedbacks')}>
        Фидбек
      </button>

    </div>
  );
}

export default Choice;

