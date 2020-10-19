import React from 'react';
import styles from './choice.module.css';


function Choice(props) {
     
    return (
        <div className={styles.choice} >
            <button onClick={() => props.setComponent('Products')}>Products</button>
            <button onClick={() => props.setComponent('Feedbacks')}>Feedbacks</button>
        </div>
    );
}

export default Choice;