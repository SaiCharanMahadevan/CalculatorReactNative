import React from 'react';
import { shallow } from 'enzyme';

import OutputContainer from './output';

describe('OutputContainer', () => {
  test('renders the section that displays the result of the calculation', () => {
    const wrapper = shallow(
      <OutputContainer expression="1+2-3" result="0"/>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
