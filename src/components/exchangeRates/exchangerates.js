import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './exchangerates.module.scss';
import {
  exchangeRatesSelector,
  exchangeRatesLoaded,
  exchangeRatesLoading,
  exchangeLoadingRatesError,
} from '../../redux/reducer/selectors';

import { loadExchangeRates } from '../../redux/actions';

const ExchangeRates = ({ loadExchangeRates, exchangeRates, loaded, loading, loadingError }) => {
  useEffect(() => {
    if (!loaded) loadExchangeRates();
  }, []); //eslint-disable-line
  if (loading || !loaded)
    return (
      <div className={styles.exchangeRates}>
        <p className={styles.usd} id="usd_value">
          loading...
        </p>
        <p className={styles.usd} id="eur_value">
          loading...
        </p>
      </div>
    );
  //  ;

  return (
    <div className={styles.exchangeRates}>
      <p className={styles.usd} id="usd_value">
        {Number(exchangeRates[0].sale).toFixed(3) + ` USD`}
      </p>
      <p className={styles.usd} id="eur_value">
        {Number(exchangeRates[1].sale).toFixed(3) + ` EUR`}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exchangeRates: exchangeRatesSelector(state),
    loaded: exchangeRatesLoaded(state),
    loading: exchangeRatesLoading(state),
    loadingError: exchangeLoadingRatesError(state),
  };
};

export default connect(mapStateToProps, { loadExchangeRates })(ExchangeRates);
