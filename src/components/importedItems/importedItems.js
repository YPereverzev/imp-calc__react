import React from 'react';
import counter from '../../hocs/counter';
import PropTypes from "prop-types";

function ImportedItems (props) {
    // debugger;
    return (
        <div>
            <p>nameOfPc {props.item.nameOfPc}</p>
            <p>pricePerPc {props.item.pricePerPc} usd</p>
            <button onClick={props.increment}>+</button> 
            qty:  {props.qty}
            <button onClick={props.decrement}>-</button>
            <p>_______________________________________________</p>   
        </div>
    );
}

ImportedItems.propType = {
    item: PropTypes.shape({
        nameOfPc: PropTypes.string.isRequired,
        nameOfPc: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    })
}

export default counter(ImportedItems);
