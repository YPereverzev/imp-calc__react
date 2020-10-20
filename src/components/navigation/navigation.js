import React from 'react';
import PropTypes from "prop-types";
import styles from './navigation.module.css';


function Navigation(props) {
    return (
        <div className={styles.navigation}>
            <p>
                Поставщики:
            </p>
             {
                 props.products.map((item) => {
                 console.log(item);
                    return (
                        <div  className={styles.wrapper} key={item.id}>
                            <button className={styles.nav_button} 
                                onClick={() => props.onImporterClick(item.id)}
                            > 
                                {item.exporterName}
                            </button>
                        </div>)
                })} 

        </div>
    );
}

Navigation.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}
 

export default Navigation;