
import 'normalize.css';
import React, { Component } from 'react';
import Exporters from './exporters';
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
            
            <div >
                <header>
                    <h1>
                        Import calc 
                    </h1>
                </header>
                
                <Exporters />
                
                <OrderBox />
            </div>
        );
    }
}

export default App;  