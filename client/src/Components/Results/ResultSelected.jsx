import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import MajorInfo from "./MajorInfo";
import PieChart from "./PieChart";
import { useNavigate, useParams } from "react-router-dom";

function ResultSelected() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("timeoutdone");
      fetch(`http://localhost:4000/quiz/${id}`)
        .then((response) => {
          if (response.ok) {
            response.json().then((quizResult) => {
              setResults(JSON.parse(quizResult.quizResults));
              setLoading(false);
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function startChat() {
    setRedirect(true);
  }

  if (redirect) {
    return navigate("/trainedModel", { state: { recommend: results } });
  }

  return (
    <div className="flex justify-center mt-[100px]">
      <div className="bg-white w-[950px]  flex items-center justify-center p-4 border-2 border-solid border-transparent rounded-md">
        <div className="">
          <div className="min-h-[230px] flex items-center">
            {error && <div>error happened</div>}
            {loading && <Loading></Loading>}
            {!error && !loading && results && (
              <div>
                <div className="max-w-[900px] max-h-[650px] overflow-x-auto overflow-y-auto">
                  <div>
                    <h1 className="mt-[30px] mb-[30px] flex items-center justify-center font-bold">
                      Sizin İçin Modelimizin Bölüm Tahminleri
                    </h1>
                    <MajorInfo data={results} />
                    <div className="flex items-center justify-center">
                      <div>
                        <h1 className="mt-[30px] font-bold">
                          Major Category İstatistikleri
                        </h1>
                        <PieChart data={results} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end items-center">
                  <button
                    className={`disabled:text-zinc-400 disabled:bg-gray-200 disabled:hover:border-gray-400 disabled:cursor-not-allowed flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-blue-400 hover:text-white `}
                    onClick={startChat}
                  >
                    <div className="flex items-center">
                      ChatGPT ile quiz sonucunu değerlendir ve sohbet et.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSelected;
