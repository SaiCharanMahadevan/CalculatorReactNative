import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import Text from './text';

const getBackgroundColor = ({ operator, operand, theme: { COLORS } }) => {
  if (operator) {
    return COLORS.LIGHT_PINK;
  }

  if (operand) {
    return COLORS.LIGHT_GREY;
  }

  return COLORS.PRIMARY_PINK;
};
const ButtonWrapper = styled.View`
  height: ${({ theme: { LAYOUT } }) => LAYOUT.BUTTON_HEIGHT};
  width: ${({ width , theme: { LAYOUT } }) => ( width || LAYOUT.BUTTON_WIDTH)};
  background-color: ${props => getBackgroundColor(props)};
  padding-horizontal: ${({ gutter, theme: { LAYOUT } }) => gutter || LAYOUT.GUTTER};
  padding-vertical: ${({ theme: { LAYOUT } }) => LAYOUT.GAP};
  border-radius: 6;
  align-items: center;
  justify-content: center;
`;

type Props = {
  label: string,
  onPress: () => mixed,
  onLongPress: () => mixed,
}

export default class Button extends PureComponent<Props> {
  onPress = () => {
    const { onPress} = this.props;
    onPress();
  }

  onLongPress = () => {
    const { onLongPress } = this.props;
    if(typeof onLongPress === 'function') {
      onLongPress();
    }
  }
  render() {
    const { label, onPress, onLongPress, ...other } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.30} onPress={this.onPress} onLongPress={this.onLongPress}>
        <ButtonWrapper {...other}>
          <Text {...other}>{label}</Text>
        </ButtonWrapper>
      </TouchableOpacity>
    );
  }
}
