import { Stack, Box } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import TextMsg from "./ChattingComponents/TextMsg";
import Footer from "./ChattingComponents/Footer";
import { useLocation } from "react-router-dom";
import { userContext } from "../UserContext";
import axios from "axios";
import Typing from "./ChattingComponents/Typing";

export default function TrainedModelChat() {
  const menu = true;
  const [state, setState] = useState({ messages: [], waitingAnswer: false });
  const value = useContext(userContext);
  const location = useLocation();

  const recommend = location.state.recommend;

  function sendMessage(data) {
    let newMessages = [...state.messages, data];
    setState({ messages: newMessages, waitingAnswer: true });
    async function asyncFunction() {
      let chatGptData = {
        prompt: data.message,
        recommend: recommend,
        history: convertToChatFormat(
          state.messages.slice(Math.max(state.messages.length - 4, 0))
        ),
      };
      let header = {
        headers: {
          "X-API-KEY": "7b77681e-cf15-4646-a0b7-51f65a9c4ded",
        },
      };
      const response = await axios.post(
        "https://aguler-edu-advisor.hf.space/api/v1/secure/edu-advisor",
        chatGptData,
        header
      );

      setState({
        messages: [
          ...state.messages,
          data,
          { incoming: true, message: response.data, type: "msg" },
        ],
        waitingAnswer: false,
      });
    }
    asyncFunction();
  }
  function convertToChatFormat(data) {
    let formattedData = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.incoming) {
        formattedData.push({
          role: "assistant",
          content: item.message,
        });
      } else {
        formattedData.push({
          role: "user",
          content: item.message,
        });
      }
    }
    return formattedData;
  }

  return (
    <div className="border border-white rounded-xl">
      <div className="flex flex-row bg-white rounded-t-xl">
        <img src={"gpt.png"} alt="" className="w-16 h-16 rounded-full m-3" />
        <div className="ml-7">
          <p className="mt-2 font-bold">{`ChatGPT Eğitilmiş Model`}</p>
        </div>
      </div>
      <Box
        p={3}
        style={{
          maxHeight: "631px",
          minHeight: "631px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          background: "#bebebe",
        }}
      >
        <Stack spacing={3}>
          {state.messages.map((el, idx) => {
            return <TextMsg el={el} key={idx} menu={menu} />;
          })}
          {state.waitingAnswer && <Typing />}
        </Stack>
      </Box>
      <div className="w-full rounded-b-xl">
        <Footer messages={state.messages} sendMessage={sendMessage} />
      </div>
    </div>
  );
}
