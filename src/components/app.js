
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
    exportersLoadingErrorSelector
} from '../redux/reducer/selectors';

import styles from '../app.module.css';
import { connect } from 'react-redux';

const log = console.log.bind(console);

class App extends Component {
    constructor(props) {
        super();
        // debugger;
        this.state = {props};
        if (!props.loaded || !props.loading) props.loadExporters();
    }
    
    componentDidMount() {
        log('componentDidMounted');
    }
    
    componentDidUpdate() {
        log('componentDidUpdate');
    }
    
    render() {
        if (this.props.loading || !this.props.loaded) return <Loader />
        return (
            
            <div >
                <div className={styles.header_container}>

                    <div className={styles.header}>
                        
                        <div className={styles.name}>
                            <h1 >
                                Import calc 
                            </h1>
                        </div>
                            <ExchangeRates />
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <Exporters />
                        <OrderBox />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        exporters:  exportersAlreadyLoadedSelector(state),
        users: usersSelector(state),
        loading: exportersLoadingSelector(state),
        loaded: exportersLoadedSelector(state),
        error: exportersLoadingErrorSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadExporters: () => dispatch(loadExporters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);  