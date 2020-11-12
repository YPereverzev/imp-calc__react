import { v4 as uuid } from 'uuid';

export default (store) => (next) => (action) => {
    if (!action.generateId) return next(action);
    debugger;
    const {generateId, ...rest} = action;
    // buffering variables added as idGenerated and result for DEV
    const idGenerated = generateId.reduce((acc, key) => {
        return {...acc, [key]: uuid()}
    }, {})
    
    generateId.reduce((acc, key) => {
        return {...acc, [key]: uuid()}
    }, {}
    )
    const result = {
        ...rest,
        ...idGenerated
    }

    next(result);
}
