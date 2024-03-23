import React from "react";
import {
  Stack,
  Box,
  Typography,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import MessageOption from "./MessageOption"

export default function TextMsg({ el, menu }) {
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
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Box>
        {menu && <MessageOption />}
      </Stack>
    );
  };