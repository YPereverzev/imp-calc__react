import React from 'react';

import ImportedItems from './importedItems';
import { ImportItemsService } from '../../fixtures';

const item = ImportItemsService[0].products[0];


describe('ImportItemsService', () => {
    it('ImportItemsService should render', () => {
        // debugger;
        const component = mount(<ImportedItems item={item} />);
        expect(component.find(`[data-test-id="ImportedItems"]`).length).toBe(1);
    });
});