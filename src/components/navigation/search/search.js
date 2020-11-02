import React, { useEffect, useState } from 'react';
import styles from './search.module.css'
import SearchedImporters from '../searchedimporters'

const Search = ( { products, onImporterClick } ) => {

    const [filteredImporters, setFilteredImporters] = useState(products);
    
    useEffect(() => {
        const search = document.getElementById('search');
        search.addEventListener('change', (event) => {
            searchHandler(event, setFilteredImporters, products);
        });
    });
    
    return (
        <div className={styles.search}>
            <div className={styles.search_container}>
                <img className={styles.search_logo}
                    alt="поиск"
                    src="https://cdn.icon-icons.com/icons2/1660/PNG/512/3844467-magnifier-search-zoom_110341.png"
                ></img>
                
                <input className={styles.search_field} 
                    id="search" 
                    // type="search"
                    placeholder="найти поставщика"
                >
                </input>    

            </div>
            <SearchedImporters 
                products={filteredImporters} 
                onImporterClick={onImporterClick}
                />
        </div>
    );
};

const searchHandler = (event, setFilteredImporters, products) => {
    console.log('ищу');
    if (!event) return products;

    const filteredProducts = products.filter((item) => {
        return item.exporterName.includes(event.target.value);
    })
    return setFilteredImporters((state) => filteredProducts);
}

export default Search;
