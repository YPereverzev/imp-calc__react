import ImportItemsService from '../../fixtures'


export default (importItems = ImportItemsService, action) => {
    const {type} = action;

    switch (type) {
        default: 
        return importItems;
            break;
    }

}

