import React from 'react';
import styles from './searchedimporters.module.css';

const SearchedImporters = (props) => {
    debugger;
    return (
        <div>
            <div  className={styles.searchedImporters} >
                <form  method="post">
                    <p>
                        <select size="3" multiple name="serchedImporters">
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

                        </select>
                    </p>
                <p><input type="submit" value="Отправить"></input></p>
                </form>
                <p></p>
                </div>      
        </div>
    );
};

export default SearchedImporters;        