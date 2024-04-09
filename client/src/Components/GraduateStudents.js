import { useState, useEffect } from "react";
import { Univercities } from "../advisorData";
import GraduateStudent from "./GraduateStudent";
import { useParams } from "react-router-dom";
import { api } from "./api";
import { fakerTR } from "@faker-js/faker";

export default function GraduateStudents() {
  const { schoolId } = useParams();
  const [graduateList, setGraduateList] = useState([]);

  useEffect(() => {
    api()
      .get("/graduate/" + schoolId)
      .then((res) => setGraduateList(res.data));
    console.log(graduateList);
  }, []);

  return (
    <div className="p-2 ">
      <div className="bg-white rounded p-3 min-h-[200px]">
        <h2 className="text-black ml-3 flex items-center justify-center mb-[50px]">
          {Univercities[schoolId]}
        </h2>
        {graduateList.map((graduate) => {
          graduate.school = Univercities[schoolId];
          return (
            <GraduateStudent
              key={"graduate-" + graduate.id}
              id={graduate.id}
              image={fakerTR.image.avatarGitHub()}
              fullName={graduate.username}
              bio={fakerTR.person.bio()}
              schoolId={schoolId}
            />
          );
        })}
        {graduateList.length === 0 && (
          <p className="text-black mt-4 flex items-center justify-center">
            Unfortunately, we have no graduates from this school{" "}
          </p>
        )}
      </div>
    </div>
  );
}
