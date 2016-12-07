import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';
import {
  SocialSentimentVerySatisfied,
  SocialSentimentSatisfied,
  SocialSentimentNeutral,
  SocialSentimentDissatisfied,
  SocialSentimentVeryDissatisfied,
} from 'material-ui/svg-icons';

import styles from './component.styles';
import propTypes from './component.propTypes';

export default class Result extends Component {
  static propTypes = propTypes

  // In this case, index correlates to severity
  getIcon(index, color) {
    switch (index) {
      case 4:
        return <SocialSentimentVeryDissatisfied color={color} />;
      case 3:
        return <SocialSentimentDissatisfied color={color} />;
      case 2:
        return <SocialSentimentNeutral color={color} />;
      case 1:
        return <SocialSentimentSatisfied color={color} />;
      default:
        return <SocialSentimentVerySatisfied color={color} />;
    }
  }

  render() {
    const activeColor = this.props.muiTheme.palette.alternateTextColor;
    const disabledColor = this.props.muiTheme.palette.disabledColor;
    return (
      <Stepper
        linear={false}
        style={{
          ...styles.stepper,
          backgroundColor: this.props.muiTheme.palette.primary1Color
        }}
      >
        {this.props.degreesOfDepression.map((degree, index) => {
          // If the score is between the min and max of the current degree, that degree is active
          const isActive = this.props.score >= degree.min && this.props.score <= degree.max;
          const color = isActive ? activeColor : disabledColor;
          return (
            <Step key={index}>
              <StepLabel
                icon={this.getIcon(index, color)}
                style={{ color }}
              >
                {degree.text}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  }
}
