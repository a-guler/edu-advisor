import React from "react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { DownloadSimple, Image } from "phosphor-react";
import MessageOption from "./MessageOption";

export default function DocMsg({ el, menu }){
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
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <Image size={48} />
              <Typography variant="caption">Abstract.png</Typography>
              <IconButton>
                <DownloadSimple />
              </IconButton>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              {el.message}
            </Typography>
          </Stack>
        </Box>
        {menu && <MessageOption />}
      </Stack>
    );
  };