import React from 'react';
import Products from '../products';
import Feedbacks from '../feedbacks'

function provider(props) {
    return (
        <div>
            <Products exporter={props.activeExporter} />
            <Feedbacks activeExporter={props.activeExporter}/>
        </div>
    );
}

export default provider;