import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';

import THEME from 'constants/theme';
import OutputContainer from './output';

describe('OutputContainer', () => {
  test('renders the section that displays the result of the calculation', () => {
    const wrapper = shallow(
      <ThemeProvider theme={THEME}>
        <OutputContainer expression="1+2-3" result="0"/>
      </ThemeProvider>,
    ).dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
  });
});
