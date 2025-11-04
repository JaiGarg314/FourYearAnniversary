import './FinalPrize.css';

function FinalPrize() {
  return (
    <div className="final-prize">
      <div className="confetti-container">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="confetti" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}></div>
        ))}
      </div>

      <div className="prize-content">
        <h2 className="prize-title">
          🎉 Congratulations! 🎉
        </h2>
        
        <p className="prize-message">
          You've completed all the riddles!
        </p>

        <div className="hearts-animation">
          <span className="big-heart">❤️</span>
        </div>

        <div className="prize-box">
          <h3 className="prize-heading">Your Prize:</h3>
          <p className="prize-text">
            A romantic day I will plan during Thanksgiving Break
          </p>
          <p className="prize-subtext">
            (Lunch, Dinner, and some fun activities)
          </p>
        </div>

        <div className="love-note">
          <p className="note-text">
            I cant believe it has already been 4 years. Thank you for always being there to for me. 
            You're the love of my life and my best friend. I love every second I spend with you no 
            matter our physical distance. You are my perfect shark and you make my life so much more vibrant.
            I can't wait to spend the rest of my life with you and make so many fun memories. 
          </p>
          <p className="signature">
            I love you more than anything,<br />
            Jai 💕
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinalPrize;
