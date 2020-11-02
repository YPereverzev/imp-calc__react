import React from 'react';
import PropTypes from 'prop-types';
import ImportedItems from '../importedItems';
// import { exporterSelector } from '../../redux/actions';

export default function Products (props){
    debugger;
    // if (props.loading || !props.loaded) return <Loader />

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

// const mapStateToProps = (state, ownProps) => {
//     return {
//         exporter: exporterSelector()
//     }
// }

// connect(mapStateToProps)(Products);

Products.propTypes = {
    exporter: PropTypes.shape({
        id: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};

