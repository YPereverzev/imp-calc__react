import React, { useEffect, useReducer, useState } from 'react';
import styles from './search.module.css';
import SearchedImporters from '../searchedimporters';
import SearchIcon from './icon/search.svg';
import { 
  exportersAlreadyLoadedSelector,
  exportersLoadedSelector,
} from '../../../redux/reducer/selectors'
import { connect } from 'react-redux';

const Search = ({ onImporterClick, exporters }) => {
  const [searchName, setSearchName] = useState('')

  return (
    <div className={styles.search}>
      <div className={styles.search_container} >
        <img
          className={`${styles.search_logo}  ${styles.SearchIcon}`}
          alt="поиск"
          src={SearchIcon}
        ></img>

        <input
          className={styles.search_field}
          id="search"
          placeholder="найти поставщика"
          onChange={(event)=> setSearchName(event.currentTarget.value)}
          autocomplete="off"
        ></input>
      </div>
      <SearchedImporters searchName={searchName} exporters={exporters} onImporterClick={onImporterClick} />
    </div>
  );
};

const mapStateToProps = (state) => ({
    exporters: exportersAlreadyLoadedSelector(state),
    loaded: exportersLoadedSelector(state),
});

export default connect(mapStateToProps)(Search);
