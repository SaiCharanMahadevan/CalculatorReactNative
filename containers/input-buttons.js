import React, { Fragment, PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import {
  Button, Col, FlexRow, FlexView, Text, GapSeparator,
} from 'components';
import LAYOUT from 'constants/layout';
import { BUTTONS_NUMBERS, BUTTONS_OPERATORS, CLEAR, EQUALS, ZERO } from 'constants/misc'

type Props = {
  onButtonPress: () => mixed,
  onClearLongPressed: () => mixed,
}
export default class InputButtonsContainer extends PureComponent<Props> {
  _handleOnPress = (value) => {
    const { onButtonPress } = this.props;
    requestAnimationFrame(() => {
      onButtonPress(value)
    })
  }

  _handleOnLongPress = (value) => {
    const { onClearLongPressed } = this.props;
    requestAnimationFrame(() => {
      onClearLongPressed(value)
    })
  }

  renderClearButton = () => (
    <Col gap>
      <Button
        label={CLEAR}
        onPress={() => this._handleOnPress(CLEAR)}
        onLongPress={() => this._handleOnLongPress(CLEAR)}
        width={LAYOUT.BUTTON_WIDTH * 4.6}
        operator
      />
    </Col>
  )

  renderOperandButtons= () => (
    <Col gutter={0}>
      { 
        BUTTONS_NUMBERS.map((row, index) => (
          <Fragment key={index}>
            <FlexRow>
              {
                row.map((col, i) => (
                  <Col key={i}>
                    <Button
                      label={col}
                      onPress={() => this._handleOnPress(col)}
                      operand
                    />
                  </Col>
                ))
              }
            </FlexRow>
            <GapSeparator />
          </Fragment>
        ))
      }
      <FlexRow>
        <Col>
          <Button
            label={ZERO}
            width={LAYOUT.BUTTON_WIDTH * 2.2}
            onPress={() => this._handleOnPress(ZERO)}
            operand
          />
        </Col>
        <Col>
          <Button
            label={EQUALS}
            onPress={() => this._handleOnPress(EQUALS)}
          />
        </Col>
      </FlexRow>
    </Col>
  );

  renderOperatorButtons = () => (
    <Col gutter={0}>
      {
        BUTTONS_OPERATORS.map((col, i) => (
          <Fragment key={i}>
            <Col>
              <Button
                label={col}
                onPress={() => this._handleOnPress(col)}
                operator
              />
            </Col>
          <GapSeparator />
          </Fragment>
        ))
      }
    </Col>
  )

  render() {
    return (
        <FlexView flex={6} alignItems='center'>
          {this.renderClearButton()}
          <FlexRow>
            {this.renderOperandButtons()}
            {this.renderOperatorButtons()}
          </FlexRow>
        </FlexView>
    );
  }
}