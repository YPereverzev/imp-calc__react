import { 
    LOAD_PRODUCTS,
    SUCCESS,
    REQUEST,
    FAILURE,
    ADD_PRODUCT
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

    const { type, productsResponse, error, payload, id } = action;

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
        case ADD_PRODUCT:
            debugger;
            const newStateEntities = { ...state.entities, 
                [id]: {
                    // "id" ?????
                    "id": id,
                    // products: products, 
                    // exporters: exporters,
                    "nameOfPc": payload.name,
                    "weightPerPc": payload.weight,
                    "volumePerPc": payload.volume,
                    duty: payload.duty,
                    vat: payload.productVAT,
                    "pricePerPc": payload.price,
                    "customs_code": {
                        code: payload.code,
                        codeHref: payload.productURL
                      },
                }
            }
            
            return  {
                ...state,
                entities: newStateEntities
                // { ...toObjProducts(newStateEntities) } 
            };
            
                // добавить новый продукт в продукты
                // добавить новый id продукта в поставщика


        default:
            return state;
    }

}