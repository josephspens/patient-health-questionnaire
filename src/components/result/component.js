import React, { Component, PropTypes } from 'react';
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

export default class Result extends Component {
  static propTypes = {
    results: PropTypes.objectOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      }).isRequired
    ).isRequired,
    score: PropTypes.number.isRequired,
    degreesOfDepression: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  }

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
    return (
      <Stepper
        linear={false}
        style={{
          ...styles.stepper,
          backgroundColor: this.props.muiTheme.palette.primary1Color
        }}
      >
        {this.props.degreesOfDepression.map((degree, index) => {
          const isActive = this.props.score >= degree.min && this.props.score <= degree.max;
          const activeColor = this.props.muiTheme.palette.alternateTextColor;
          const disabledColor = this.props.muiTheme.palette.disabledColor;
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
