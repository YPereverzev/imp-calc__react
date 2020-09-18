import React from 'react';
// import counter from '../../hocs/counter';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';

function ImportedItems (props) {
    const amount = props.order;

    return (
        <div data-test-id="ImportedItems">
            <p>nameOfPc {props.item.nameOfPc}</p>
            <p>pricePerPc {props.item.pricePerPc} usd</p>
            <button onClick={() => props.increment(props.item.id)}>+</button> 
            <button onClick={() => props.decrement(props.item.id)}>-</button>
            <p> amount: {amount} </p>  
            <p>_______________________________________________</p>   
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

const mapStateToProps = (state, ownProps) => ({
    order : state.order[ownProps.item.id] || 0
});


export default connect(mapStateToProps, mapDispatchToProps)(ImportedItems);