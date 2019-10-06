import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';

import THEME from 'constants/theme';
import Text from './text';

describe('Text', () => {
  test('renders a text with default styling and size', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Text
          label="Test text"
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a text of type operator', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Text
          label="Test text"
          operator
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a text of type operand', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Text
          label="Test text"
          operand
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a text of type result', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Text
          label="Test text"
          result
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a text of size medium and weight semibold', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Text
          label="Test text"
          size="medium"
          weight="semibold"
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a text of size large and weight bold', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <Text
          label="Test text"
          size="large"
          weight="bold"
        />
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
