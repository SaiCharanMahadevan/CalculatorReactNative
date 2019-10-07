import React from 'react';
import { shallow } from 'enzyme';

import InputButtonsContainer from './input-buttons';

describe('InputButtonsContainer', () => {
  test('renders the section that displays the input operators and operands', () => {
    const wrapper = shallow(
      <InputButtonsContainer onButtonPress={() => {}} onClearLongPressed={() => {}}/>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('calls `onButtonPress` with the relevant value when a button is pressed', () => {
    const sendEventToParentWindowMock = jest.fn();
    const wrapper = shallow(
      <InputButtonsContainer onButtonPress={jest.fn(()=>{})}/>,
    );
    let button = wrapper.find('.Button00').props().onPress();
    expect(wrapper.instance().props.onButtonPress).toMatchSnapshot();
  });

  test('calls `onLongPressed` with the relevant value when a button is long pressed', () => {
    const sendEventToParentWindowMock = jest.fn();
    const wrapper = shallow(
      <InputButtonsContainer onLongPressed={jest.fn(()=>{})}/>,
    );
    let button = wrapper.find('.clear-button').props().onLongPress();
    expect(wrapper.instance().props.onLongPressed).toMatchSnapshot();
  });
});
