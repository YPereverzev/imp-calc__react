import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { increment, decrement, clearPosition } from '../../../redux/actions';
import styles from './ordereditems.module.css';

import {
    productsAlreadyLoadedSelector,
    allExportersSelector,
} from '../../../redux/reducer/selectors';

import Plus from './icons/plus.svg';
import Minus from './icons/minus.svg';
import Delete from './icons/delete.svg';


function Ordereditems({item, qty, increment, decrement, clearPosition}) {
    
    return (
        <div className={styles.ordereditems}>
            <div className={styles.name}>
                {item.nameOfPc}:
            </div>
            
            <div className={styles.editing}>
                <div className={`${styles.item} + ${styles.qty}`}
                onClick={qtyHandler}
                >
                    <div className={styles.qty_value}>
                        {qty} 
                    </div>

                    <button className={`${styles.item} ${styles.control_button}`}
                        onClick={() => increment(item.id)}
                        // src={SearchIcon}
                        >
                            <img src={Plus} alt={'plus'} className={styles.plus}/>
                    </button>

                    <button className={`${styles.item} ${styles.control_button}`}
                        onClick={() => decrement(item.id)}>
                             <img src={Minus} alt={'Minus'} className={styles.minus} />
                    </button>
                </div>
                
            </div>

            {/* <div></div> */}
            
            
            <div className={styles.summary}>
                <p className={styles.item}> 
                    <b>
                        {qty * item.pricePerPc} $
                    </b>
                  
                </p>
                <button className={`${styles.item} ${styles.delete_button}`}
                    onClick={() => clearPosition(item.id)}>
                     <img src={Delete} alt={'Delete'} className={styles.delete} />
                </button>
            </div>
            <div className={styles.duty}>
                налоги: {allTaxes(qty, item).toFixed(2)} $
            </div>
            <div></div>
            <div>
                Итого: {(allTaxes(qty, item) + paymentBeforeTaxes(qty, item)).toFixed(2)} $
            </div>


        </div>

        
    );
}

const paymentBeforeTaxes = (qty, item) => {
    return qty * item.pricePerPc
}

const allTaxes = (qty, item) => {
    return dutyCalc(qty, item) + vatCalc(qty, item)
}


const dutyCalc = (qty, item) => {
    
    return qty * item.pricePerPc * item.duty / 100
}

const vatCalc = (qty, item) => {
    
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

const mapStateToProps = (state) => {
    return {
        products: productsAlreadyLoadedSelector(state),
        exporters: allExportersSelector(state),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordereditems);
