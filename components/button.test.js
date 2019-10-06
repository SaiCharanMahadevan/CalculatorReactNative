import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';

import THEME from 'constants/theme';
import Button from './button';

describe('Button', () => {
  test('renders a button with the specified label along with default props and styling', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Button
          label="Test Button"
          onPress={() => {}}
          onLongPress={() => {}}
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a button of type operator', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Button
          label="Test Button"
          operator
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a button of type operand', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Button
          label="Test Button"
          operator
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a button with custom width and padding', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Button
          gutter={12}
          width={100}
          label="Test Button"
          operator
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
