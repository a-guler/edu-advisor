import React from "react";
import Chat from "./ChattingComponents/Chat";
import {Univercities} from "../advisorData"
import { useContext } from "react";
import { fakerTR } from "@faker-js/faker";
import { Context } from "../MessageContext";
import { userContext } from "../UserContext";

export default function UserChat(){
  const value = useContext(Context)
  const userValue = useContext(userContext)
    
  return (
    <div>
        <Chat fullName={value.user.username} image={fakerTR.image.avatarGitHub()} id={value.user.id} />
    </div>
    
  )
}