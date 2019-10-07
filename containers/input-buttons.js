import React, { Fragment, PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import {
  Button, Col, FlexRow, FlexView, Text, GapSeparator,
} from 'components';
import LAYOUT from 'constants/layout';
import { BUTTONS_NUMBERS, BUTTONS_OPERATORS, CLEAR, EQUALS, ZERO } from 'constants/misc'

type Props = {
  onButtonPress: () => mixed,
  onLongPress: () => mixed,
}
export default class InputButtonsContainer extends PureComponent<Props> {
  handleOnPress = (value) => {
    const { onButtonPress } = this.props;
    requestAnimationFrame(() => {
      onButtonPress(value);
    });
      
  }

  _handleOnLongPress = (value) => {
    const { onLongPress } = this.props;
    requestAnimationFrame(() => {
      onLongPress(value);
    });
  }

  renderClearButton = () => (
    <Col gap>
      <Button
        className="clear-button"
        label={CLEAR}
        onPress={() => this.handleOnPress(CLEAR)}
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
                      className={`Button${index}${i}`}
                      label={col}
                      onPress={() => this.handleOnPress(col)}
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
            onPress={() => this.handleOnPress(ZERO)}
            operand
          />
        </Col>
        <Col>
          <Button
            label={EQUALS}
            onPress={() => this.handleOnPress(EQUALS)}
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
                onPress={() => this.handleOnPress(col)}
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
        <FlexView className="input-buttons" flex={6} alignItems='center'>
          {this.renderClearButton()}
          <FlexRow>
            {this.renderOperandButtons()}
            {this.renderOperatorButtons()}
          </FlexRow>
        </FlexView>
    );
  }
}