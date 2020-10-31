import React, { useState } from 'react';
import Products from '../products';
import Feedbacks from '../feedbacks'
import PropTypes from "prop-types";
import Choice from '../choice';
import styles from './exporter.module.css';



function Exporter(props) {
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
    } else { //then only 'Feedbacks'
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

export default Exporter;