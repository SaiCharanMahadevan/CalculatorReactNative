import React, { Fragment, PureComponent } from 'react';
import { SafeAreaView, Platform } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import {
  Button, Col, FlatButton, FlexRow, FlexView, Text, GapSeparator,
} from 'components';
import { InputButtonsContainer, OutputContainer } from 'containers'
import THEME from 'constants/theme';
import LAYOUT from 'constants/layout';;
import { CLEAR, ERROR_MESSAGE, EQUALS } from 'constants/misc';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  backgroundColor: ${({ theme: { COLORS } }) => COLORS.DARK_GREY};
  paddingTop: ${({ isAndroid }) => (isAndroid ? 25 : 0)};
`;
const LargeGap = styled(FlexView)`
  flex: 1;
`
const MAX_LENGTH = 57
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      result: '',
      expression: '',
    }
  }

  _escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

     // Calculate the value of the expression after checking its validity
  _evaluate = () => {
    const { expression } = this.state;
    let temp = expression;
    try{
      // Evalutate if operators exist in the expression. Edge Case - `0x` return false (HexDecimal equivalent)
      if(isNaN(temp) || (temp[0] === '0' && temp[1] === 'x')){
        let strTemp = temp.replace(new RegExp(this._escapeRegExp('÷'), 'g'), '/');
        strTemp = strTemp.replace(new RegExp(this._escapeRegExp('x'), 'g'), '*');
        temp = eval(strTemp);
        if(temp%1 > 0) {
          temp = temp.toFixed(5)
        }

        if(temp === Infinity) {
          temp = ERROR_MESSAGE
        }
      }

      this.setState({
        result: temp.toString(),
      })
    } catch(exception){
        console.log('exception: ' + exception);
    }
  }

  concatToOutput = (value) => {
    const { expression } = this.state;
    if(expression.length >= MAX_LENGTH || ((expression === '') && isNaN(value))){
      return;
    }
    
    if(expression === ''){
      this.setState({expression: value})
    } else{
      this.setState({expression: `${expression}${value}`})
    }

    this._evaluate();
  }

  // Handle button press actions
  handleEvent = (value) => {
    const { expression, result } = this.state;
    switch(value) {
      case CLEAR:
        if(result === ERROR_MESSAGE) {
          this.setState({
            expression: '',
          });
        } else {
          this.replaceLastIndex('');
        }
        break;
      case EQUALS:
        this.updateAnswer();
        break;
      default:
        this.updateExpression(value);
        break;
    }
  }

  // Handle long press actions
  handleLongPress = (value) => {
    if(value === CLEAR) {
      this.reset();
    }
  }

  // Removes the last index of the expression.
  replaceLastIndex = (value) => {
    const { expression } = this.state;
    let newExpression = expression.replace(/.$/, value)
    
    this.setState({
      expression: expression.replace(/.$/, value)
    })
  
    this._evaluate();
  }

  // Resets to the start state.
  reset = () => {
    this.setState({
      result: '',
      expression: ''
    })
  }

  updateAnswer = () => {
    const { result } = this.state;
    this.setState({
      expression: result,
      result: '',
    })
  }

  // Forms the latest expression ready for evaluation
  updateExpression = (value) => {
    const { expression } = this.state;
    if(expression === ERROR_MESSAGE) {
      this.setState({
        expression: '',
      });
    }
    let strLastChar = expression.slice(expression.length-1);
    if(isNaN(strLastChar) && isNaN(value)){
      this.replaceLastIndex(value);
    } else {
      this.concatToOutput(value);
    }
  }

  render() {
    const { expression, result } = this.state;
    return (
      <ThemeProvider theme={THEME}>
        <Wrapper isAndroid={Platform.OS === 'android'}>
          <FlexView flex={1}>
            <LargeGap />
            <OutputContainer expression={expression} result={result}/>
            <InputButtonsContainer onButtonPress={this.handleEvent} onLongPress={this.handleLongPress} />
          </FlexView>
        </Wrapper>
      </ThemeProvider>
    );
  }
  
}
