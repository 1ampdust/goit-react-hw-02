//App.jsx
import { useState, useEffect } from 'react';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0
    };
    return initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;
