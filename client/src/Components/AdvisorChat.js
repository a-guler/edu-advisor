import { useParams } from "react-router-dom";
import React from "react";
import Chat from "./ChattingComponents/Chat";
import { useEffect, useState } from "react";
import { api } from "./api";
import { fakerTR } from "@faker-js/faker";

export default function AdvisorChat(){
  const { id } = useParams();
  const [advisorList, setAdvisorList] = useState([])

    
  useEffect(() => {
      api().get("/advisor").then((res) => setAdvisorList(res.data))
      console.log(advisorList,id)
  },[]);

  return (
    <div>
      {advisorList.filter((advisor) => advisor.id + "" === id).map((advisor) => {
        return (
          <Chat fullName={advisor.username} image={fakerTR.image.avatarGitHub()} id={id}/>
        )
      })
      }
    </div>
    
  )
}