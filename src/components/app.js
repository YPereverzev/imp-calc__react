import React, { Component } from 'react';
import Exporters from './exporters';
import { ImportItemsService } from '../fixtures';
import OrderBox from './orderbox';

const log = console.log.bind(console);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value : 11};
    }

    // state = {value : 1};
    componentDidMount() {
        log('componentDidMountED')
    }

    componentDidUpdate() {
        log('componentDidUpdate');
    }

    render() {
        
        return (
            
            <div>
                <h1> Import calc</h1>
                {/* <Header /> */}
                
                <Exporters />
                
                <OrderBox />
            </div>
        );
    }
}

export default App;  