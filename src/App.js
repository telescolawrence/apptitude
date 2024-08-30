import React, { useState } from 'react';
import Result from './Result';
import './App.css'; // For styling
import Questionnaire from './Questionnare';

function App() {
  const [responses, setResponses] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleResponse = (updatedOptions) => {
    // Calculate the latest scores from updatedOptions
    const newResponses = {};
    for (let category in updatedOptions) {
      const scores = Object.values(updatedOptions[category]);
      newResponses[category] = scores.reduce((total, score) => total + score, 0);
    }
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="app-container">
      <h1 className="header">Multiple Intelligences Aptitude Test</h1>
      {!showResult ? (
        <Questionnaire onRespond={handleResponse} onSubmit={handleSubmit} />
      ) : (
        <Result responses={responses} />
      )}
    </div>
  );
}

export default App;
