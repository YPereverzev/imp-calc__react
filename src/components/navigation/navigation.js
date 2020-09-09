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
                            <button className="Exporters__provider-select-button"
                                onClick={() => props.onImporterClick(item.id)}
                            > 
                                providerName : {item.providerName}
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