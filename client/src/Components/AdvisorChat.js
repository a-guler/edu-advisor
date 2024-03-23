import { useParams } from "react-router-dom";
import {AdvisorList} from "../advisorData"
import React from "react";
import Chat from "./ChattingComponents/Chat";

export default function AdvisorChat(){
  const { id } = useParams();

  return (
    <Chat fullName={AdvisorList[id].fullName} image={AdvisorList[id].image}/>
  )
}