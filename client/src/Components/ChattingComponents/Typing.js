import "./Typing.scss"
import {
    Stack,
    Box,
    Typography,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import React from "react";

export default function Typing() {
    const theme = useTheme();

    return (
        <Stack direction="row" justifyContent={"start"}>
            <Box
            px={1.5}
            py={1.5}
            sx={{
                backgroundColor: alpha(theme.palette.background.default, 1),
                borderRadius: 1.5,
                minWidth: "60px",
                minHeight: "30px"
            }}
            >
                <div class="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </Box>
        </Stack>
        
    )
}