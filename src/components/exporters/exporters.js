import React, {useState, useMemo} from 'react';
import Navigation from '../navigation';
import Exporter from '../exporter';
import PropTypes from 'prop-types';
import styles from './exporters.module.css';

function Exporters (props) {
    const [activeExporterId, setActiveExporter] = useState(props.exporters[0].id)
    const activeExporter = useMemo (
        () =>
            props.exporters.find(
                (exporter) => activeExporterId === exporter.id
        ),
        [activeExporterId, props.exporters])
    return (
        
        <div className={styles.exporters}>
            {/* <p>{props.exporters}</p> */}
            <Navigation 
                products={props.exporters}
                onImporterClick={setActiveExporter}
            />
            <Exporter activeExporter={activeExporter}/>
            
        </div>
    );
};

Exporters.propTypes = {
        exporters: PropTypes.arrayOf(PropTypes.shape({
            exporterName: PropTypes.string.isRequired
        })).isRequired
    };

export default Exporters;