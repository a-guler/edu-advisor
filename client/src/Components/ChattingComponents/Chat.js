import { Stack, Box } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Timeline from "./Timeline"
import MediaMsg from "./MediaMsg"
import DocMsg from "./DocMsg"
import LinkMsg from "./LinkMsg"
import TextMsg from "./TextMsg"
import ReplyMsg from "./ReplyMsg"
import { el, fakerTR, id_ID } from "@faker-js/faker";
import Footer from "./Footer";
import { api } from "../api";
import { userContext } from "../../UserContext";
import axios from "axios";

export default function Chat({fullName, image, school, id}){
    const menu = true;
    const [messages, setMessages] = useState([]);
    const value = useContext(userContext)

    function addIncoming(data) {
      if (value.userInfo.role === 'Candidate'){
        data.forEach(element => {
          element.incoming = element.toUserId === id
        });
      } else {
        data.forEach(element => {
          element.incoming = element.fromUserId === id
        });
      }
      console.log(data);
      return data;
    }

    function sendMessage(data) {
      async function test()  {
        const response = await axios.post(`http://localhost:4000/messages/${id}/${value.userInfo.id}/${school !== undefined ? 'false' : 'true'}`, data);
        getData();
      }
      test()
    }

    function getData() {
      api().get(`/messages/${id}/${value.userInfo.id}/${school !== undefined ? 'false' : 'true'}`)
      .then((res) => setMessages(addIncoming(res.data)))
    }

    useEffect(() => {
      getData();
    },[])

    return (
        <div className="border border-white" >
          <div className="flex flex-row bg-white">
            <img src={image} alt="" className="w-16 h-16 rounded-full m-3"/>
            <div className="ml-7">
              <p className="mt-2 font-bold">
                {`${fullName} ${school !== undefined ? "(" +school+")" : ""}`}
              </p>
              <p className="mt-2" style={{color: "gray"}}>
                {fakerTR.date.weekday()}
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
    )
}