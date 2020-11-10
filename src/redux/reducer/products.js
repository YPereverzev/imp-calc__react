import { 
    LOAD_PRODUCTS,
    SUCCESS,
    REQUEST,
    FAILURE,
} from '../constants';

const initialState  = {
    loading: false,
    error: null,
    loaded: false,
    entities: {},
}

const toObjProducts = (normalizedProducts) => normalizedProducts.reduce(
    (acc, product) => ({...acc, [product.id]: product}), {}
);

export default (state = initialState, action) => {

    const { type, productsResponse, error } = action;

    switch (type) {
        case LOAD_PRODUCTS + REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            }; 

        case LOAD_PRODUCTS + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: error
            };
        
        case LOAD_PRODUCTS + SUCCESS:
            
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                entities: { ...toObjProducts(productsResponse) } 
            };

        default:
            return state;
    }

}