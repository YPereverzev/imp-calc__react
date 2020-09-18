import React from 'react';
import { connect } from 'react-redux';

import OrderedItems from '../ordereditems'
import styles from './order-box.module.css';


function OrderBox(props) {
    const allSubSums = props.orderedItemsForNow || [];
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
                    qty = {props.order[item.id]}
                />
            })
        }
            <h3>Итого к оплате: {props.orderedItemsForNow.reduce((sum = 0, item = 0) => 
                    sum + item.pricePerPc * props.order[item.id], 0
                )} 
                долл
            </h3>

        </div>
    )};


export default connect((state) => {
    const  allImportedItems = state.importItems.flatMap((item) => item.products);
    const  allOrderedItemsKeys = Object.keys(state.order);
    const keysArr =  allOrderedItemsKeys.filter(key => state.order[key] > 0);

    let orderedItemsForNow = keysArr.map((key) => {
        return allImportedItems.filter((item) => item.id == key)
            // ) && (state.order[key] > 0))
    });

    return {orderedItemsForNow: orderedItemsForNow.flatMap(item => item),
            order: state.order 
            };
})(OrderBox);