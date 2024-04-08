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
    <div>
      {quizzes &&
        quizzes
          .sort((a, b) => a.createdAt < b.createdAt)
          .map((quiz) => <div>result</div>)}
    </div>
  );
}

export default Results;
