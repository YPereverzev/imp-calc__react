import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { allExporters } from '../../fixtures';

import ImportedItems from './importedItems';

Enzyme.configure({ adapter: new Adapter() });   


const item = allExporters[0].products[0];

describe('allExporters', () => {
  it('allExporters should render', () => {
    const component = mount(<ImportedItems item={item} />);
    expect(component.find('[data-test-id="ImportedItems"]').length).toBe(1);
  });
});
