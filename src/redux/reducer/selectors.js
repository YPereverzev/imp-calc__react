import { createSelector } from 'reselect';
// debugger;    

// const selectImportItems = state => state.importItems;
const selectOrder = state => state.order;
const productsSelector = state => state.products;

export const orderBoxSelector = createSelector(productsSelector, selectOrder, (products, order) => {
    // debugger;
    const allImportedItems = products;
    const  allOrderedItemsKeys = Object.keys(order);
    const keysArr =  allOrderedItemsKeys.filter(key => order[key] > 0);

    let orderedItemsForNow = keysArr.map((key) => {
        return allImportedItems[key]
    });
    
    return orderedItemsForNow.flatMap(item => item);

});
