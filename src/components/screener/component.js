import React, { Component, PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import { RaisedButton } from 'material-ui';

import styles from './component.styles';

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
    <div style={styles.answerContainer}>
      {this.props.answers.map((answer, index) => (
        <RaisedButton
          key={index}
          label={answer}
          primary={true}
          onTouchTap={() => this.addAnswer(question, answer, index)}
          style={styles.answerButton}
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
        style={styles.container}
      >
        {this.props.questions.map((question, index) => (
          <Step
            key={index}
            completed={!!this.props.results[index]}
          >
            <StepButton
              onTouchTap={() => this.setState({ stepIndex: index })}
              style={styles.question}
            >
              <span style={styles.questionText}>
                {question}
              </span>
              {this.props.results[index] && (
                <span style={styles.answerText}>
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
