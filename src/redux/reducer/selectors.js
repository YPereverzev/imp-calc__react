import { createSelector } from 'reselect';

// const selectImportItems = state => state.importItems;
const orderSelector = state => state.order;
const productsSelector = state => state.products.entities;
export const usersSelector = state => state.users;

export const  experienceSelector = state => 
{
    // debugger;
    return state.experience.entities;

}

// export const productsAlreadyLoadedSelector = state => state.products.entities;
export const experienceLoading = state => state.experience.loading;
export const experienceLoaded = state => state.experience.loaded;
export const experienceLoadingError = state => state.experience.error;

export const exportersAlreadyLoadedSelector = state => state.allExporters.entities;
export const exportersLoadingSelector = state => state.allExporters.loading;
export const exportersLoadedSelector = state => state.allExporters.loaded;
export const exportersLoadingErrorSelector = state => state.allExporters.error;


export const exchangeRatesSelector = state => state.addExchangeRates.entities;
export const exchangeRatesLoading = state => state.addExchangeRates.loading;
export const exchangeRatesLoaded = state => state.addExchangeRates.loaded;
export const exchangeLoadingRatesError = state => state.addExchangeRates.error;

export const productsAlreadyLoadedSelector = state => state.products.entities;
export const producstLoading = state => state.products.loading;
export const producstLoaded = state => state.products.loaded;
export const pruductsLoadingError = state => state.products.error;



const ownPropsExperienceIdSelector = (_, ownProps) => {
    return ownProps.experienceId
};

export const  allExportersSelector = state => {
    debugger;
    return state.allExporters.entities || [{
        id: "01"
    }];
};

const idSelector = (_, ownProps) => {
    return ownProps.activeExporter.id;
};
export const exporterSelector = createSelector( allExportersSelector, idSelector,
    (importItems, id) => {
        debugger;
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
    ( entities, experienceId) => {
        // debugger;
        if (!entities[0]) return {};
        // if (props.loading || !props.loaded) return <Loader />;

        return entities.find((item) => item.id === experienceId)
});

export const activeExporterSelector = (state, activeExporterId) => {
    debugger;
    return  allExportersSelector()

}