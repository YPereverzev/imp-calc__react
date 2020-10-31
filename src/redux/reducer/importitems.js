import { importItemsService}  from '../../fixtures'
import { ADD_FEEDBACK } from '../constants';

export default (importItems = importItemsService, action) => {
    
    const { type, payload, feedbackId, userId } = action;

    switch (type) {
        case ADD_FEEDBACK:
            const { exporterId, name, review} = payload;
            let changedExporter = importItems.find(item => item.id === exporterId.id);
            const changedExporterIndex = importItems.indexOf(changedExporter);
            const newImportItems = [...importItems];
            
            changedExporter = {
                ...changedExporter,
                experience: [...changedExporter.experience, feedbackId]
              };
            newImportItems[changedExporterIndex] = changedExporter;
            const result = newImportItems; 
            
            return result;
        default: 
        return importItems;
    }

}

