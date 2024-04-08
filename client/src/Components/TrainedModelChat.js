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
      console.log(response);
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
    console.log(state);
  }

  useEffect(() => {
    console.log(location.state);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
            return <TextMsg el={el} menu={menu} />;
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
