import React, { useState } from "react";

const interestAnswers = [
  {
    answer: "Katılıyorum.",
    value: "1",
    from: "teal",
    to: "lime",
  },
  {
    answer: "Katılmıyorum",
    value: "0",
    from: "pink",
    to: "orange",
  },
];
function QuestionCard({
  interestQuestions,
  otherQuestions,
  setAnswers,
  answers,
  quizEnd,
  setQuizEnd,
  count,
  setCount,
}) {
  const [currAnswer, setCurrAnswer] = useState(null);

  const setCurrentAnswer = (value) => {
    setCurrAnswer(value);
  };
  const nextQuestion = () => {
    setAnswers([...answers, currAnswer]);
    setCurrAnswer(null);
    setCount(count + 1);
    if (count === 24) {
      setQuizEnd(true);
    }
  };

  return (
    <div className="mx-[20px]">
      <div className="">
        <span className="text-3xl font-medium text-indigo-800">
          {count + 1}
        </span>
        <span className="text-l text-zinc-400">/25</span>
        <h1 className="mt-[10px]">Size uygun seçeneği işaretleyin.</h1>
      </div>

      {count < 15 && (
        <div className="min-h-[230px] flex items-center">
          <div className="">
            <h2 className="text-2xl m-0 font-bold text-indigo-950">
              {interestQuestions[count]?.question}
            </h2>
            <div className="grid grid-cols-2 gap-5 mt-[50px]">
              {interestAnswers.map((answer) => (
                <div
                  key={answer.value}
                  className="flex items-center justify-center"
                >
                  <button
                    onClick={() => setCurrentAnswer(answer.value)}
                    className={`w-[400px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${
                      answer.value === "1"
                        ? "from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                        : "from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    }`}
                  >
                    <span
                      className={`w-[400px] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 ${
                        answer.value === "1"
                          ? "dark:bg-lime-500"
                          : "dark:bg-rose-500"
                      }`}
                    >
                      {answer.answer}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {count >= 15 && count <= 24 && (
        <div className="min-h-[230px] flex items-center">
          <div className="">
            <h2 className="text-2xl m-0 font-bold text-indigo-950">
              {otherQuestions[count - 15]?.statement}
            </h2>
            <div className="grid grid-rows-2 gap-5 mt-[50px]">
              <button
                onClick={() => setCurrentAnswer("0")}
                className="w-[779px] text-l text-white bg-yellow-600 hover:text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
              >
                {otherQuestions[count - 15].statementn}
              </button>
              <button
                onClick={() => setCurrentAnswer("0.2")}
                className="text-l text-white bg-yellow-600 hover:text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
              >
                {otherQuestions[count - 15].statementp}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <button
          className={`disabled:text-zinc-400 disabled:bg-gray-200 disabled:hover:border-gray-400 disabled:cursor-not-allowed flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-blue-400 hover:text-white `}
          onClick={nextQuestion}
          disabled={currAnswer === null}
        >
          <div className="flex">
            {count === 24 ? "Bitir" : "Sonraki"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
