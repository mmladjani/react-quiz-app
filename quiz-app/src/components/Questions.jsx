import Answers from '../components/Answers';
import { Fragment, useContext } from 'react';
import { QuizContext } from '../store/QuizContext';

const Questions = () => {
  const { quizData } = useContext(QuizContext);

  return (
    <div id="question-overview">
      {quizData.map((questionData) => {
        return (
          <div id="question" key={questionData.id}>
            <h2>{questionData.text}</h2>
            <Answers answers={questionData.answers}></Answers>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
