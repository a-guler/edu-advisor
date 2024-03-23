import React from "react";
import {
  Stack,
  Box,
  Typography
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import Embed from "react-embed";
import MessageOption from "./MessageOption";

export default function LinkMsg({ el, menu }) {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.default, 1)
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="column"
              spacing={3}
              alignItems="start"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <Stack direction={"column"} spacing={2}>
                <Embed
                  width="300px"
                  isDark
                  url={`https://youtu.be/xoWxBR34qLE`}
                />
              </Stack>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              <div dangerouslySetInnerHTML={{ __html: el.message }}></div>
            </Typography>
          </Stack>
        </Box>
        {menu && <MessageOption />}
      </Stack>
    );
  };