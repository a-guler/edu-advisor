import React from "react";
import {
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Timeline({ el }){
    const theme = useTheme();
    return (
      <Stack direction="row" alignItems={"center"} justifyContent="space-between">
        <Divider width="46%" />
        <Typography variant="caption" sx={{ color: theme.palette.text }}>
          {el.text}
        </Typography>
        <Divider width="46%" />
      </Stack>
    );
}
