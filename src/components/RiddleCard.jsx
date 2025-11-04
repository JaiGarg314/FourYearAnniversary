import { useState } from 'react';
import './RiddleCard.css';

function RiddleCard({ riddle, onCorrectAnswer, riddleNumber }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!userAnswer.trim()) {
      setError('Please enter an answer!');
      return;
    }

    const normalizedAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrect = riddle.answer.toLowerCase().trim();

    if (normalizedAnswer === normalizedCorrect) {
      setError('');
      setUserAnswer('');
      setShowHint(false);
      onCorrectAnswer();
    } else {
      setError('Not quite... Try again! 💭');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="riddle-card">
      <div className="riddle-header">
        <span className="riddle-number">Riddle {riddleNumber}</span>
      </div>
      
      <div className="riddle-content">
        <p className="riddle-question">{riddle.question}</p>
        
        <form onSubmit={handleSubmit} className="answer-form">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="answer-input"
            autoFocus
          />
          
          <button type="submit" className="submit-btn">
            Submit Answer 💕
          </button>
        </form>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <button 
          onClick={() => setShowHint(!showHint)} 
          className="hint-btn"
        >
          {showHint ? '🔒 Hide Hint' : '💡 Need a Hint?'}
        </button>

        {showHint && (
          <div className="hint-box">
            <p className="hint-text">{riddle.hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RiddleCard;
