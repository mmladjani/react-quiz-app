import { useState } from 'react';
import Questions from '../components/Questions';

export default function Quiz() {
    
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;

  return (
    <div id="quiz">
      <Questions />
    </div>
  );
}