import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { increment, decrement, clearPosition } from '../../redux/actions';
import styles from './ordereditems.module.css';


function Ordereditems({item, qty, increment, decrement}) {
    // debugger;
    return (
        <div className={styles.ordereditems}>
            <p> {item.nameOfPc}:</p>
            <div className={styles.editing}>
                <button className={`${styles.item} ${styles.control_button}`}
                    onClick={() => increment(item.id)}>
                        +
                </button>

                <div className={`${styles.item} + ${styles.qty}`}
                onClick={qtyHandler}
                >
                       <p> {qty} </p>
                </div>     

                <button className={`${styles.item} ${styles.control_button}`}
                    onClick={() => decrement(item.id)}>
                        -
                </button>
            </div>

            <div className={styles.summary}>
                <p className={styles.item}> 
                    <b>
                        ${qty * item.pricePerPc} $
                    </b>
                  
                </p>
                <button className={`${styles.item} ${styles.delete_button}`}
                    onClick={() => clearPosition(item.id)}>
                    Х
                </button>
            </div>

            <div className={styles.duty}>
                Пошлина: ${dutyCalc(qty, item).toFixed(2)} $
            </div>

            <div className={styles.vat}>
                НДС: ${vatCalc(qty, item).toFixed(2)} $
            </div>

            <div className={styles.payment}>
            </div>
            
                <p className={styles.item}> 
                    <b>
                    </b>
                  
                </p>
             

        </div>
    );
}

const paymentBeforeTaxes = (qty, item) => {
    return qty * item.pricePerPc
}

const dutyCalc = (qty, item) => {
    // debugger;
    return qty * item.pricePerPc * item.duty / 100
}

const vatCalc = (qty, item) => {
    // debugger;
    return (dutyCalc(qty, item) + paymentBeforeTaxes(qty, item)) * (item.vat / 100)
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

// const mapStateToProps = (state) => {
//     return {
//         order : state.order
//         // importItems: state.importItems
//     }
// };

export default connect(null, mapDispatchToProps)(Ordereditems);
