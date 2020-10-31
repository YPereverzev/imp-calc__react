import React from 'react';

import ImportedItems from './importedItems';
import { importItemsService } from '../../fixtures';

const item = importItemsService[0].products[0];


describe('importItemsService', () => {
    it('importItemsService should render', () => {
        
        const component = mount(<ImportedItems item={item} />);
        expect(component.find(`[data-test-id="ImportedItems"]`).length).toBe(1);
    });
});