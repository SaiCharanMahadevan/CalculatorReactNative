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
    const wrapper = shallow(
      <InputButtonsContainer onButtonPress={jest.fn((x)=>x)}/>,
    );
    let button = wrapper.find('.Button00').props().onPress('7');
    expect(wrapper.instance().props.onButtonPress).toMatchSnapshot();
  });

  test('calls `onLongPress` with the relevant value when a button is pressed', () => {
    const wrapper = shallow(
      <InputButtonsContainer onLongPress={jest.fn((x)=>x)}/>,
    );
    let button = wrapper.find('.clear-button').props().onLongPress('CLEAR');
    expect(wrapper.instance().props.onButtonPress).toMatchSnapshot();
  });
});
