import React, { useState } from 'react';
import Products from '../products';
import Feedbacks from '../feedbacks'
import PropTypes from "prop-types";
import Choice from '../choice';
import styles from './exporter.module.css';
import { activeExporterSelector } from '../../redux/reducer/selectors';
import { connect } from 'react-redux';



function Exporter(props) {
    // debugger;
    const [selectedСomponent, setSelectedСomponent] = useState('Products');

    if (selectedСomponent === 'Products') {
        return (
            <div className={styles.exporter}>
                
                <div className={styles.exporter_name}>
                    <h2>{props.activeExporter.exporterName}</h2>
                </div>
                <Choice setComponent={setSelectedСomponent}/>
                <Products exporter={props.activeExporter} />
            </div>
        );    
    } else { 
        return (
            <div className={styles.exporter}>
                <div className={styles.exporter_name}>
                    <h2>{props.activeExporter.exporterName}</h2>
                </div>
                
                <Choice setComponent={setSelectedСomponent}/>
                <Feedbacks activeExporter={props.activeExporter}/>
            </div>
        );    
    }
    
}

Exporter.propTypes = {
    activeExporter: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        activeExporter: activeExporterSelector(state, ownProps.activeExporterId)
    }
}

export default connect(mapStateToProps)(Exporter);