import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import MajorInfo from "./MajorInfo";
import PieChart from "./PieChart";

function Result({ answers }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //bütün soruların cevaplarını intererest,risk,income olarak bölme işlemi.
  //index1 interest uzunluğu,index2 risk uzunluğu, index3 income uzunluğu
  const cleanData = (data, index1, index2, index3) => {
    var dataPart1 = data.slice(0, index1);
    var dataPart2 = data.slice(index1, index1 + index2);
    var dataPart3 = data.slice(index2 + index1, index1 + index2 + index3);

    console.log([dataPart1, dataPart2, dataPart3]);
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

  return (
    <div className="max-w-[1800px] max-h-[700px] overflow-x-auto overflow-y-auto">
      <div className="mx-[20px] min-h-[230px] flex items-center justify-center">
        {error && <div>error happened</div>}
        {loading && <Loading></Loading>}
        {!error && !loading && results && (
          <div>
            <MajorInfo data={results.data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
