import React, { Component, PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import { RaisedButton } from 'material-ui';

export default class Screener extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    results: PropTypes.objectOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  }

  state = {
    stepIndex: 0
  }

  addAnswer(question, answer, value) {
    this.setState({ stepIndex: this.state.stepIndex + 1 });
    this.props.addAnswer(question, answer, value);
  }

  renderStepActions = (question) => (
    <div style={{
      margin: '1em 0'
    }}>
      {this.props.answers.map((answer, index) => (
        <RaisedButton
          key={index}
          label={answer}
          primary={true}
          onTouchTap={() => this.addAnswer(question, answer, index)}
          style={{ marginRight: '1em' }}
        />
      ))}
    </div>
  );

  render() {
    return (
      <Stepper
        activeStep={this.state.stepIndex}
        orientation='vertical'
        linear={false}
        style={{ padding: '1em' }}
      >
        {this.props.questions.map((question, index) => (
          <Step
            key={index}
            completed={!!this.props.results[index]}
          >
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: index })}
              style={{ textAlign: 'left' }}
            >
              <span
                style={{
                  flexGrow: 1
                }}
              >
                {question}
              </span>
              {this.props.results[index] && (
                <span style={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  marginLeft: '1em',
                  textAlign: 'right',
                  whiteSpace: 'nowrap'
                }}>
                  {this.props.results[index].answer}
                </span>
              )}
            </StepButton>
            <StepContent>
              {this.renderStepActions(index)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    );
  }
}
