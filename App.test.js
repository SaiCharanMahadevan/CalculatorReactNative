import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';
import { CLEAR, ERROR_MESSAGE, EQUALS } from 'constants/misc';

import THEME from 'constants/theme';
import App from './App';

describe('App UI: ', () => {
  test('renders the Calculator', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('App Functionality: ', () => {
  test('updates the expression and result by concatinating the expression when a number is pressed ', () => {
    const wrapper = shallow(
      <App />,
    );
  
    wrapper.instance().handleEvent('1')
    expect(wrapper.instance().state).toMatchSnapshot();
  });

  test('removes the last input when CLEAR is pressed', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: '12' })
    wrapper.instance().handleEvent(CLEAR)
    expect(wrapper.instance().state).toMatchSnapshot();
  });

  test('resets input when CLEAR is long pressed', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: '2123+2323' })
    wrapper.instance().reset()
    expect(wrapper.instance().state).toMatchSnapshot();
  });

  test('updates the expression with the result when EQUALS is pressed', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: '2123+2323' })
    wrapper.instance()._evaluate()
    wrapper.instance().updateAnswer()
    expect(wrapper.instance().state).toMatchSnapshot();
  });

  test('does not update the expression if the last and next inputs are invalid ', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: '1+' })
    wrapper.instance().handleEvent('+')
    expect(wrapper.instance().state).toMatchSnapshot();
    wrapper.setState({ expression: '' })
    wrapper.instance().handleEvent('+')
    expect(wrapper.instance().state).toMatchSnapshot();
  });


  test('updates the expression by replacing the operator if the last input was an operator ', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: '1+' })
    wrapper.instance().updateExpression('*')
    expect(wrapper.instance().state).toMatchSnapshot();
  });

  test('clears the expression after any next input when the result displays the error message', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: ERROR_MESSAGE })
    wrapper.instance().handleEvent('*')
    expect(wrapper.instance().state).toMatchSnapshot();
  });

  test('updates the expression to handle upto 5 decimals', () => {
    const wrapper = shallow(
      <App />,
    );
    
    wrapper.setState({ expression: '9÷' })
    wrapper.instance().handleEvent('7')
    expect(wrapper.instance().state).toMatchSnapshot();
  });
});
