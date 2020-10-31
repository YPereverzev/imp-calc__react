
import 'normalize.css';
import React, { Component } from 'react';
import Exporters from './exporters';
import OrderBox from './orderbox';
import ExchangeRates from './exchangeRates';

import styles from '../app.module.css';


const log = console.log.bind(console);


class App extends Component {
    constructor() {
        super();
        this.state = {value : 11};
    }

    componentDidMount() {
        log('componentDidMounted')
    }

    componentDidUpdate() {
        log('componentDidUpdate');
    }

    render() {
        
        return (
            
            <div >
                <div className={styles.name}>
                    <h1 >
                        Import calc 
                    </h1>

                    <ExchangeRates />
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

export default App;  