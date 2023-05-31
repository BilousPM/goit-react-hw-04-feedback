import React, { Component } from "react";
import FeedbackOptions from "./FeedbackWidget/FeedbackOptions";
import Statistics from './FeedbackWidget/Statistics';
import Section from "./FeedbackWidget/Section";
import Notification from './FeedbackWidget/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   onLeaveFeedback = (item) => {
    this.setState(prevState => ({[item]: prevState[item] + 1}))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    let positiveFeedback = 0;
    if (total === 0) {
      return positiveFeedback;
    }
    positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please Leave feedback">
          < FeedbackOptions
          options={Object.keys(this.state)}
          onClick={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePersentage={total}
          />) : (<Notification message="There is no feedback" />)
          }
        </Section>
      </div>
    )
  }
}

export default App