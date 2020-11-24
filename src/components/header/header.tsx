import React from 'react';
import ExchangeRates from '../exchangeRates';

import styles from './header.module.css';

const Header: React.FC = () => {
    return (
        <div className={`${styles.header_container}`}>
          <div className={styles.header}>
            <div className={styles.name}>
              <h1>Сustoms Сlearance Сalculator</h1>
            </div>
            <ExchangeRates />
          </div>
        </div>
    );
};

export default Header;