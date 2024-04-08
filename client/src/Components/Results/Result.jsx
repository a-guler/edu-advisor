import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import MajorInfo from "./MajorInfo";
import PieChart from "./PieChart";
import { Navigate } from "react-router-dom";

function Result({ answers }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  //bütün soruların cevaplarını intererest,risk,income olarak bölme işlemi.
  //index1 interest uzunluğu,index2 risk uzunluğu, index3 income uzunluğu
  const cleanData = (data, index1, index2, index3) => {
    var dataPart1 = data.slice(0, index1);
    var dataPart2 = data.slice(index1, index1 + index2);
    var dataPart3 = data.slice(index2 + index1, index1 + index2 + index3);

    return [dataPart1, dataPart2, dataPart3];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("timeoutdone");
      fetchResults();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  var quizAnswersCleaned = cleanData(answers, 15, 5, 5);

  async function fetchResults() {
    try {
      let response = await fetch("http://127.0.0.1:5000/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizAnswersCleaned),
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setResults(data);
        setLoading(false);
      } else {
        console.error("HTTP Error:", response.status);
        setError(true);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError(true);
    }
  }

  function saveQuiz() {
    fetch("http://localhost:4000/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        quizResults: JSON.stringify(results.data),
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Başarıyla kaydedildi.Sonuç sayfasına yönlendiriliyorsunuz.");
          setRedirect(true);
        } else {
          alert("Failed to send quiz results. Status:", response.status);
        }
      })
      .catch((error) => {
        alert("Error sending quiz results:", error);
      });
  }
  if (redirect) {
    return <Navigate to={"/results"} />;
  }

  return (
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
                <MajorInfo data={results.data} />
                <div className="flex items-center justify-center">
                  <div>
                    <h1 className="mt-[30px] font-bold">
                      Major Category İstatistikleri
                    </h1>
                    <PieChart data={results.data} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className={`disabled:text-zinc-400 disabled:bg-gray-200 disabled:hover:border-gray-400 disabled:cursor-not-allowed flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue-600 hover:bg-blue-400 hover:text-white `}
                onClick={saveQuiz}
              >
                <div className="flex">
                  Kaydet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
