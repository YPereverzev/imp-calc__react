import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
// import { decrement, increment } from '../../redux/actions';
import styles from './Importeditems.module.css';
import Ordereditems from '../ordereditems';

function ImportedItems (props) {
    // debugger;
    return (
        <div className={styles.importedItems}
        data-test-id="ImportedItems">
            <Ordereditems 
            item = {props.item}
            qty = {props.order}
            />

            <div className={styles.volume_weight_container}>

            <div className={styles.volume}>
                <p>Объем:{props.item.volumePerPc} м3/шт </p>
                <p><b>Итого :{(props.item.volumePerPc*props.order).toFixed(1)} м3</b></p>
            </div>
            <div className={styles.space}></div>
            <div className={styles.weight}>
                <p>Вес:{props.item.weightPerPc} кг/шт </p>
                <p><b>Итого :{(props.item.weightPerPc*props.order).toFixed(1)}* кг</b></p>
            </div>
            </div>
            <div className={styles.state_regulation}>
                Тарифное и нетарифное регуллирование: <br/>
                <p> КОД УКТВЭД: 
                    <a href={props.item.customs_code.codeHref} target="_blank"> 
                        {props.item.customs_code.code} 
                    </a>
                </p>
                <p>Пошлина: {props.item.duty.toString()} %</p>
                <p>НДС: {props.item.vat.toString()} %</p>
            </div>
            <p> Сумма: {props.order*props.item.pricePerPc} USD</p>  
        </div>
    );
}

ImportedItems.propType = {
    item: PropTypes.shape({
        nameOfPc: PropTypes.string.isRequired,
        pricePerPc: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }).isRequired
} 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: (id) => dispatch(increment(id)),
//         decrement: (id) => dispatch(decrement(id))
//     }
// }

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return{
        item : state.products.entities[ownProps.id],
        order: state.order[ownProps.id] || 0,
    };
}

export default connect(mapStateToProps)(ImportedItems);