import React from 'react';
import PropTypes from "prop-types";
import styles from './navigation.module.css';
import Search from './search';

function Navigation(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <p>
                    Поставщики:
                </p>
                <Search 
                    exporters={props.exporters} 
                    onImporterClick={props.onImporterClick}
                />
                
            </div>
        </div>
    );
}


Navigation.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}
 

export default Navigation;