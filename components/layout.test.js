import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';

import THEME from 'constants/theme';
import { Col, FlexRow, FlexView } from './layout';
import { default as Text } from './text';

describe('FlexView', () => {
  test('renders a `styled` View with no padding', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexView>
          <Text label='Text 1' />
          <Text label='Text 2' />
        </FlexView>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a `styled` View with themed padding', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexView gap gutter>
          <Text label="Text 1" />
          <Text label="Text 2" />
        </FlexView>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('FlexRow', () => {
  test('renders a `styled` FlexView for Rows', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexRow>
          <Text label="Text 1" />
          <Text label="Text 2" />
        </FlexRow>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a `styled` FlexView for Rows with available padding options', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexRow gap gutter>
          <Text label="Text 1" />
          <Text label="Text 2" />
        </FlexRow>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Col', () => {
  test('renders a `styled` View for Columns with default styling', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexRow>
          <Col>
            <Text label="Text 1" />
            <Text label="Text 2" />
          </Col>
          <Col>
            <Text label="Text 1" />
            <Text label="Text 2" />
          </Col>
        </FlexRow>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a `styled` View for Columns with styling using available props', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexRow>
          <Col align="auto" alignItems="center">
            <Text label="Text 1" />
            <Text label="Text 2" />
          </Col>
          <Col justify="center" gutter={10} gap>
            <Text label="Text 1" />
            <Text label="Text 2" />
          </Col>
        </FlexRow>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a `styled` View for Columns with custom styling using available props', () => {
    const wrapper = mount(
      <ThemeProvider theme={THEME}>
        <FlexRow>
          <Col gutter={10}>
            <Text label="Text 1" />
            <Text label="Text 2" />
          </Col>
          <Col gap={12}>
            <Text label="Text 1" />
            <Text label="Text 2" />
          </Col>
        </FlexRow>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
