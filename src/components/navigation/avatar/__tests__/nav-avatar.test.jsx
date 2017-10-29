import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Avatar from '../nav-avatar';

configure({ adapter: new Adapter() });

describe('Avatar component', () => {
  test('should display image', () => {
    const wrapper = mount(<Avatar />);
    expect(wrapper.find('img').filterWhere(img => img.prop('alt') === 'avatar-img')).toHaveLength(1);
  });
});
