import React, {useState, useMemo, useEffect} from 'react';
import Navigation from '../navigation';
import Exporter from '../exporter';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    allExportersSelector, 
} from '../../redux/reducer/selectors';

import { loadProducts } from '../../redux/actions';
import styles from './exporters.module.css';

function Exporters (props) {
    
    useEffect(() => {
        // debugger;
        if (!props.loaded) props.loadProducts();
    }, []) //eslint-disable-line

    const [activeExporterId, setActiveExporter] = useState(props.exporters[0].id);
    
    return (
        <div className={styles.exporters}>
            <Navigation 
                exporters={props.exporters}
                onImporterClick={setActiveExporter}
            />
            <Exporter 
                activeExporterId={activeExporterId}
            />
        </div>
        );
};

Exporters.propTypes = {
        exporters: PropTypes.arrayOf(PropTypes.shape({
            exporterName: PropTypes.string.isRequired
        })).isRequired
    };

const mapStateToProps = (state) =>({
    exporters: allExportersSelector(state),
})

const mapDispatchToProps = (dispatch) => {
    // debugger;
 return {
    loadProducts: () => dispatch(loadProducts())
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exporters);