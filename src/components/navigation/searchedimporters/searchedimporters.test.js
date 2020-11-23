import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { allExporters } from '../../../fixtures';

import SearchedImporters from './searchedimporters';

Enzyme.configure({ adapter: new Adapter() });   

const filteredImporters = allExporters;

describe('SearchedImporters', () => {
    it('should render', () => {
        // exporters={filteredImporters} onImporterClick={onImporterClick}
        const component = mount(<SearchedImporters exporters={filteredImporters} />);
        expect(component.find('[data-test="SearchedImporters"]').length).toBe(1);
    });
})