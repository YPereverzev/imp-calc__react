import produce from 'immer';
import { 
    LOAD_EXPORTERS,
    SUCCESS,
    REQUEST,
    FAILURE,
    ADD_PRODUCT,
} from '../constants';


const initialState  = {
    loading: false,
    error: null,
    loaded: false,
    entities: {},
}



export default (state = initialState, action) => produce(state, (draft) => {
    const { type, exportersResponse, error, id, payload } = action;

    switch (type) {
        case LOAD_EXPORTERS + REQUEST: {
            draft.loading = true;
            draft.loaded = false;
            draft.error = null;
            break; 
        }

        case LOAD_EXPORTERS + FAILURE: {
            draft.loading = false;
            draft.loaded = false;
            draft.error = error;
            break; 
        }    
        case LOAD_EXPORTERS + SUCCESS: {
            draft.loading = false;
            draft.loaded = true;
            draft.error = null;
            draft.entities = [ ...exportersResponse ] ;
            break; 
        }
        
        case ADD_PRODUCT: {
            debugger;
            const exactExporter = state.entities.findIndex((item) => {
                debugger;
                return payload.activeExporter.id === item.id;
            })

            draft.entities[exactExporter].products = [
                ...draft.entities[exactExporter].products,
                id
            ];
                    // : {
                    //     ...state.entities[exactExporter], 
                        // state.entities[exactExporter].products: [
                        //     ...state.entities[exactExporter].products,
                             
                        //     id
                        // ]
                    // }
            break;
          }
            
        default:
            return;
    }

});



// export default (state = initialState, action) => {

//     const { type, exportersResponse, error, id, payload } = action;

//     switch (type) {
//         case LOAD_EXPORTERS + REQUEST:
            
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false,
//                 error: null
//             }; 

//         case LOAD_EXPORTERS + FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 loaded: false,
//                 error: error
//             };
        
//         case LOAD_EXPORTERS + SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 loaded: true,
//                 error: null,
//                 entities: [ ...exportersResponse ] 
//             };
//         case ADD_PRODUCT:
//             debugger;

//             const exactExporter = state.entities.findIndex((item) => {
//                 debugger;
//                 return payload.activeExporter.id === item.id;
//             })
//             return {
//                 ...state,
//                 loading: false,
//                 loaded: true,
//                 error: null,
//                 entities: [ 
//                     ...state.entities, 
//                     state.entities[exactExporter]) : newExporter
//                     // : {
//                     //     ...state.entities[exactExporter], 
//                         // state.entities[exactExporter].products: [
//                         //     ...state.entities[exactExporter].products,
                             
//                         //     id
//                         // ]
//                     // }
//                 ] 
//             };
//         default:
//             return state;
//     }

// }