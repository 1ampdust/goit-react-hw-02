const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  return (
    <div>
      <h2>Feedback statistics:</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;