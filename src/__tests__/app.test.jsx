import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Index from '../components/index';

configure({ adapter: new Adapter() });

test('welcomes the user to React', () => {
  const wrapper = mount(<Index />);

  expect(wrapper.text()).toContain('Hello from');
});
