import React, {useState, useMemo} from 'react';
import Navigation from '../navigation';
import Provider from '../provider';
import PropTypes from 'prop-types';

function Exporters (props) {
    const [activeExporterId, setActiveExporter] = useState(props.exporters[0].id)
    const activeExporter = useMemo (
        () =>
            props.exporters.find(
                (exporter) => activeExporterId === exporter.id
        ),
        [activeExporterId, props.exporters])
    return (
        <div>
            {/* <p>{props.exporters}</p> */}
            <Navigation 
                products={props.exporters}
                onImporterClick={setActiveExporter}
            />
            <Provider activeExporter={activeExporter}/>
            
        </div>
    );
};

Exporters.propTypes = {
        exporters: PropTypes.arrayOf(PropTypes.shape({
            providerName: PropTypes.string.isRequired
        })).isRequired
    };

export default Exporters;