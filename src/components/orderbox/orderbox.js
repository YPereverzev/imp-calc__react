import React from 'react';
import { connect } from 'react-redux';

import OrderedItems from './ordereditems';
import styles from './order-box.module.css';
import { orderBoxSelector } from '../../redux/reducer/selectors';
import { Link } from 'react-router-dom';
import {
  paymentPlusTaxes
} from '../importedItems/ordereditemsorder/logics';



function OrderBox(props) {
  return (
    <div className={styles.container}>
      <div className={styles.orderBox}>
        <div>
          <div className={styles.orderBoxHeader}>
            <div className={styles.orderBoxName}>
              <h3>ЗАКАЗ</h3>
            </div>

            <Link to="/orderDetail">
              <button className={styles.orderDetailBtn}>детали заказа</button>
            </Link>
          </div>
          {Object.keys(props.order).length === 0
            ? ''
            : props.orderedItemsForNow.map((item) => {
                const qty = props.order[item.id];

                return <OrderedItems item={item} qty={qty} />;
              })}
        </div>

        <div className={styles.summary}>
          <h4>
            Итого к оплате:{' '}
            {props.orderedItemsForNow.reduce(
              (sum, item) => sum + paymentPlusTaxes(props.order[item.id], item),
              0,
            ).toFixed(2)}{' '}
            {` `}
            долл
          </h4>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => {
  return { orderedItemsForNow: orderBoxSelector(state), order: state.order };
})(OrderBox);
