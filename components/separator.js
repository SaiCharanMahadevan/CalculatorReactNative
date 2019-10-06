import styled from 'styled-components/native';

export const GapSeparator = styled.View`
  height: ${({ theme: { LAYOUT } }) => LAYOUT.GAP};
  background-color: transparent;
`;
