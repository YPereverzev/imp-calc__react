import React from 'react';
import { connect } from 'react-redux';

import OrderedItems from '../ordereditems'
import styles from './order-box.module.css';
import { orderBoxSelector } from '../../redux/reducer/selectors';

function OrderBox(props) {
    console.log('render OrderBox');

    return (
        <div className={styles.orderBox}>
            <h2>ORDER</h2>
            {props.orderedItemsForNow.map((item) => {
                const qty = props.order[item.id]

                return <OrderedItems 
                    key = {item.id}
                    id = {item.id}
                    name = {item.nameOfPc}
                    price = {item.pricePerPc}
                    qty = {qty}
                />
            })
        }
            <h3>Итого к оплате: {props.orderedItemsForNow.reduce((sum = 0, item = 0) => 
                    sum + item.pricePerPc * props.order[item.id], 0
                )} {` `}
                долл
            </h3>

        </div>
    )};


export default connect((state) => {
    console.log('connect OrderBox');
     ;

    return {orderedItemsForNow: orderBoxSelector(state),
            order: state.order 
            };
})(OrderBox);