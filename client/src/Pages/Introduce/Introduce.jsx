import { useContext, useState } from "react";
import { userContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
function Introduce() {
  const [quizName, setQuizName] = useState("");

  const { userInfo } = useContext(userContext);

  const navigate = useNavigate();
  const startQuiz = () => {
    if (userInfo?.username) {
      console.log("burda" + quizName);
      navigate("/quiz", { state: { quizName: quizName } });
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="bg-white w-full max-w-[860px] flex flex-col items-center justify-center p-4 border-2 border-solid border-transparent rounded-md ">
        <div className="grid grid-cols-2">
          <div className="">
            <img
              className="object-cover w-[350px]"
              src="https://www.marquette.edu/explore/choose-your-major/images/choose-your-major-wordmark.svg"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-2xl text-center m-6">
              Hangi konuda uzmanlaşmalıyım?
            </h2>
            <div className="text-xl text-center">
              Karşınıza çıkacak soruları yanıtlayın, biz de sonuçlarınızı analiz
              edip hangi ana dalların size uygun olabileceğini gösterelim.
            </div>
          </div>
        </div>

        <div className="flex justify-between w-1/3 items-center">
          <input
            className="postInput"
            type="text"
            placeholder="QuizName"
            value={quizName}
            onChange={(e) => {
              setQuizName(e.target.value);
            }}
          />
        </div>

        <div
          onClick={startQuiz}
          className="w-[200px] h-[50px] text-sm bg-pink-500 text-white flex items-center justify-center border-2 border-solid border-transparent rounded-md mt-[10px] cursor-pointer"
        >
          Quize Başla
        </div>
      </div>
    </div>
  );
}

export default Introduce;
