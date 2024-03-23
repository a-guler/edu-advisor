import { useState } from "react";
import {GraduateStudentList, Univercities} from "../advisorData"
import GraduateStudent from "./GraduateStudent";
import { useParams } from "react-router-dom";


export default function GraduateStudents(){
    const { schoolId } = useParams();

    return (
        <div>
            <h2 className="text-white mb-3 ml-3">{Univercities[schoolId]}</h2>
            {GraduateStudentList.map((graduate) => {
                graduate.school=Univercities[schoolId];
                return (
                    <GraduateStudent id={graduate.id} image={graduate.image} fullName={graduate.fullName} bio={graduate.bio} schoolId={schoolId}/>
                )
            })}
        </div>
    )
}