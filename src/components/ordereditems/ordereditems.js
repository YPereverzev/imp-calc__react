import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { increment, decrement, clearPosition } from '../../redux/actions';


function Ordereditems(props) {
    if (Object.keys(props.order).length == 0)  {
        return <p>Сделайте заказ</p>
    }
    
    return (
        <div>
            <p>Название: {props.name}, id: {props.id}</p>
            <p>Кличество {props.qty} шт </p>
            <b><p>ИТОГО: {props.qty * props.price} шт </p> </b>
            <button onClick={() => props.increment(props.id)}>+</button>
            <button onClick={() => props.decrement(props.id)}>-</button>
            <button onClick={() => props.clearPosition(props.id)}>Х</button>

        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        increment: (id) => dispatch(increment(id)),
        decrement: (id) => dispatch(decrement(id)),
        clearPosition: (id) => dispatch(clearPosition(id)),
    };
}

const mapStateToProps = (state) => {
    return {
        order : state.order
        // importItems: state.importItems
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordereditems);
