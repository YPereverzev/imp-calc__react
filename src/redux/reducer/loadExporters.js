import produce from 'immer';
import { 
  LOAD_EXPORTERS, 
  SUCCESS, 
  REQUEST, 
  FAILURE, 
  ADD_PRODUCT,
  ADD_NEW_EXPORTER,
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: {},
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
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
        draft.entities = [...exportersResponse];
        break;
      }

      case ADD_PRODUCT: {
         
        const exactExporter = state.entities.findIndex((item) => {
          return payload.activeExporter.id === item.id;
        });

        draft.entities[exactExporter].products = [...draft.entities[exactExporter].products, id];
        break;
      }

      case ADD_NEW_EXPORTER: {
          const newExporter = {
              id: id,
              exporterName: payload.newExporterName,
              location: payload.newExporterLocation,
              image: payload.newImage,
              products: [],
              experience: [],
          };
          return {
              ...state,
              entities: [
                ...state.entities,
                newExporter
              ]
            }
      }

      default:
        return state;
    }
  });