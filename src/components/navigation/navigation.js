import React from 'react';
import PropTypes from "prop-types";
import styles from './navigation.module.css';


function Navigation(props) {
    return (
        <div className={styles.navigation}>
             {
                 props.products.map((item) => {
                 ;
                 console.log(item);
                    return (
                        <div key={item.id}>
                            <button className="Exporters__exporter-select-button"
                                onClick={() => props.onImporterClick(item.id)}
                            > 
                                exporterName : {item.exporterName}
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