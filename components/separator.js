import styled from 'styled-components/native';

export const Separator = styled.View`
  height: ${({ height }) => height || 1};
  background-color: ${({
    transparent, theme: { COLORS },
  }) => (transparent ? 'transparent' : COLORS.BORDER)};
`;

export const GapSeparator = styled.View`
  height: ${({ theme: { LAYOUT } }) => LAYOUT.GAP};
  background-color: transparent;
`;
