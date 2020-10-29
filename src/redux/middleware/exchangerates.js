export default state => next => async action => {
    if (!action.exchangeRatesAPI) next(action);
    
    const { exchangeRatesAPI, ...rest} = action;
    // try {
        debugger;
            const exRates = await fetch(exchangeRatesAPI).then(item => item.json());
            console.log(exRates);
            next({ ...rest, exRates});
        // } catch {
            // const error = response.then((error) => error.JSON());
            
        // }
}