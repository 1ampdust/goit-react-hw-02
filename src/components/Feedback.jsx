//Feedback.jsx
const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div>
      <h2>Feedback statistics:</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback percentage: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
