import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, marginTop, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log(!videos?.length);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
      sx={{ marginTop: marginTop || "14px" }}
    >
      {videos?.map((item, index) => {
        return (
          <Box key={index}>
            {item?.video?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
