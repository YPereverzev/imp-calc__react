import React from 'react';
import PropTypes, { arrayOf } from "prop-types";

function Navigation(props) {
    return (
        <div>
             {
                 props.products.map((item) => {
                // debugger;
                 console.log(item);
                    return (
                        <div key={item.id}>
                            <button className="Exporters__exporter-select-button"
                                onClick={() => props.onImporterClick(item.id)}
                            > 
                                exporterName : {item.exporterName}
                            </button>
                        </div>)
                })} 

        </div>
    );
}

Navigation.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}
 

export default Navigation;