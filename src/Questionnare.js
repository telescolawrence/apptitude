import React, { useState } from 'react';
import './Questionnaire.css'; // For additional styling

const questions = {
    linguistic: [
      "I enjoy reading books, magazines, or articles.",
      "I find it easy to learn new words and use them in conversation.",
      "I like to write stories, poems, or essays in my free time.",
      "I am good at explaining things to others in a clear and concise way.",
      "I enjoy playing word games like Scrabble, crosswords, or puzzles."
    ],
    logical: [
      "I enjoy solving puzzles, riddles, and logic problems.",
      "I am good at math and can quickly understand new mathematical concepts.",
      "I like conducting experiments or exploring scientific ideas.",
      "I often think in a logical, step-by-step way when solving problems.",
      "I enjoy playing strategy games that involve planning and thinking ahead."
    ],
    musical: [
      "I can easily remember tunes and songs.",
      "I enjoy listening to music and often sing or hum along.",
      "I play a musical instrument or would like to learn one.",
      "I can recognize different musical instruments in a song.",
      "I often create rhythms or melodies in my head."
    ],
    bodilyKinesthetic: [
      "I enjoy physical activities like sports, dance, or exercise.",
      "I learn best when I can move around and use my hands.",
      "I have good coordination and am good at activities that require dexterity.",
      "I like to build or create things with my hands.",
      "I express myself well through body language, gestures, or movement."
    ],
    spatial: [
      "I can easily visualize objects or scenes in my mind.",
      "I enjoy drawing, painting, or other visual arts.",
      "I am good at reading maps, charts, or diagrams.",
      "I can easily find my way around unfamiliar places.",
      "I enjoy building models or working on design projects."
    ],
    interpersonal: [
      "I understand how others are feeling and can empathize with them.",
      "I enjoy working in groups and often take the lead in group activities.",
      "I am good at resolving conflicts and helping others get along.",
      "I make friends easily and enjoy socializing.",
      "I am often sought out by others for advice or help."
    ],
    intrapersonal: [
      "I am aware of my own emotions and how they affect my actions.",
      "I often spend time reflecting on my thoughts and experiences.",
      "I have clear goals and understand what is important to me.",
      "I prefer to work alone and often find that I am more productive that way.",
      "I have a strong sense of my strengths and weaknesses."
    ],
    naturalistic: [
      "I enjoy spending time outdoors and feel connected to nature.",
      "I can identify different types of plants, animals, or rocks.",
      "I am interested in learning about the environment and conservation.",
      "I enjoy activities like hiking, gardening, or bird watching.",
      "I notice and appreciate changes in the weather or seasons."
    ],
    existential: [
      "I often think about deep questions like the meaning of life or the universe.",
      "I am interested in different religions, philosophies, or spiritual practices.",
      "I enjoy discussing abstract concepts like time, existence, or morality.",
      "I often reflect on my place in the world and the impact I have on others.",
      "I feel a strong connection to something greater than myself, whether spiritual or philosophical."
    ]
  };

function Questionnaire({ onRespond, onSubmit }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  console.log("first", selectedOptions);

  const handleSelect = (category, questionIndex, score) => {
    const updatedOptions = {
      ...selectedOptions,
      [category]: {
        ...selectedOptions[category],
        [questionIndex]: score
      }
    };
    setSelectedOptions(updatedOptions);
    onRespond(updatedOptions);  // Pass the entire updated selectedOptions object
  };


  return (
    <div className="questionnaire">
      {Object.entries(questions).map(([category, qList], categoryIndex) => (
        <div key={categoryIndex} className="category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Intelligence</h2>
          {qList.map((question, questionIndex) => (
            <div key={questionIndex} className="question">
              <p>{question}</p>
              <div className="options">
                {[1, 2, 3, 4, 5].map(score => (
                  <button
                    key={score}
                    onClick={() => handleSelect(category, questionIndex, score)}
                    className={
                      selectedOptions[category]?.[questionIndex] === score
                        ? 'selected'
                        : ''
                    }
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <button className="submit-btn" onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Questionnaire;
