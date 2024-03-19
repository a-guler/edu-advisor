import { Link, useParams } from "react-router-dom";
import {AdvisorList, Chat_History} from "../advisorData"
import { Stack, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Timeline from "./ChattingComponents/Timeline"
import MediaMsg from "./ChattingComponents/MediaMsg"
import DocMsg from "./ChattingComponents/DocMsg"
import LinkMsg from "./ChattingComponents/LinkMsg"
import TextMsg from "./ChattingComponents/TextMsg"
import ReplyMsg from "./ChattingComponents/ReplyMsg"

export default function AdvisorChat(){
    const { id } = useParams();
    const menu = true;


    return (
        <div>
            {AdvisorList[id].fullName}
            <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, idx) => {
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
        </div>
    )
}