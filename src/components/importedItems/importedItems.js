import React from 'react';
// import counter from '../../hocs/counter';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';
import styles from './Importeditems.module.css';
import Ordereditems from '../ordereditems';

function ImportedItems (props) {
    const amount = props.order;
    
    return (
        <div className={styles.importedItems}
        data-test-id="ImportedItems">
            <Ordereditems 
            id = {props.item.id}
            name = {props.item.nameOfPc}
            price = {props.item.pricePerPc}
            qty = {amount}
            />

            <div className={styles.volume_weight_container}>

            <div className={styles.volume}>
                <p>Объем:{props.item.volumePerPc} м3/шт </p>
                <p><b>Итого :{(props.item.volumePerPc*amount).toFixed(1)} м3</b></p>
            </div>
            <div className={styles.space}></div>
            <div className={styles.weight}>
                <p>Вес:{props.item.weightPerPc} кг/шт </p>
                <p><b>Итого :{(props.item.weightPerPc*amount).toFixed(1)}* кг</b></p>
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
            <p> Сумма: {amount*props.item.pricePerPc} USD</p>  
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

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (id) => dispatch(increment(id)),
        decrement: (id) => dispatch(decrement(id))

    }
}


//я получил id продукта вместо продукта
const mapStateToProps = (state, ownProps) => {
    return{
        item : state.products[ownProps.id],
        order: state.order[ownProps.id] || 0,
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(ImportedItems);