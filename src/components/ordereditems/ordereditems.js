import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { increment, decrement, clearPosition } from '../../redux/actions';
import styles from './ordereditems.module.css';


function Ordereditems(props) {
    return (
        <div className={styles.ordereditems}>
            <p> {props.name}:</p>
            <div className={styles.editing}>
                <button className={`${styles.item} ${styles.control_button}`}
                    onClick={() => props.increment(props.id)}>
                        +
                </button>

                <div className={styles.item}
                onClick={qtyHandler}
                >
                       <p> {props.qty} </p>
                </div>     

                <button className={`${styles.item} ${styles.control_button}`}
                    onClick={() => props.decrement(props.id)}>
                        -
                </button>
            </div>

            <div className={styles.summary}>
                <p className={styles.item}> 
                    <b>
                        ${props.qty * props.price} $
                    </b>
                  
                </p>
                <button className={`${styles.item} ${styles.delete_button}`}
                    onClick={() => props.clearPosition(props.id)}>
                    Х
                </button>
            </div>

        </div>
    );
}

const qtyHandler = (event) => {
    
    console.log(event);
    // event.target.contenteditable="true";
    // contenteditable="true | false"
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
