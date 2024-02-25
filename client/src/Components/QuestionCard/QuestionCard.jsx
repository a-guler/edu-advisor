import React, { useState } from "react";

function QuestionCard({
  interestQuestions,
  riskQuestions,
  incomeQuestions,
  setAnswers,
  quizEnd,
  setQuizEnd,
  count,
  setCount,
}) {
  const [currAnswer, setCurrAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);

  const setCurrentAnswer = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {count < 15 && (
        <div className="min-h-[250px] mt-2 ">
          <h1 className="text-md underline decoration-dotted decoration-sky-600 hover:decoration-blue-400">
            Size uygun seçeneği işaretleyin:
          </h1>
          <div className="text-xl mt-[45px] font-bold">
            {count + 1}/25 - {interestQuestions[count]?.question}
          </div>
          <div className="grid grid-cols-2 gap-5 mt-[60px]">
            <div className="flex items-center justify-center w-full">
              <button
                onClick={setCurrentAnswer}
                value="1"
                class=" w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
              >
                <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-lime-500 rounded-md group-hover:bg-opacity-0">
                  Katılıyorum
                </span>
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={setCurrentAnswer}
                value="1"
                class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-rose-500 rounded-md group-hover:bg-opacity-0">
                  Katılmıyorum
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      {count >= 15 && count < 20 && (
        <div>
          <h1>risk{count}</h1>
        </div>
      )}
      {count >= 20 && (
        <div>
          <h1>income{count}</h1>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
