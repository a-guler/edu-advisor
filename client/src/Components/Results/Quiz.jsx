import { formatISO9075 } from "date-fns";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Quiz({ id, quizResults, createdAt, User }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    var tempData = parseString(quizResults);
    setData(tempData);
  }, []);

  function parseString(dataString) {
    const dataArray = dataString.split(/[,-]/);

    const parsedData = [];
    for (let i = 0; i < dataArray.length; i += 2) {
      parsedData.push({
        category: dataArray[i].trim(),
        major: dataArray[i + 1].trim(),
      });
    }

    return parsedData;
  }

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${id}`}>
          Quiz that created at:<time>{formatISO9075(new Date(createdAt))}</time>
        </Link>
      </div>

      <div className="content">
        <p className="info">
          <div href="" className="author">
            {User.username}
          </div>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">
          <h1 className="">
            1-Category:{data[0].category},Major:{data[0].major}
          </h1>
          <h1 className="">
            2-Category:{data[1].category},Major:{data[1].major}
          </h1>
          <h1 className="">
            3-Category:{data[2].category},Major:{data[2].major}
          </h1>
        </p>
      </div>
    </div>
  );
}

export default Quiz;
