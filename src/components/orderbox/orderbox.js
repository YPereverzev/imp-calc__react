import React from 'react';
import { connect } from 'react-redux';

import OrderedItems from '../ordereditems'
import styles from './order-box.module.css';
import { orderBoxSelector } from '../../redux/reducer/selectors';

function OrderBox(props) {
    
    if (Object.keys(props.order).length === 0)  {
        return (<div className={styles.orderBox}>
            <h2>ЗАКАЗ пуст</h2>
        </div>) 
    }

    return (
        <div className={styles.orderBox}>
            <div>
                <h2>ЗАКАЗ</h2>
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
                <div className={styles.summary}>
                    <h3>Итого к оплате: {props.orderedItemsForNow.reduce((sum = 0, item = 0) => 
                            sum + item.pricePerPc * props.order[item.id], 0
                        )} {` `}
                        долл
                    </h3>

                </div>

            </div>

        </div>
    )};


export default connect((state) => {
    console.log('connect OrderBox');
     ;

    return {orderedItemsForNow: orderBoxSelector(state),
            order: state.order 
            };
})(OrderBox);