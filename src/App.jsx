import { useState } from 'react'
import './App.css'
import RiddleCard from './components/RiddleCard'
import ProgressTracker from './components/ProgressTracker'
import FinalPrize from './components/FinalPrize'

// Define your riddles here - you can customize these!
const riddles = [
  {
    id: 1,
    question: "How did you respond to my first asking you out?",
    answer: "Ya I do",
    hint: "It is the exact message"
  },
  {
    id: 2,
    question: "What was the first big Project we did together?",
    answer: "The Congressional App Challenge",
    hint: "4 words"
  },
  {
    id: 3,
    question: "Where was the first place we slept together?",
    answer: "Cal Poly",
    hint: "Its a school"
  },
  {
    id: 4,
    question: "What metal is my ring made of?",
    answer: "Tungsten Carbide",
    hint: "WC"
  },
  {
    id: 5,
    question: "What song do I listen to when I miss you?",
    answer: "Invisible String",
    hint: "Folklore"
  },
  {
    id: 6,
    question: "What were the surpise songs for our first Eras Tour?",
    answer: "I Know Places and King of My Heart",
    hint: "3 words and 4 words"
  },
  {
    id: 7,
    question: "What was the date I asked you out?",
    answer: "10/30/21",
    hint: "MM/DD/YY"
  },
  {
    id: 8,
    question: "What is my biggest problem with the Aquarius Star Sign?",
    answer: "It is an air sign",
    hint: "It is a ___ sign"
  },
  {
    id: 9,
    question: "What city were we first together in outside of California?",
    answer: "New York",
    hint: "Big Apple"
  },
  {
    id: 10,
    question: "Who always wins the 'who loves who more fight'",
    answer: "Jai",
    hint: "You know"
  }
];

function App() {
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [completedRiddles, setCompletedRiddles] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCorrectAnswer = () => {
    const newCompleted = [...completedRiddles, riddles[currentRiddle].id];
    setCompletedRiddles(newCompleted);
    
    if (currentRiddle < riddles.length - 1) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        setCurrentRiddle(currentRiddle + 1);
      }, 2000);
    } else {
      setShowCelebration(true);
    }
  };

  const isComplete = completedRiddles.length === riddles.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">
          <span className="heart">❤️</span>
          Our 4 Year Anniversary
          <span className="heart">❤️</span>
        </h1>
        <p className="subtitle">A Scavenger Hunt of Love & Memories</p>
      </header>

      <ProgressTracker 
        total={riddles.length} 
        completed={completedRiddles.length} 
      />

      {showCelebration && currentRiddle < riddles.length - 1 && (
        <div className="celebration">
          <div className="celebration-content">
            <h2>🎉 Correct! 🎉</h2>
            <p>Moving to the next riddle...</p>
          </div>
        </div>
      )}

      {!isComplete ? (
        <RiddleCard 
          riddle={riddles[currentRiddle]}
          onCorrectAnswer={handleCorrectAnswer}
          riddleNumber={currentRiddle + 1}
        />
      ) : (
        <FinalPrize />
      )}

      <footer className="app-footer">
        <p>Made with love for my favorite person 💕</p>
      </footer>
    </div>
  );
}

export default App
