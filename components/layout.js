import styled, { css } from 'styled-components/native';

const getGapSize = ({ gap, theme: { LAYOUT } }) => {
  if (typeof gap === 'boolean') {
    return LAYOUT.GAP;
  }

  return Number.isFinite(gap) ? gap : 0;
};

const getGutterSize = ({ gutter, theme: { LAYOUT } }) => {
  if (typeof gutter === 'boolean') {
    return LAYOUT.GUTTER;
  }

  return Number.isFinite(gutter) ? gutter : 0;
};

export const FlexView = styled.View`
  flex-shrink: 1;
  padding-vertical: ${props => getGapSize(props)};
  padding-horizontal: ${props => getGutterSize(props)};
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `};
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `};
`;

export const FlexRow = styled(FlexView)`
  flex-direction: row;
`;

export const Col = styled.View`
  ${({ align }) => align && css`
    align-self: ${align};
  `};
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `};
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `};
  padding-horizontal: ${({ gutter, theme: { LAYOUT } }) => (!Number.isNaN(Number(gutter)) ? gutter : LAYOUT.GUTTER / 2)};
  padding-vertical: ${props => getGapSize(props)};
`;
