import React, { Component } from 'react';
import Exporters from './exporters';
import ImportItemsService from '../fixtures'

const log = console.log.bind(console);


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {value : 11}
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
                {/* <Order /> */}
                <Exporters exporters={ImportItemsService}/>
                <h1> {this.state.value}</h1>
                <button onClick={() => this.setState({value : this.state.value + 1 })}> MyButton2 </button>
            </div>
        );
    }
}

export default App;  