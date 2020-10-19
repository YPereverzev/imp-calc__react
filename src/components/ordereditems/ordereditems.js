import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { increment, decrement, clearPosition } from '../../redux/actions';
import styles from './ordereditems.module.css';


function Ordereditems(props) {
    if (Object.keys(props.order).length === 0)  {
        return <p>Сделайте заказ</p>
    }
    
    return (
        <div className={styles.ordereditems}>
            <p> {props.name}:</p>
            <div className={styles.editing}>
                <button className={styles.item} 
                    onClick={() => props.increment(props.id)}>
                        +
                </button>
                <p className={styles.item}>{props.qty} </p>
                <button className={styles.item} 
                    onClick={() => props.decrement(props.id)}>
                        -
                </button>
            </div>

            <div>
                <b className={styles.item}>
                    <p>
                        $ {props.qty * props.price} 
                    </p> 
                </b>
                <button className={styles.item}
                    onClick={() => props.clearPosition(props.id)}>
                    Х
                </button>
            </div>

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
