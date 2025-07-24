import React from "react";
import YouTube from "react-youtube";
import { Box, Typography } from "@mui/material";

export default function YouTubePlayer({ videoId, title }) {
  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        mt: 4,
        p: 2,
        bgcolor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" mb={2}>
        {title || "YouTube Video"}
      </Typography>
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
}
