import { createContext } from 'react';
import QUESTIONS_DUMMY_DATA from '../questions';

export const QuizContext = createContext({
  quizData: QUESTIONS_DUMMY_DATA,
  selectedAnswer: () => {}
})

const QuizContextProvider = ({ children }) => {

  const valueCtx = {
    quizData: QUESTIONS_DUMMY_DATA,
    selectedAnswer: () => {}
  }

  return (
    <QuizContext.Provider value={valueCtx}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider;