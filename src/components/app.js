import 'normalize.css';
import React, { Component } from 'react';
import Exporters from './exporters';
import OrderBox from './orderbox';
import ExchangeRates from './exchangeRates';
import Loader from './loader';
import { loadExporters } from '../redux/actions';

import {
  usersSelector,
  exportersAlreadyLoadedSelector,
  exportersLoadingSelector,
  exportersLoadedSelector,
  exportersLoadingErrorSelector,
} from '../redux/reducer/selectors';

import styles from '../app.module.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super();

    this.state = { props };
    if (!props.loaded || !props.loading) props.loadExporters();
  }

  render() {
    if (this.props.loading || !this.props.loaded) return <Loader />;
    return (
      <div class="container-xl p-0">
        <div className={`${styles.header_container}`}>
          <div className={styles.header}>
            <div className={styles.name}>
              <h1>Сustoms Сlearance Сalculator</h1>
            </div>
            <ExchangeRates />
          </div>
        </div>

        <Route path="/orderDetail" component={OrderBox}></Route>
        <Route path="/" exact component={Exporters}></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exporters: exportersAlreadyLoadedSelector(state),
    users: usersSelector(state),
    loading: exportersLoadingSelector(state),
    loaded: exportersLoadedSelector(state),
    error: exportersLoadingErrorSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadExporters: () => dispatch(loadExporters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
