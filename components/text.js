import styled from 'styled-components/native';

const getTextColor = ({ operator, operand, result, theme: { COLORS } }) => {
  if (operator) {
    return COLORS.PRIMARY_PINK;
  }

  if (operand) {
    return COLORS.DARK_GREY;
  }

  if (result) {
    return COLORS.LIGHT_GREY
  }

  return COLORS.WHITE;
};

export default styled.Text`
  font-size: ${({ size, theme: { FONT: { SIZES } } }) => SIZES[size] || SIZES.normal};
  line-height: ${({ size, theme: { FONT: { SIZES }, LAYOUT } }) => ((SIZES[size] || SIZES.normal) + LAYOUT.TEXT_PADDING)};
  color: ${props => getTextColor(props)};
  font-weight: ${({ weight, theme: { FONT: { WEIGHTS } } }) => WEIGHTS[weight] || WEIGHTS.normal};
  text-align: ${({ align }) => align || 'right'};
`;