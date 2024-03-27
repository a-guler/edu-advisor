import { useParams } from "react-router-dom";
import {Univercities} from "../advisorData"
import React from "react";
import Chat from "./ChattingComponents/Chat";
import { useEffect, useState } from "react";
import { api } from "./api";
import { fakerTR } from "@faker-js/faker";

export default function GraduateStudentChat(){
  const { schoolId, id } = useParams();
  const [ graduateList, setGraduateList] = useState([])

  useEffect(() => {
    console.log("schoolId"+schoolId)
    api().get("/graduate/"+schoolId).then((res) => setGraduateList(res.data)).catch((e) => console.log(e))
    console.log(graduateList)
  },[])

  return (
    <div>
      { graduateList.length !== 0 &&
        <Chat fullName={graduateList[id].username} image={fakerTR.image.avatarGitHub()} school={Univercities[parseInt(graduateList[id].school_name)]}/>
      }
    </div>
    
  )
}