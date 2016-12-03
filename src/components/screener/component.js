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
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    results: PropTypes.objectOf(PropTypes.string).isRequired
  }

  state = {
    finished: false,
    stepIndex: 0
  }

  answerQuestion = (question, answer) => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= this.props.questions.length,
    });
    this.props.addAnswer(question, answer);
  }

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions = (question) => {
    const { stepIndex } = this.state;

    return (
      <div style={{
        margin: '1em 0'
      }}>
        {this.props.answers.map((answer, index) => (
          <RaisedButton
            key={index}
            label={answer}
            primary={true}
            onTouchTap={() => this.answerQuestion(question, answer)}
            style={{ marginRight: '1em' }}
          />
        ))}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;
    return (
      <Stepper
        activeStep={stepIndex}
        orientation='vertical'
        linear={false}
      >
        {this.props.questions.map((question, index) => (
          <Step
            key={index}
            completed={this.props.results[index]}
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
                  textAlign: 'right'
                }}>
                  {this.props.results[index]}
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
