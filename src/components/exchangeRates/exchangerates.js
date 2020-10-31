import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './exchangerates.module.css';
import { exchangeRatesSelector } from '../../redux/reducer/selectors';

import { loadExchangeRates } from '../../redux/actions';

const ExchangeRates = ({ loadExchangeRates, exchangeRates } ) => {
    console.log('exchangeRates', exchangeRates);
    
    useEffect(() => {
        loadExchangeRates();
    }, []);//eslint-disable-line
    
    if (!exchangeRates[0]) 
    return (<div className={styles.exchangeRates}>
        <p className={styles.usd} id='usd_value'>
            loading...
        </p>
        <p className={styles.usd} id='eur_value'>
            loading...
        </p>
    </div>)
    // debugger;
    return (
        <div className={styles.exchangeRates}>
            
            <p className={styles.usd} id='usd_value'>
                {Number(exchangeRates[0].sale).toFixed(3) + ` USD`}
            </p>
            <p className={styles.usd} id='eur_value'>
                {Number(exchangeRates[1].sale).toFixed(3) + ` EUR`}
            </p>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    debugger;
    return {
        exchangeRates: exchangeRatesSelector(state)
    };

}

export default connect(mapStateToProps, { loadExchangeRates } )(ExchangeRates);
