import React, {useState, useMemo} from 'react';
import Navigation from '../navigation';
import Provider from '../provider'
// console.log(ImportItemsService);

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
            <Navigation 
                products={props.exporters}
                onImporterClick={setActiveExporter}
            />
            <Provider activeExporter={activeExporter}/>
            
        </div>
    );
};

export default Exporters;