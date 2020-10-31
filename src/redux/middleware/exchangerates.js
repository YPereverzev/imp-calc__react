import { FAILURE, REQUEST, SUCCESS } from "../constants";


export default state => next => async action => {
    if (!action.exchangeRatesAPI) next(action);
    
    const { exchangeRatesAPI, type, ...rest} = action;

    next({type: type + REQUEST, ...rest });
    
    try {
        const exRates = await fetch(exchangeRatesAPI)
        debugger;
        const exRatesResponse = await exRates.json();
            console.log(exRates);
            next({ exRatesResponse, type: type + SUCCESS, ...rest });
        } catch (error){
            next({ error, type: type + FAILURE, ...rest });
        }
}