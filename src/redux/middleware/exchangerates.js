import { FAILURE, REQUEST, SUCCESS } from "../constants";


export default state => next => async action => {
    if (!action.exchangeRatesAPI) return next(action);
    
    const { exchangeRatesAPI, type, ...rest} = action;

    next({type: type + REQUEST, ...rest });
    
    try {
        const exRates = await fetch(exchangeRatesAPI)
         ;
        const exRatesResponse = await exRates.json();
            console.log(exRates);
            return next({ exRatesResponse, type: type + SUCCESS, ...rest });
        } catch (error){
            return next({ error, type: type + FAILURE, ...rest });
        }
}