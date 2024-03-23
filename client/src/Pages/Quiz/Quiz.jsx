import React from "react";
import { useState, useEffect } from "react";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import Result from "../../Components/Results/Result";
function Quiz() {
  const [interestQuestions, setInterestQuestions] = useState([]);
  const [otherQuestions, setOtherQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [quizEnd, setQuizEnd] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/questions").then((response) => {
      response.json().then((questionsData) => {
        setInterestQuestions(questionsData.interest_questions);
        setOtherQuestions([
          ...questionsData.risk_questions,
          ...questionsData.income_desire_questions,
        ]);
      });
    });
  }, []);
  return (
    <div className="flex justify-center mt-[100px]">
      {interestQuestions ? (
        quizEnd ? (
          <div className="bg-white w-[850px]  flex items-center justify-center p-4 border-2 border-solid border-transparent rounded-md">
            <Result answers={answers} />
          </div>
        ) : (
          <div className="bg-white w-[850px]  flex items-center justify-center p-4 border-2 border-solid border-transparent rounded-md">
            <QuestionCard
              interestQuestions={interestQuestions}
              otherQuestions={otherQuestions}
              setAnswers={setAnswers}
              answers={answers}
              quizEnd={quizEnd}
              setQuizEnd={setQuizEnd}
              count={count}
              setCount={setCount}
            />
          </div>
        )
      ) : (
        <div>
          <h1>Please Login</h1>
        </div>
      )}
    </div>
  );
}

export default Quiz;
