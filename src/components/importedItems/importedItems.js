import React from 'react';
// import counter from '../../hocs/counter';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';
import styles from './Importeditems.module.css';

function ImportedItems (props) {
    const amount = props.order;

    return (
        <div className={styles.importedItems}
        data-test-id="ImportedItems">
            <p>{props.item.nameOfPc}</p>
            <p> {props.item.pricePerPc} $</p>
            <button onClick={() => props.increment(props.item.id)}>+</button> 
            <button onClick={() => props.decrement(props.item.id)}>-</button>
            <p> amount: {amount} </p>  
        </div>
    );
}

ImportedItems.propType = {
    item: PropTypes.shape({
        nameOfPc: PropTypes.string.isRequired,
        pricePerPc: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }).isRequired
} 

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (id) => dispatch(increment(id)),
        decrement: (id) => dispatch(decrement(id))

    }
}


//я получил id продукта вместо продукта
const mapStateToProps = (state, ownProps) => {
    return{
        item : state.products[ownProps.id],
        order: state.order[ownProps.id] || 0,
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(ImportedItems);