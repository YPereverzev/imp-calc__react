import React from 'react';
import Products from '../products';
import Feedbacks from '../feedbacks'
import PropTypes from "prop-types";

function Exporter(props) {
    return (
        <div>
            <Products exporter={props.activeExporter} />
            <Feedbacks activeExporter={props.activeExporter}/>
        </div>
    );
}

Exporter.propTypes = {
    activeExporter: PropTypes.object.isRequired
}

export default Exporter;