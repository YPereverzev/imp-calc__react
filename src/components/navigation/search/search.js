import React, { useEffect, useState } from 'react';
import styles from './search.module.css'
import SearchedImporters from '../searchedimporters'

const Search = ( { products, onImporterClick } ) => {

    const [filteredImporters, setFilteredImporters] = useState(products);
    
    useEffect(() => {
        const search = document.getElementById('search');
        // debugger;
        console.log(search);
        search.addEventListener('change', (event) => {
            debugger;
            console.log(event.target.value);
            searchHandler(event, setFilteredImporters, products);
        });
    });
    

    debugger;
    return (
        <div>
            <input 
                className={styles.search} 
                id="search" 
                type="text"
                placeholder="ПОИСК"
            ></input>
            <SearchedImporters 
                products={filteredImporters} 
                onImporterClick={onImporterClick}
                />
        </div>
    );
};

const searchHandler = (event, setFilteredImporters, products) => {
    console.log('ищу');
    debugger;
    if (!event) return products;

    const filteredProducts = products.filter((item) => {
        return item.exporterName.includes(event.target.value);
    })
    return setFilteredImporters((state) => filteredProducts);
}

export default Search;
