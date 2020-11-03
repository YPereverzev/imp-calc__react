import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImportedItems from '../importedItems';
import Loader from '../loader';
import {
    producstLoading,
    producstLoaded,
    pruductsLoadingError,
    productsAlreadyLoadedSelector,
} from '../../redux/reducer/selectors';

// import { exporterSelector } from '../../redux/actions';
import { loadProducts } from '../../redux/actions';
import { connect } from 'react-redux';

function Products (props){

    useEffect(() => {
        if (!props.loaded) loadProducts()
    }, []) //eslint-disable-line
    // debugger;
    if (props.loading || !props.loaded) return <Loader />

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

const mapStateToProps = (state) => {
    return {
        products: productsAlreadyLoadedSelector(state),
        loading: producstLoading(state),
        loaded: producstLoaded(state),
        error: pruductsLoadingError(state),
    }
}

export default connect(mapStateToProps, {loadProducts})(Products);

Products.propTypes = {
    exporter: PropTypes.shape({
        id: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};

