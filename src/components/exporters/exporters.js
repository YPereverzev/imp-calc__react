import React, {useState, useMemo, useEffect} from 'react';
import Navigation from '../navigation';
import Exporter from '../exporter';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from  '../loader';
import { 
    allExportersSelector, 
    usersSelector,
    exportersAlreadyLoadedSelector,
    exportersLoadingSelector,
    exportersLoadedSelector,
    exportersLoadingErrorSelector

} from '../../redux/reducer/selectors';

import { loadProducts } from '../../redux/actions';
import styles from './exporters.module.css';

function Exporters (props) {
    
    useEffect(() => {
        // debugger;
        if (!props.loaded) props.loadProducts();
    }, []) //eslint-disable-line

    const [activeExporterId, setActiveExporter] = useState(props.exporters[0].id);
    // debugger;
    
    // const activeExporter = useMemo (
    //    
    // [activeExporterId, props.exporters])
    

    // if (props.loading || !props.loaded) return <Loader />

    
    return (
        <div className={styles.exporters}>
            <Navigation 
                exporters={props.exporters}
                onImporterClick={setActiveExporter}
            />
            <Exporter 
                // activeExporter={activeExporter}
                activeExporterId={activeExporterId}
            />
            
        </div>
        );

        // return (
        //     <div className={styles.exporters}>
        //         <Navigation 
        //             products={props.exporters}
        //             onImporterClick={setActiveExporter}
        //         />
        //         <Exporter activeExporter={activeExporter}/>
                
        //     </div>
        // );


};

Exporters.propTypes = {
        exporters: PropTypes.arrayOf(PropTypes.shape({
            exporterName: PropTypes.string.isRequired
        })).isRequired
    };

const mapStateToProps = (state) =>({
    exporters: allExportersSelector(state),
    

    // exporters:  exportersAlreadyLoadedSelector(state),
    // users: usersSelector(state),
    // loading: exportersLoadingSelector(state),
    // loaded: exportersLoadedSelector(state),
    // error: exportersLoadingErrorSelector(state),

})

const mapDispatchToProps = (dispatch) => {
    // debugger;
 return {
    loadProducts: () => dispatch(loadProducts())
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exporters);