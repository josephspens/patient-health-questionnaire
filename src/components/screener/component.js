import React, { Component, PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Screener extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  state = {
    finished: false,
    stepIndex: 0
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions = (step) => {
    const { stepIndex } = this.state;

    return (
      <div style={{
        margin: '12px 0',
        display: 'inline-flex',
        flexDirection: 'column'
      }}>
        {this.props.answers.map((answer, index) => (
          <RaisedButton
            key={index}
            label={answer}
            primary={true}
            onTouchTap={this.handleNext}
            style={{ marginBottom: 12 }}
          />
        ))}
        {step > 0 && (
          <FlatButton
            label='Back'
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;
    return (
      <div>
        <Stepper
          activeStep={stepIndex}
          orientation='vertical'
          linear={false}
        >
          {this.props.questions.map((question, index) => (
            <Step key={index}>
              <StepButton
                onTouchTap={() => this.setState({ stepIndex: index })}
              >
                {question}
              </StepButton>
              <StepContent>
                {this.renderStepActions(index)}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}
