import React, { useState } from 'react';
import Products from '../products';
import Feedbacks from '../feedbacks'
import PropTypes from "prop-types";
import Choice from '../choice';
import styles from './exporter.module.css';
import { activeExporterSelector } from '../../redux/reducer/selectors';
import { connect } from 'react-redux';



function Exporter(props) {
    
    const [selectedСomponent, setSelectedСomponent] = useState('Products');

    return (
        <div>
            <div className={styles.exporter}>
                
                <div className={styles.exporter_name}>
                    <h2>{props.activeExporter.exporterName}</h2>
                </div>
                <Choice setComponent={setSelectedСomponent}/>
                {(() => {
                    switch (selectedСomponent) {
                        case 'Products':
                            return <Products exporter={props.activeExporter} />
                    
                        case 'Feedbacks':
                            return <Feedbacks activeExporter={props.activeExporter}/>

                        case 'AddProduct':
                            return 'DONE!'
                        default:
                            break;
                    }
                }) ()}
            </div>
        </div>
    );    
    
}

Exporter.propTypes = {
    activeExporter: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        activeExporter: activeExporterSelector(state, ownProps.activeExporterId)
    }
}

export default connect(mapStateToProps)(Exporter);