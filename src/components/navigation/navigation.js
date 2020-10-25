import React from 'react';
import PropTypes from "prop-types";
import styles from './navigation.module.css';


function Navigation(props) {
    return (
        <div className={styles.navigation}>
            <p>
                Поставщики:
            </p>
            <div  className={styles.wrapper} >
                <form  method="post"><p>
                    <select size="3" multiple name="hero[]">
                    {props.products.map((item) => {
                        console.log(item);
                            return (
                            <option 
                                className={styles.nav_button}
                                key={item.id} onClick={() => props.onImporterClick(item.id)}>
                                    {item.exporterName}
                                </option>
                            )
                    })} 

                    </select></p>
                <p><input type="submit" value="Отправить"></input></p>
                </form>
                <p></p>
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