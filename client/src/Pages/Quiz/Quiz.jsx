import React from "react";
import { useState, useEffect } from "react";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";

function Quiz() {
  const [interestQuestions, setInterestQuestions] = useState([]);
  const [riskQuestions, setRiskQuestions] = useState([]);
  const [incomeQuestions, setIncomeQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [quizEnd, setQuizEnd] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4000/questions").then((response) => {
      response.json().then((questionsData) => {
        setInterestQuestions(questionsData.interest_questions);
        setRiskQuestions(questionsData.risk_questions);
        setIncomeQuestions(questionsData.incomeQuestions);
      });
    });
  }, []);
  return (
    <div className="w-full flex justify-center mt-[100px]">
      {interestQuestions ? (
        <div className="bg-white w-full max-w-[860px] flex flex-col items-center justify-center p-4 border-2 border-solid border-transparent rounded-md">
          <QuestionCard
            interestQuestions={interestQuestions}
            incomeQuestions={incomeQuestions}
            riskQuestions={riskQuestions}
            setAnswers={setAnswers}
            quizEnd={quizEnd}
            setQuizEnd={setQuizEnd}
            count={count}
            setCount={setCount}
          ></QuestionCard>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
        </div>
      )}
    </div>
  );
}

export default Quiz;
