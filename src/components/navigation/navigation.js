import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';
import Search from './search';
import Clock from '../clock';

function Navigation(props) {
   
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <p>Поставщики:</p>
        <Search exporters={props.exporters} onImporterClick={props.onImporterClick} />
        <Clock id={'Ukraine'} loacation={`Украина`} timeShift={0}/>
        <Clock id={'USA'} loacation={`США, зап`} timeShift={-5}/>
        <Clock id={'EU'} loacation={`Европа`} timeShift={1}/>
        <Clock id={'China'} loacation={`Китай`} timeShift={6}/>

      </div>
    </div>
  );
}

Navigation.propTypes = {
  exporters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
