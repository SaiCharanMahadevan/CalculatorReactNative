import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

import {
  FlexRow, FlexView, Text, GapSeparator,
} from 'components';
import LAYOUT from 'constants/layout';

type Props = {
  expression: String,
  result: String,
}
export default class OutputContainer extends PureComponent<Props> {
  render() {
    const { expression, result } = this.props;
    return (
      <FlexView gutter flex={3} alignItems='flex-end'>
        <FlexRow flex={6}>
          <Text adjustsFontSizeToFit weight='bold' size='large'>{expression}</Text>
        </FlexRow>
        <GapSeparator />
        <FlexRow flex={4}>
          <Text adjustsFontSizeToFit weight='semibold' size='medium' result>{result}</Text>
        </FlexRow>
      </FlexView>
    );
  }
}