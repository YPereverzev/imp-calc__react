import { FAILURE, REQUEST, SUCCESS } from "../constants";

export const loadProducts = (state) => (next) => async (action) => {
    
    if (!action.productsAPI) return next(action);
    const { type, productsAPI, ...rest } = action;
    next({type: type + REQUEST, ...rest })    ;

    try {
        
        const productsResponse = await fetch(productsAPI).then(product => product.json());
        next({type: type + SUCCESS, productsResponse, ...rest })    ;
    } catch (error) {
        next({type: type + FAILURE, error, ...rest });
    }

}