import { Fragment } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import QuizContextProvider from './store/QuizContext';

function App() {
  return (
    <QuizContextProvider>
      <Fragment>
        <Header />
        <Quiz />
      </Fragment>
    </QuizContextProvider>
  );
}

export default App;