import Advisor from "./Advisor";
import { useEffect, useState } from "react";
import { api } from "./api";
import { fakerTR } from "@faker-js/faker";

export default function Advisors() {
  const [advisorList, setAdvisorList] = useState([]);

  useEffect(() => {
    api()
      .get("/advisor")
      .then((res) => setAdvisorList(res.data));
  }, []);

  return (
    <div className="bg-white rounded-xl p-3">
      <div className="flex justify-center items-center mt-[20px] mb-[40px] text-3xl border-b-2 pb-4">
        <h1 className="text-black">Rehberler</h1>
      </div>
      {advisorList.map((advisor) => {
        return (
          <Advisor
            key={"advisor-" + advisor.id}
            id={advisor.id}
            image={fakerTR.image.avatarGitHub()}
            fullName={advisor.name}
            bio={fakerTR.person.bio()}
          />
        );
      })}
    </div>
  );
}
