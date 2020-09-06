import React from 'react';
import counter from '../../hocs/counter';

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

export default counter(ImportedItems);
