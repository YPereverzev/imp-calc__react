import React from 'react';

import ImportedItems from './importedItems';
import { allExporters } from '../../fixtures';

const item = allExporters[0].products[0];


describe('allExporters', () => {
    it('allExporters should render', () => {
        
        const component = mount(<ImportedItems item={item} />);
        expect(component.find(`[data-test-id="ImportedItems"]`).length).toBe(1);
    });
});