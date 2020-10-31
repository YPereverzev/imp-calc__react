import React from 'react';
import styles from './searchedimporters.module.css';

const SearchedImporters = (props) => {
    
    return (
        <div>
            <div  className={styles.searchedImporters} >
                <form  className={styles.searchedImporters_form}
                    method="post"
                >
                        <select 
                        size="4" 
                        multiple 
                        name="serchedImporters"
                        // autocomplete="off"
                        >
                        {props.products.map((item) => {
                            console.log(item);
                                return (
                                    <option 
                                        className={styles.nav_button}
                                        key={item.id} 
                                        onClick={() => props.onImporterClick(item.id)}>
                                        {item.exporterName}
                                    </option>
                                )
                        })} 

                        </select>
                    <p>
                        {/* <input type="submit" value="Отправить"></input> */}
                    </p>
                </form>
                <p></p>
                </div>      
        </div>
    );
};

export default SearchedImporters;        