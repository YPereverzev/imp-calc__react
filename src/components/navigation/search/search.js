import React, { useEffect, useState } from 'react';
import styles from './search.module.css'
import SearchedImporters from '../searchedimporters';
import SearchIcon from './icon/search.svg';

const Search = ( { exporters, onImporterClick } ) => {

    const [filteredImporters, setFilteredImporters] = useState(exporters);
    
    useEffect(() => {
        const search = document.getElementById('search');
        search.addEventListener('change', (event) => {
            searchHandler(event, setFilteredImporters, exporters);
        });
    });
    
    return (
        <div className={styles.search}>
            <div className={styles.search_container}>
                <img className={`${styles.search_logo}  ${styles.SearchIcon}`}
                    alt="поиск"
                    src={SearchIcon}
                ></img>
                
                <input className={styles.search_field} 
                    id="search" 
                    // type="search"   
                    placeholder="найти поставщика"
                >
                </input>    

            </div>
            <SearchedImporters 
                exporters={filteredImporters} 
                onImporterClick={onImporterClick}
                />
        </div>
    );
};

const searchHandler = (event, setFilteredImporters, exporters) => {
    console.log('ищу');
    if (!event) return exporters;

    const filteredExporters = exporters.filter((item) => {
        return item.exporterName.includes(event.target.value);
    })
    return setFilteredImporters((state) => filteredExporters);
}

export default Search;
