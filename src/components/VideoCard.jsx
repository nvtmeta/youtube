import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import CheckCircle from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "360px", sm: "100%", md: "320px" },
      height: { md: "306px" },
      boxShadow: "none",
      borderRadius: "10px",
      // margin: "0 2px 0 2px",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        component="img"
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          height: 180,
          backgroundSize: "cover",
          width: { xs: "360px", sm: "100%", md: "320px" },
        }}
      ></CardMedia>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          display: "flex",
          flexDirection: "column",
          height: 100,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtile1" fontWeight="600" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          style={{ margin: "14px 0 0 0" }}
        >
          <Typography variant="subtile2" fontWeight="600" color="#a59a9a">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "#ccc", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Link>
  </Card>
);

export default VideoCard;
