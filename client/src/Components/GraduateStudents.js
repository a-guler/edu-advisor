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
                    <GraduateStudent key={"graduate-"+graduate.id} id={graduate.id} image={fakerTR.image.avatarGitHub()} fullName={graduate.username} bio={fakerTR.person.bio()} schoolId={schoolId}/>
                )
            })}
            {graduateList.length === 0 && <p className="text-white mt-4">Unfortunately, we have no graduates from this school </p>}
        </div>
    )
}