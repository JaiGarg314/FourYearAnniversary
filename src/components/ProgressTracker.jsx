import './ProgressTracker.css';

function ProgressTracker({ total, completed }) {
  const percentage = (completed / total) * 100;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <span className="progress-text">Progress: {completed} / {total}</span>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        >
          {percentage > 0 && (
            <span className="progress-percentage">{Math.round(percentage)}%</span>
          )}
        </div>
      </div>

      <div className="hearts-container">
        {Array.from({ length: total }, (_, index) => (
          <span 
            key={index} 
            className={`heart-icon ${index < completed ? 'filled' : ''}`}
          >
            {index < completed ? '❤️' : '🤍'}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracker;
