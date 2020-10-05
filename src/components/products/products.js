import React from 'react';
import PropTypes from 'prop-types';
import ImportedItems from '../importedItems';

export default function Products (props){
    // debugger;
    return (
            <div>
                {props.exporter.products.map(id => {
                    return (
                        <div key={id}>
                            <ImportedItems id={id} />
                            
                        </div>
                    )
                })}
            </div>
        );
    
}

Products.propTypes = {
    exporter: PropTypes.shape({
        id: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.object).isRequired
    })
};

