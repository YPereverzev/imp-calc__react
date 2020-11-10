import React from 'react';
import styles from './searchedimporters.module.css';
import Loader from '../../loader';

const SearchedImporters = (props) => {
    if (!props.exporters[0]) return <Loader />

    return (
        <div>
            <div  className={styles.searchedImporters} >
                <form  className={styles.searchedImporters_form}
                    method="post"
                >
                        <select 
                        class="custom-select"
                        // size="4" 
                        multiple 
                        name="serchedImporters"
                        // autocomplete="off"
                        >
                        {props.exporters.map((item) => {
                            // debugger;
                            console.log(item);
                                return (
                                    <option 
                                        key={item.id} 
                                        onClick={() => props.onImporterClick(item.id )}>
                                            {item.exporterName}
                                    </option>

                                )
                        })} 

                        </select>
                </form>
                </div>      
        </div>
    );
};

export default SearchedImporters;        
