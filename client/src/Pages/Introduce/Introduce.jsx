import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../UserContext";

function Introduce() {
  const navigate = useNavigate();
  const { userInfo } = useContext(userContext);

  const startQuiz = () => {
    if (userInfo?.username) {
      navigate("/quiz");
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
              Aşağıda görünen soruları yanıtlayın, biz de sonuçlarınızı analiz
              edip hangi ana dalların size uygun olabileceğini gösterelim.
            </div>
          </div>
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
