import { useState, useEffect } from "react";
import {Univercities} from "../advisorData"
import GraduateStudent from "./GraduateStudent";
import { useParams } from "react-router-dom";
import { api } from "./api";
import { fakerTR } from "@faker-js/faker";

export default function GraduateStudents(){
    const { schoolId } = useParams();
    const [graduateList, setGraduateList] = useState([])

    useEffect(() => {
        api().get("/graduate/"+schoolId).then((res) => setGraduateList(res.data))
        console.log(graduateList)
    },[])

    return (
        <div>
            <h2 className="text-white mb-3 ml-3">{Univercities[schoolId]}</h2>
            {graduateList.map((graduate) => {
                graduate.school=Univercities[schoolId];
                return (
                    <GraduateStudent key={"graduate-"+graduate.id} id={graduate.id} image={graduate.image} fullName={graduate.fullName} bio={graduate.bio} schoolId={schoolId}/>
                )
            })}
        </div>
    )
}