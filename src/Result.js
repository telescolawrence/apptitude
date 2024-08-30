import React from 'react';
import './Result.css'; // Ensure you have appropriate styling

function Result({ responses }) {
      // Find the category with the highest score
  const highestScoreCategory = Object.keys(responses).reduce((a, b) =>
    responses[a] > responses[b] ? a : b
  );

  // Interpretation text based on the highest score category
  const interpretations = {
    linguistic: "You may excel in reading, writing, and language-related tasks.",
    logical: "You might be strong in logical reasoning, problem-solving, and mathematics.",
    musical: "You could have a natural talent for music, rhythm, and sound.",
    bodilyKinesthetic: "You likely have good physical coordination and learn best through movement.",
    spatial: "You might have a talent for visual arts, design, and spatial reasoning.",
    interpersonal: "You probably have strong social skills and excel in teamwork.",
    intrapersonal: "You may have a deep understanding of yourself and your motivations.",
    naturalistic: "You likely have a strong connection to nature and the environment.",
    existential: "You may have a keen interest in philosophical or spiritual matters."
  };

  return (
    <div className="result-container">
      <h2 className="result-header">Your Results</h2>
      <ul className="result-list">
        {Object.entries(responses).map(([category, score], index) => (
          <li key={index} className="result-item">
            {category.charAt(0).toUpperCase() + category.slice(1)} Intelligence: {score}
          </li>
        ))}
      </ul>
      <div className="interpretation-section">
        <h3>Interpretation</h3>
        <p className="interpretation-text">{interpretations[highestScoreCategory]}</p>
        <p className="interpretation-note">
          This test can help learners and educators understand where their strengths lie,
          allowing them to tailor their learning experiences to their dominant intelligences.
        </p>
      </div>
    </div>
  );
}

export default Result;
