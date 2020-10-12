import React, {useState, useMemo} from 'react';
import Navigation from '../navigation';
import Exporter from '../exporter';
import PropTypes from 'prop-types';
import styles from './exporters.module.css';
import { connect } from 'react-redux';
import { importItemsServiceSelector , usersSelector } from '../../redux/reducer/selectors';

function Exporters (props) {
    const [activeExporterId, setActiveExporter] = useState(props.exporters[0].id);
    const activeExporter = useMemo (
        () =>
            props.exporters.find(
                (exporter) => activeExporterId === exporter.id
        ),
        [activeExporterId, props.exporters])

    return (
    <div className={styles.exporters}>
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

const mapDispatchToProps = (state) =>({
    exporters: importItemsServiceSelector(state),
    users: usersSelector(state)
})
export default connect(mapDispatchToProps)(Exporters);