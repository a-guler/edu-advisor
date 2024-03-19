import React from "react";
import {
  Stack,
  Box,
  Typography
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import MessageOption from "./MessageOption";

export default function ReplyMsg ({ el, menu }) {
    const theme = useTheme();
    return (
      <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
        <Box
          px={1.5}
          py={1.5}
          sx={{
            backgroundColor: el.incoming
              ? alpha(theme.palette.background.paper, 1)
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
              alignItems="center"
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 1),
  
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" color={theme.palette.text}>
                {el.message}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              {el.reply}
            </Typography>
          </Stack>
        </Box>
        {menu && <MessageOption />}
      </Stack>
    );
  };