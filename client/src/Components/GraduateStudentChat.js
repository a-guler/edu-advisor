import { useParams } from "react-router-dom";
import {GraduateStudentList} from "../advisorData"
import React from "react";
import Chat from "./ChattingComponents/Chat";

export default function GraduateStudentChat(){
  const { id } = useParams();

  return (
    <Chat fullName={GraduateStudentList[id].fullName} image={GraduateStudentList[id].image} school={GraduateStudentList[id].school}/>
  )
}