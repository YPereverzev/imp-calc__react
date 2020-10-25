import React from 'react';
import { connect } from 'react-redux';
import styles from './exchangerates.module.css';

const ExchangeRates = () => {
    return (
        <div className={styles.exchangeRates}>
            
            <button onClick={ratesQuery}>обновить курс</button>
            <p className={styles.usd} id='usd_value'>_</p>
            <p className={styles.usd} id='eur_value'>_</p>

        </div>
    );
};


const ratesQuery = async () => {
    debugger;
    const usdRate = document.getElementById('usd_value');
    const eurRate = document.getElementById('eur_value');
    try {
        const answer = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        let exchangeRates = await answer.json();
        console.log(exchangeRates); 
        usdRate.textContent = Number(exchangeRates[0].sale).toFixed(3) + ` USD`;
        debugger;
        eurRate.textContent = Number(exchangeRates[1].sale).toFixed(3) + ` EUR`;


    } catch {
        console.log('ooops..>!')
    }
    const a = 5;
}

const mapStateToProps = (state, ownProps) => {
    return {};

}

export default connect(mapStateToProps)(ExchangeRates);
