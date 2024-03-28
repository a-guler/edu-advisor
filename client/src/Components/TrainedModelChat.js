import { Stack, Box } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Timeline from "./ChattingComponents/Timeline"
import MediaMsg from "./ChattingComponents/MediaMsg"
import DocMsg from "./ChattingComponents/DocMsg"
import LinkMsg from "./ChattingComponents/LinkMsg"
import TextMsg from "./ChattingComponents/TextMsg"
import ReplyMsg from "./ChattingComponents/ReplyMsg"
import Footer from "./ChattingComponents/Footer";
import { api } from "./api";
import { el, fakerTR, id_ID } from "@faker-js/faker";

import { userContext } from "../UserContext";
import axios from "axios";

export default function TrainedModelChat(){

    const menu = true;
    const [messages, setMessages] = useState([]);
    const value = useContext(userContext)

    function addIncoming(data) {
      
    }

    function sendMessage(data) {
      
    }

    function getData() {
      
    }

    useEffect(() => {
      getData();
    },[])

    return(
        <div className="border border-white">
            <div className="flex flex-row bg-white">
            <img src={fakerTR.image.avatarGitHub()} alt="" className="w-16 h-16 rounded-full m-3"/>
            <div className="ml-7">
              <p className="mt-2 font-bold">
                {`ChatGPT Eğitilmiş Model`}
              </p>
            </div>
            
          </div>
            <Box p={3} style={{maxHeight: "631px", minHeight: "631px", overflowY: "auto", display: "flex", flexDirection: "column-reverse", background: "#bebebe"}}>
            <Stack spacing={3}>
              {messages.map((el, idx) => {
                switch (el.type) {
                  case "divider":
                    return (
                      // Timeline
                      <Timeline el={el} />
                    );

                  case "msg":
                    switch (el.subtype) {
                      case "img":
                        return (
                          // Media Message
                          <MediaMsg el={el} menu={menu} />
                        );

                      case "doc":
                        return (
                          // Doc Message
                          <DocMsg el={el} menu={menu} />
                        );
                      case "Link":
                        return (
                          //  Link Message
                          <LinkMsg el={el} menu={menu} />
                        );

                      case "reply":
                        return (
                          //  ReplyMessage
                          <ReplyMsg el={el} menu={menu} />
                        );

                      default:
                        return (
                          // Text Message
                          <TextMsg el={el} menu={menu} />
                        );
                    }

                  default:
                    return <></>;
                }
              })}
            </Stack>
            </Box>
            <div className="w-full">
                <Footer messages={messages} sendMessage={sendMessage} />
            </div>
        </div>
        
    );
}