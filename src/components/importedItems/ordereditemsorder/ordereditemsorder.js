import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { increment, decrement, clearPosition } from '../../../redux/actions';
import styles from './ordereditems.module.css';
import Plus from './icons/plus.svg';
import Minus from './icons/minus.svg';
import Delete from './icons/delete.svg';
import {
  paymentBeforeTaxes,
  dutyCalc,
  vatCalc,
  paymentPlusTaxes,
  qtyHandler
} from './logics';

function OrdereditemsOrder({ item, qty, increment, decrement, clearPosition }) {
  return (
    <div className={styles.ordereditems}>
      {/* <div className={styles.image}>
                <img src={item.image} alt="image of product"></img>
            </div> */}
      <div className={styles.name}>
        <p> {item.nameOfPc}:</p>
      </div>

      <div className={styles.item}>
        <div className={`${styles.qty}`} onClick={qtyHandler}>
          <div className={styles.qty_wrapper}>
            <p>{qty} </p>
          </div>
          <div className={styles.btn_wrapper}>
            <button className={` ${styles.control_button}`} onClick={() => increment(item.id)}>
              <img src={Plus} alt={'plus'} className={styles.plus} />
            </button>

            <button
              className={`${styles.item} ${styles.control_button}`}
              onClick={() => decrement(item.id)}
            >
              <img src={Minus} alt={'Minus'} className={styles.minus} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <p className={styles.item}>
          <b>${paymentBeforeTaxes(qty, item)} $</b>
        </p>
        <button
          className={`${styles.item} ${styles.delete_button}`}
          onClick={() => clearPosition(item.id)}
        >
          <img src={Delete} alt={'Delete'} className={styles.delete} />
        </button>
      </div>

      <div className={styles.duty}>Пошлина: {dutyCalc(qty, item).toFixed(2)} $</div>

      <div className={styles.vat}>НДС: {vatCalc(qty, item).toFixed(2)} $</div>

      <div className={styles.payment}>
        <b>Итого: ${paymentPlusTaxes(qty, item).toFixed(2)}</b>
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
};

export default connect(null, mapDispatchToProps)(OrdereditemsOrder);
