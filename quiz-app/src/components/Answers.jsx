const Answers = ({ answers }) => {
  return (
    <div className="answers">
      {answers.map((answer, index) => {
        return (
          <p className="answer" key={index}>
            <button>{answer}</button>
          </p>
        );
      })}
    </div>
  );
};

export default Answers;
