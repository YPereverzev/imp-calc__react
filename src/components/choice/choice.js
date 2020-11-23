import React from 'react';
import styles from './choice.module.css';

function Choice(props) {
  return (
    <div className={styles.choice}>
      <button className={styles.button} onClick={() => props.setComponent('Products')}>
        Товары
      </button>

      <button className={styles.button} onClick={() => props.setComponent('AddProduct')}>
        Добавить товар
      </button>

      <button className={styles.button} onClick={() => props.setComponent('AddExporter')}>
        Добавить экпортера
      </button>

      <button title='в разработке' className={styles.button} onClick={() => props.setComponent('Feedbacks')}>
        Фидбек
      </button>

    </div>
  );
}

export default Choice;
