import React from "react";
import {Univercities} from "../advisorData"
import { Link } from "react-router-dom";


export default function SelectGraduateFromSchool() {

    return(
        <div style={{maxHeight: "731px", overflowY: "auto"}} className="border border-white p-1">
            {Univercities.map((univercity, index) => {
                return (
                    <div className="rounded-lg border border-white text-white mb-3 ml-3 mr-3 w-fit p-2 cursor-pointer">
                        <Link to={`/graduates/${index}`}>
                            <h2>
                                {univercity}
                            </h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}