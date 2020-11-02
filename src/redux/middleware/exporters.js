import {
    FAILURE,
    SUCCESS,
    REQUEST
} from '../constants';

export const loadExporters = (state) => (next) => async (action) => {
    if (!action.exporterAPI) return next(action);

    const { type, exportersAPI, ...rest} = action;
    
    next({ ...rest, type: type + REQUEST});
    
    try {
        const exportersResponse = await fetch(exportersAPI).then(item => item.json());
        next({ ...rest, type: type + SUCCESS, exportersResponse});
    } catch (error) {
        next({ ...rest, type: type + FAILURE, error});

    }
}