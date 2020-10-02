import { createSelector } from 'reselect';

const selectImportItems = state => state.importItems;
const selectOrder = state => state.order;

export const orderBoxSelector = createSelector(selectImportItems, selectOrder, (importItems, order) => {
    const allImportedItems = importItems.flatMap((item) => item.products);
        const  allOrderedItemsKeys = Object.keys(order);
        const keysArr =  allOrderedItemsKeys.filter(key => order[key] > 0);
    
        let orderedItemsForNow = keysArr.map((key) => {
            return allImportedItems.filter((item) => item.id == key)
        });
    
    return orderedItemsForNow.flatMap(item => item);

});
