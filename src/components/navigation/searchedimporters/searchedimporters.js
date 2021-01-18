import React, { useState } from 'react';
import styles from './searchedimporters.module.css';
import Loader from '../../loader';

const SearchedImporters = ({exporters, onImporterClick, searchName }) => {

  return (
    <div data-test="SearchedImporters">

      <div className={styles.searchedImporters} >
        <form className={styles.searchedImporters_form} method="post">
          <select
            className="custom-select"
            multiple
            name="serchedImporters"
          >
            {exporters.filter((item) => {
              return item.exporterName.toLowerCase().includes(searchName.toLowerCase());
            })
            .map((item) => {
              return (
                <option key={item.id} onClick={() => onImporterClick(item.id)}>
                  {item.exporterName}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default SearchedImporters;
