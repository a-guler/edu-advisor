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
    <div className="border mt-[100px] p-4 min-h-[450px] max-h-[550px] rounded-xl overflow-x-auto">
      <div className="flex justify-center items-center mt-[20px] mb-[40px] text-3xl">
        <h1 className="text-white">Quiz Geçmişiniz</h1>
      </div>
      {quizzes &&
        quizzes
          .sort((a, b) => a.createdAt < b.createdAt)
          .map((quiz) => <Quiz key={quiz.id} {...quiz} />)}
    </div>
  );
}

export default Results;
