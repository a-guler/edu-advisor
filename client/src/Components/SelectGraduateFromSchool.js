import React from "react";
import { Univercities } from "../advisorData";
import { Link } from "react-router-dom";

export default function SelectGraduateFromSchool() {
  return (
    <div
      style={{ maxHeight: "700px", overflowY: "auto" }}
      className="border border-black p-1 bg-white rounded-xl"
    >
      <div>
        <div className="flex justify-center items-center mt-[20px] mb-[40px] text-3xl border-b-2 pb-4">
          <h1 className="text-black">Mezunlar</h1>
        </div>
        {Univercities.map((univercity, index) => {
          return (
            <div className="rounded-lg border border-black text-black mb-3 ml-3 mr-3 w-fit p-2 cursor-pointer">
              <Link to={`/graduates/${index}`}>
                <h2>{univercity}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
