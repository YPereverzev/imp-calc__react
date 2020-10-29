import { createSelector } from 'reselect';

// const selectImportItems = state => state.importItems;
const orderSelector = state => state.order;
const productsSelector = state => state.products;
export const usersSelector = state => state.users;
export const  experienceSelector = state => state.experience;
export const exchangeRatesSelector = state => state.addExchangeRates;

const ownPropsExperienceIdSelector = (_, ownProps) => {
    return ownProps.experienceId
};

export const importItemsServiceSelector = state => state.importItems;

const idSelector = (_, ownProps) => {
    return ownProps.activeExporter.id;
};
export const exporterSelector = createSelector(importItemsServiceSelector, idSelector,
    (importItems, id) => {
         const buff = importItems.find(
            (exporter) => exporter.id === id)
            return buff;
        }
);
        


export const orderBoxSelector = createSelector(productsSelector, orderSelector, (products, order) => {
     ;
    const allImportedItems = products;
    const  allOrderedItemsKeys = Object.keys(order);
    const keysArr =  allOrderedItemsKeys.filter(key => order[key] > 0);

    let orderedItemsForNow = keysArr.map((key) => {
        return allImportedItems[key]
    });
    
    return orderedItemsForNow.flatMap(item => item);

});

export const experienceIdSelector = createSelector(experienceSelector, ownPropsExperienceIdSelector,
    ( experience, experienceId) => {
     ;

        return experience.find((item) => item.id === experienceId)
    }
        );
