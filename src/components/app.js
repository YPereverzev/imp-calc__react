import 'normalize.css';
import React, { Component } from 'react';
import Exporters from './exporters';
import OrderBox from './orderbox';
import Loader from './loader';
import Header from '../components/header';

import { loadExporters } from '../redux/actions';

import {
  usersSelector,
  exportersAlreadyLoadedSelector,
  exportersLoadingSelector,
  exportersLoadedSelector,
  exportersLoadingErrorSelector,
} from '../redux/reducer/selectors';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { styles } from '../app.module.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = { props };
    if (!props.loaded || !props.loading) props.loadExporters();
  }

  render() {
    if (this.props.loading || !this.props.loaded) return <Loader />;
    return (
      <div className={`container-xl p-0 `}>
        <Header />

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
