import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";

function Results() {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/quiz").then((response) => {
      response.json().then((quizzes) => {
        setQuizzes(quizzes);
        console.log(quizzes);
      });
    });
  }, []);
  return (
    <div className="border mt-[80px] p-4 min-h-[450px] max-h-[850px] rounded-xl overflow-x-auto bg-white">
      <div className="flex justify-center items-center mt-[20px] mb-[40px] text-3xl border-b-2 pb-4">
        <h1 className="text-black">Quiz Geçmişiniz</h1>
      </div>
      {quizzes &&
        quizzes
          .sort((a, b) => a.createdAt < b.createdAt)
          .map((quiz) => <Quiz key={quiz.id} {...quiz} />)}
    </div>
  );
}

export default Results;
