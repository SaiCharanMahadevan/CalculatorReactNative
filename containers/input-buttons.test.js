import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';

import THEME from 'constants/theme';
import InputButtonsContainer from './input-buttons';

describe('InputButtonsContainer', () => {
  test('renders the section that displays the input operators and operands', () => {
    const wrapper = shallow(
      <ThemeProvider theme={THEME}>
        <InputButtonsContainer onButtonPress={() => {}} onClearLongPressed={() => {}}/>
      </ThemeProvider>,
    ).dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
  });
});
